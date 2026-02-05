import prisma from "@/app/utils/db";
import { UpdateCategoryDTO } from "@/app/utils/dtos";
import { updateCategory } from "@/app/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/app/utils/verifyToken";
import { CategoryID } from "@/app/utils/types";

/**
 * @route ~/api/categories/:id
 * @method GET
 * @description read category by id
 * @access public
 */

export async function GET(request: NextRequest, props: CategoryID) {
  try {
    const { id } = await props.params;
    const category = await prisma.category.findUnique({
      where: { id: parseInt(id) },
      select: {
        categoryNameAr: true,
        categoryNameEn: true,
        categoryThumbnail: true,
        products: {
          include: {
            category: true,
            comments: true,
            reviews: true,
          },
        },
      },
    });
    if (!category) {
      return NextResponse.json({ message: "فئة غير موجودة" }, { status: 400 });
    }
    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @route ~/api/categories/:id
 * @method PUT
 * @description update category
 * @access private only admin
 */

export async function PUT(request: NextRequest, props: CategoryID) {
  try {
    const { id } = await props.params;
    const category = await prisma.category.findUnique({
      where: { id: parseInt(id) },
    });
    if (!category) {
      return NextResponse.json({ message: "فئة غير موجودة" }, { status: 400 });
    }
    const userPayload = verifyToken(request);
    if (userPayload === null || userPayload.isAdmin === false) {
      return NextResponse.json({ message: "غير مصرح" }, { status: 403 });
    }
    const body = (await request.json()) as UpdateCategoryDTO;
    const validation = updateCategory.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 },
      );
    }
    await prisma.category.update({
      where: { id: parseInt(id) },
      data: {
        categoryNameAr: body.categoryNameAr,
        categoryNameEn: body.categoryNameEn,
        categoryThumbnail: body.categoryThumbnail,
      },
    });
    return NextResponse.json(
      { message: "تم تعديل الفئة بنجاح" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @route ~/api/categories/:id
 * @method DELETE
 * @description delete category
 * @access private only admin
 */

export async function DELETE(request: NextRequest, props: CategoryID) {
  try {
    const { id } = await props.params;
    const category = await prisma.category.findUnique({
      where: { id: parseInt(id) },
      include: { products: true },
    });
    if (!category) {
      return NextResponse.json({ message: "فئة غير موجودة" }, { status: 400 });
    }
    const userPayload = verifyToken(request);
    if (userPayload === null || userPayload.isAdmin === false) {
      return NextResponse.json({ message: "غير مصرح" }, { status: 403 });
    }
    await prisma.category.delete({
      where: { id: parseInt(id) },
    });

    // delete related products
    const productIds: number[] = category?.products?.map(
      (product) => product.id,
    );
    await prisma.product.deleteMany({ where: { id: { in: productIds } } });

    return NextResponse.json(
      { message: "تم حذف الفئة بنجاح" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
