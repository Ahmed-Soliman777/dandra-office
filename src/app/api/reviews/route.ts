import prisma from "@/app/utils/db";
import { AddReviewDTO } from "@/app/utils/dtos";
import { addReview } from "@/app/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/app/utils/verifyToken";

/**
 * @route ~/api/reviews
 * @method POST
 * @description add new review
 * @access private only users can add their reviews
 */

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    // 1- get review data
    const body = (await request.json()) as AddReviewDTO;
    // 2- validate review data
    const validation = addReview.safeParse(body);
    // 3- check review data
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 }
      );
    }
    // 4- get unique product
    const product = await prisma.product.findUnique({
      where: { id: body.productId },
    });
    // 5- check if product exists
    if (!product) {
      return NextResponse.json({ message: "منتج غير متوفر" }, { status: 400 });
    }
    // 6- check user is logged in
    const userPayload = verifyToken(request);
    if (userPayload === null) {
      return NextResponse.json(
        { message: "برجاء سجّل دخولك" },
        { status: 403 }
      );
    }
    if (userPayload === null) {
      return NextResponse.json(
        { message: "برجاء سجّل دخولك" },
        { status: 403 }
      );
    }
    // 7- get user's data
    const user = await prisma.user.findUnique({
      where: { id: userPayload.id },
      include: { reviews: true },
    });
    // 8- check if user has already reviwed the product
    const hasReviewedProduct = user?.reviews.some(
      (review) => review.productId === product.id
    );
    if (hasReviewedProduct) {
      return NextResponse.json(
        { message: "لقد قمت بتقييم هذا المنتج بالفعل" },
        { status: 400 }
      );
    }
    // 9- create new review
    await prisma.review.create({
      data: {
        reviewInNumbers: body.reviewInNumbers,
        productId: body.productId,
        userId: userPayload.id,
      },
    });
    // 10- return success message
    return NextResponse.json(
      { message: "تم اضافة تقييمك بنجاح" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @route ~/api/reviews
 * @method GET
 * @description read all reviews
 * @access public
 */

export async function GET(requset: NextRequest, response: NextResponse) {
  try {
    const reviews = await prisma.review.findMany({
      select: {
        id: true,
        reviewInNumbers: true,
        product: {
          select: {
            id: true,
            productNameAr: true,
            productNameEn: true,
          },
        },
        user: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });
    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
