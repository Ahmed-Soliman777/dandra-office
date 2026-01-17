import prisma from "@/app/utils/db";
import { AddCommentDTO } from "@/app/utils/dtos";
import { addComment } from "@/app/utils/validationSchemas";
import { verifyToken } from "@/app/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route ~/api/comments
 * @method POST
 * @description add new comment
 * @access private only logged in users
 */

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const userPayload = verifyToken(request);
    if (userPayload === null) {
      return NextResponse.json({ message: "غير مصرح" }, { status: 403 });
    }

    const body = (await request.json()) as AddCommentDTO;
    const validation = addComment.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    const product = await prisma.product.findUnique({
      where: { id: body.productId },
    });
    if (!product) {
      return NextResponse.json({ message: "منتج غير متوفر" }, { status: 400 });
    }

    await prisma.comment.create({
      data: {
        comment: body.comment,
        productId: body.productId,
        userId: userPayload.id,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
          },
        },
        product: {
          select: {
            id: true,
            productNameAr: true,
            productNameEn: true,
          },
        },
      },
    });

    return NextResponse.json({ message: "تم اضافة تعليق" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @route ~/api/comments
 * @method GET
 * @description read comments
 * @access public
 */

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const comments = await prisma.comment.findMany({
      include: {
        user: {
          select: {
            id: true,
            username: true,
          },
        },
        product: {
          select: {
            id: true,
            productNameAr: true,
            productNameEn: true,
          },
        },
      },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
