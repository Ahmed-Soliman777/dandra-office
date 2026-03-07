/**
 * @Route PUT ~/api/users/reset-password
 * @Summary Reset user password
 * @Tags Users
 * @Accept json
 * @Produce json
 * @description this method resets the user's password
 * @Route /api/users/reset-password
 * @Method PUT
 * @access private
 */

import prisma from "@/app/utils/db";
import { ResetPasswordDTO } from "@/app/utils/dtos";
import { resetPasswordSchema } from "@/app/utils/validationSchemas";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    // get data from body
    const body = (await request.json()) as ResetPasswordDTO;

    // search for user
    const user = await prisma.user.findUnique({ where: { email: body.email } });

    // if user does not exist
    if (!user) {
      return NextResponse.json(
        { message: "المستخدم غير مٌسجل" },
        { status: 404 },
      );
    }

    // validate data form schema
    const validation = resetPasswordSchema.safeParse(body);

    // check validation
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        {
          status: 400,
        },
      );
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password as string, salt);

    // update password
    await prisma.user.update({
      where: { email: body.email },
      data: {
        password: body.password,
      },
    });

    // return success message
    return NextResponse.json(
      { message: "تم تحديث كلمة المرور" },
      { status: 200 },
    );
  } catch (error) {
    // return error message
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
