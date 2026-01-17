import prisma from "@/app/utils/db";
import { UpdateCommentDTO } from "@/app/utils/dtos";
import { CommentID } from "@/app/utils/types";
import { updateComment } from "@/app/utils/validationSchemas";
import { verifyToken } from "@/app/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route ~/api/comments/:id
 * @method PUT
 * @description update comment
 * @access private
 */

export async function PUT(request: NextRequest, props: CommentID) {
  try {
    const { id } = await props.params;
    const comment = await prisma.comment.findUnique({
      where: { id: parseInt(id) },
      select: { userId: true },
    });
    if (!comment) {
      return NextResponse.json({ message: "تعليق غير موجود" }, { status: 400 });
    }

    const userPayload = verifyToken(request);
    if (userPayload === null || userPayload.id !== comment.userId) {
      return NextResponse.json({ message: "غير مصرح" }, { status: 403 });
    }

    const body = (await request.json()) as UpdateCommentDTO;
    const validation = updateComment.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    await prisma.comment.update({
      where: { id: parseInt(id) },
      data: {
        comment: body.comment,
      },
    });

    return NextResponse.json({ message: "تم تعديل التعليق" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @route ~/api/comments/:id
 * @method DELETE
 * @description delete comment
 * @access private
 */

export async function DELETE(request: NextRequest, props: CommentID) {
  try {
    const { id } = await props.params;
    const comment = await prisma.comment.findUnique({
      where: { id: parseInt(id) },
      select: { userId: true },
    });
    if (!comment) {
      return NextResponse.json({ message: "تعليق غير موجود" }, { status: 400 });
    }

    const userPayload = verifyToken(request);
    if (
      (userPayload !== null && userPayload.id === comment.userId) ||
      userPayload?.isAdmin === true
    ) {
      await prisma.comment.delete({
        where: { id: parseInt(id) },
      });

      return NextResponse.json({ message: "تم حذف التعليق" }, { status: 200 });
    }

    return NextResponse.json({ message: "غير مصرح" }, { status: 403 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
