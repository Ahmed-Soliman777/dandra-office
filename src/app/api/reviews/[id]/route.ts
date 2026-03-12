import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";
import { UpdateReviewDTO } from "@/utils/dtos";
import { updateReview } from "@/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import { ReviewID } from "@/utils/types";

/**
 * @route ~/api/reviews/:id
 * @method PUT
 * @description update review
 * @access private
 */

export async function PUT(request: NextRequest, props: ReviewID) {
  try {
    const { id } = await props.params;
    const review = await prisma.review.findUnique({
      where: { id: parseInt(id) },
      select: { user: { select: { id: true } } },
    });

    if (!review) {
      return NextResponse.json(
        { message: "التقييم غير موجود" },
        { status: 400 },
      );
    }

    const userPayload = verifyToken(request);
    if (userPayload === null || userPayload?.id !== review?.user?.id) {
      return NextResponse.json({ message: "غير مصرح" }, { status: 403 });
    }

    const body = (await request.json()) as UpdateReviewDTO;
    const validation = updateReview.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    await prisma.review.update({
      where: { id: parseInt(id) },
      data: { reviewInNumbers: body.reviewInNumbers },
    });

    return NextResponse.json({ message: "تم تعديل التقييم" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @route ~/api/reviews/:id
 * @method DELETE
 * @description delete review
 * @access private
 */

export async function DELETE(request: NextRequest, props: ReviewID) {
  try {
    const { id } = await props.params;
    const review = await prisma.review.findUnique({
      where: { id: parseInt(id) },
      select: { user: { select: { id: true } } },
    });

    if (!review) {
      return NextResponse.json(
        { message: "التقييم غير موجود" },
        { status: 400 },
      );
    }

    const userPayload = verifyToken(request);
    if (userPayload === null || userPayload?.id !== review?.user?.id) {
      return NextResponse.json({ message: "غير مصرح" }, { status: 403 });
    }

    await prisma.review.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: "تم حذف التقييم" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
