import prisma from "@/app/utils/db";
import { verifyToken } from "@/app/utils/verifyToken";
import { AddCategoryDTO } from "@/app/utils/dtos";
import { addCategory } from "@/app/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route ~/api/categories
 * @method POST
 * @description create a new category
 * @access private only admin
 */

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body = (await request.json()) as AddCategoryDTO;
    const validation = addCategory.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 }
      );
    }
    const userPayload = verifyToken(request);
    if (userPayload === null || userPayload.isAdmin === false) {
      return NextResponse.json({ message: "غير مصرح" }, { status: 403 });
    }
    const newCategory = await prisma.category.create({
      data: {
        categoryNameAr: body.categoryNameAr,
        categoryNameEn: body.categoryNameEn,
        categoryThumbnail: body.categoryThumbnail,
      },
      select: {
        categoryNameAr: true,
        categoryNameEn: true,
      },
    });
    return NextResponse.json(
      {
        message: "تم أضافة فئة جديدة",
        category: newCategory,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @route ~/api/categories
 * @method GET
 * @description read all categories
 * @access public
 */

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        categoryNameAr: true,
        categoryNameEn: true,
        products: {
          select: {
            productNameAr: true,
            productNameEn: true,
            price: true,
          },
        },
      },
    });
    return NextResponse.json({ categories }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
