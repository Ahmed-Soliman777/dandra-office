import prisma from "@/app/utils/db";
import { AddNewProduct } from "@/app/utils/dtos";
import { addNewProduct } from "@/app/utils/validationSchemas";
import { verifyToken } from "@/app/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route ~/api/products
 * @method POST
 * @description create a new product
 * @access private only admin
 */

export async function POST(request: NextRequest) {
  try {
    const userPayload = verifyToken(request);
    if (userPayload === null || userPayload.isAdmin === false) {
      return NextResponse.json(
        { message: "غير مصرح بأضافة منتج" },
        { status: 403 },
      );
    }
    const body = (await request.json()) as AddNewProduct;
    const validation = addNewProduct.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 },
      );
    }
    const addNewProductToDB = await prisma.product.create({
      data: {
        productNameAr: body.productNameAr,
        productNameEn: body.productNameEn,
        price: body.price,
        quantity: body.quantity,
        categoryId: body.categoryId,
        descriptionAr: body.descriptionAr,
        descriptionEn: body.descriptionEn,
        images: body.images,
        adminId: userPayload.id,
      },
      select: {
        adminId: true,
        productNameAr: true,
        productNameEn: true,
        price: true,
        quantity: true,
        categoryId: true,
        descriptionAr: true,
        descriptionEn: true,
        images: true,
      },
    });

    return NextResponse.json(
      { message: "تم اضافة منتج جديد بنجاح", product: addNewProductToDB },
      { status: 201 },
    );
  } catch (error) {
    // return error message
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @route ~/api/products
 * @method GET
 * @description read all products
 * @access public
 */

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: {
          select: {
            id: true,
            categoryNameAr: true,
            categoryNameEn: true,
          },
        },
        comments: {
          select: {
            id: true,
            comment: true,
            user: {
              select: {
                id: true,
                username: true,
              },
            },
          },
        },
        reviews: {
          select: {
            id: true,
            reviewInNumbers: true,
            user: {
              select: {
                id: true,
                username: true,
              },
            },
          },
        },
      },
    });
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    // return error message
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
