import { RegisterDTO } from "@/utils/dtos";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { registerSchema } from "@/utils/validationSchemas";
import { JWTPayload } from "@/utils/types";
import { setCookie } from "@/utils/generateToken";
import bcrypt from "bcryptjs";

/**
 * @Route POST ~/api/users/register
 * @Summary Register a new user
 * @Tags Users
 * @Accept json
 * @Produce json
 * @description this method creates a new user with new email
 * @Route /api/users/register
 * @access public
 */

// create a POST method to create a new user
export async function POST(request: NextRequest) {
  //inside the POST request method there are 2 handlers try - catch
  //if server is dropped then server will response from catch handler
  //else will try to create data with some checks for user requirement like checking email, user data validation

  try {
    //get data from body - client side
    const body = (await request.json()) as RegisterDTO;

    //pass data from body to zod validation schema
    const validation = registerSchema.safeParse(body);

    //if data's validation is invalid then server will send message to client with error [like invalid email]
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    //check is email is already registered before or not
    const checkEmail = await prisma.user.findUnique({
      where: { email: body.email },
    });

    //if email is registered before server will send message with [البريد الالكتروني مسجل من قبل]
    if (checkEmail) {
      return NextResponse.json(
        { message: "البريد الإلكتروني مُسجل من قبل" },
        { status: 400 }
      );
    }

    // hash password using bcryptjs library

    // 1- import salt from bcryptjs library
    const salt = await bcrypt.genSalt(10);

    // 2- add salt to password & hash password, then add it to createNewUser password property
    const hashedPassword = await bcrypt.hash(body.password, salt);

    //if user validation data success and email is unique then create a new user in database
    const createNewUser = await prisma.user.create({
      data: {
        username: body.userName,
        email: body.email,
        password: hashedPassword,
        userImage: body.image,
        isAdmin: body.isAdmin,
      },
      select: {
        id: true,
        username: true,
        email: true,
        userImage: true,
        reviews: true,
        isAdmin: true,
      },
    });

    //add user JWT payload
    const payload: JWTPayload = {
      id: createNewUser.id,
      username: createNewUser.email,
      isAdmin: createNewUser.isAdmin,
    };

    //add user cookies
    const cookie = setCookie(payload);

    //message with success
    return NextResponse.json(
      { message: "تم تسجيل البيانات بنجاح" },
      { status: 201, headers: { "Set-Cookie": cookie } }
    );
  } catch (error) {
    //if server is dropped then server will response from catch handler
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
