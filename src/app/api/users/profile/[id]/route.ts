import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/utils/db";
import { verifyToken } from "@/app/utils/verifyToken";
import { ProfileID } from "@/app/utils/types";
import { UpdateProfileDTO } from "@/app/utils/dtos";
import { updateUserProfileSchema } from "@/app/utils/validationSchemas";
import bcrypt from "bcryptjs";

/**
 * @Route DELETE ~/api/users/profle/:id
 * @Summary Delete an existing account
 * @Tags Users
 * @Accept json
 * @Produce json
 * @description this method deletes an existing user
 * @Route /api/users/profle/:id
 * @access private
 */

export async function DELETE(requset: NextRequest, props: ProfileID) {
  try {
    // get user id from params
    const { id } = await props.params;

    // search for user
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      include: { comments: true },
    });

    // check if user exist
    if (!user) {
      return NextResponse.json(
        { message: "المستخدم غير مُسجل" },
        { status: 404 }
      );
    }

    // verify token
    const userPayload = verifyToken(requset);

    // check authorization
    if (userPayload !== null && userPayload.id === user.id) {
      //delete user from database
      await prisma.user.delete({ where: { id: parseInt(id) } });

      // check for deleted user's comments
      const commentIds: number[] = user?.comments.map((comment) => comment.id);

      // delete comments for deleted user
      await prisma.user.deleteMany({ where: { id: { in: commentIds } } });

      // return success message
      return NextResponse.json(
        { message: "تم حذف الحساب بنجاح" },
        { status: 200 }
      );
    }
  } catch (error) {
    // return error message
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @Route PUT ~/api/users/profle/:id
 * @Summary Update an existing account
 * @Tags Users
 * @Accept json
 * @Produce json
 * @description this method updates an existing account
 * @Route /api/users/profle/:id
 * @access private
 */

export async function PUT(request: NextRequest, props: ProfileID) {
  try {
    // get user profile id from params
    const { id } = await props.params;

    // search for user
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });

    // if user does not exist
    if (!user) {
      return NextResponse.json(
        { message: "المستخدم غير مٌسجل" },
        { status: 404 }
      );
    }

    // verify token
    const userPayload = verifyToken(request);

    // check authorization
    if (userPayload === null || userPayload.id !== user.id) {
      return NextResponse.json(
        { message: "غير مسموع بتعديل البيانات" },
        { status: 403 }
      );
    }

    // get data from body
    const body = (await request.json()) as UpdateProfileDTO;

    // validate data form schema
    const validation = updateUserProfileSchema.safeParse(body);

    // check validation
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        {
          status: 400,
        }
      );
    }

    // hash password
    if (body.password) {
      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash(body.password as string, salt);
    }

    // update user
    await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
      },
      select: {
        username: true,
        email: true,
      },
    });

    // return success message
    return NextResponse.json(
      { message: "تم تحديث البيانات بنجاح" },
      { status: 200 }
    );
  } catch (error) {
    // return error message
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @Route GET ~/api/users/profle/:id
 * @Summary Read an existing account
 * @Tags Users
 * @Accept json
 * @Produce json
 * @description this method read user's profile
 * @Route /api/users/profle/:id
 * @access public
 */

export async function GET(request: NextRequest, props: ProfileID) {
  try {
    const { id } = await props.params;

    const profile = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      include: { reviews: true, comments: true },
    });

    if (!profile) {
      return NextResponse.json(
        { message: "المستخدم غير موجود" },
        { status: 400 }
      );
    }

    const userPayload = verifyToken(request);

    if (
      (userPayload !== null && userPayload.id === profile.id) ||
      userPayload?.isAdmin === true
    ) {
      return NextResponse.json(
        {
          message: `أهلا ${profile.username}`,
          ...profile,
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { message: "غير مسموح بعرض البيانات" },
      { status: 403 }
    );
  } catch (error) {
    // return error message
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
