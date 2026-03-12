import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { LoginDTO } from "@/utils/dtos";
import { loginSchema } from "@/utils/validationSchemas";
import { setCookie } from "@/utils/generateToken";
import { JWTPayload } from "@/utils/types";
import bcrypt from "bcryptjs";

/**
 * @Route POST ~/api/users/login
 * @Summary Login registered users
 * @Tags Users
 * @Accept json
 * @Produce json
 * @description this method allows regitered users to login
 * @Route /api/users/login
 * @access public
 */

// create a POST method to allow registered users to login
export async function POST(request: NextRequest) {
  try {
    // get user's data from body
    const body = (await request.json()) as LoginDTO;

    const validation = loginSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    // search for registered users in database
    const registeredUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    // check if user registered in database or not
    if (!registeredUser) {
      return NextResponse.json(
        { message: "البيانات غير صحيحة" },
        { status: 400 },
      );
    }

    // compare entered password with hashed password in database
    const password = await bcrypt.compare(
      body.password,
      registeredUser.password,
    );

    // check entered password it is valid or not
    if (!password) {
      return NextResponse.json(
        { message: "البيانات غير صحيحة" },
        { status: 400 },
      );
    }

    // add user info to jwt payload
    const payload: JWTPayload = {
      id: registeredUser.id,
      username: registeredUser.username,
      isAdmin: registeredUser.isAdmin,
    };

    // set cookie
    const cookie = setCookie(payload);

    // return response with success login
    return NextResponse.json(
      { message: "تم تسجيل الدخول بنجاح" },
      { status: 200, headers: { "Set-Cookie": cookie } },
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
