import { RegisterDTO } from "@/app/utils/dtos";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/utils/db";
import { registerSchema } from "@/app/utils/validationSchemas";

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
export async function POST(request: NextRequest, response: NextResponse) {
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

    //if user validation data success and email is unique then create a new user in database
    const createNewUser = await prisma.user.create({
      data: {
        username: body.userName,
        email: body.email,
        //ToDo: add hashed password
        password: body.password,
        userImage: body.image,
        isAdmin: body.isAdmin,
      },
      select: {
        username: true,
        email: true,
        userImage: true,
        isAdmin: true,
      },
    });

    //ToDo: add user JWT payload
    //ToDo: add user cookies

    //message with success
    return NextResponse.json(
      { message: "تم تسجيل البيانات بنجاح" },
      { status: 201 }
    );
  } catch (error) {
    //if server is dropped then server will response from catch handler
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
