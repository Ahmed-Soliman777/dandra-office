import prisma from "@/utils/db";
import { UpdateProductDTO } from "@/utils/dtos";
import { ProductID } from "@/utils/types";
import { updateProduct } from "@/utils/validationSchemas";
import { verifyToken } from "@/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route ~/api/products/:id
 * @method GET
 * @access public
 * @description read product
 */

export async function GET(request: NextRequest, props: ProductID) {
  try {
    const { id } = await props.params;
    const product = await prisma.product.findUnique({
      where: { id: id },
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
    if (!product) {
      return NextResponse.json({ message: "منتج غير موجود" }, { status: 400 });
    }
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @route ~/api/products/:id
 * @method Delete
 * @access private only admin
 * @description delete product
 */

export async function DELETE(request: NextRequest, props: ProductID) {
  try {
    const { id } = await props.params;
    const product = await prisma.product.findUnique({
      where: { id: id },
    });
    if (!product) {
      return NextResponse.json({ message: "منتج غير موجود" }, { status: 400 });
    }
    const userPayload = verifyToken(request);
    if (userPayload === null || userPayload.isAdmin === false) {
      return NextResponse.json(
        { message: "غير مصرح بحذف المنتج" },
        { status: 403 },
      );
    }
    await prisma.product.delete({ where: { id: id } });
    return NextResponse.json(
      { message: "تم حذف المنتج بنجاح" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @route ~/api/products/:id
 * @method Put
 * @access private only admin
 * @description update product
 */

export async function PUT(request: NextRequest, props: ProductID) {
  try {
    const { id } = await props.params;
    const product = await prisma.product.findUnique({
      where: { id: id },
    });
    if (!product) {
      return NextResponse.json({ message: "منتج غير موجود" }, { status: 400 });
    }
    const userPayload = verifyToken(request);
    if (userPayload === null || userPayload.isAdmin === false) {
      return NextResponse.json(
        { message: "غير مصرح بتعديل المنتج" },
        { status: 403 },
      );
    }
    const body = (await request.json()) as UpdateProductDTO;
    const validation = updateProduct.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 },
      );
    }
    const updateProducts = await prisma.product.update({
      where: { id: id },
      data: {
        productNameAr: body.productNameAr,
        productNameEn: body.productNameEn,
        price: body.price,
        quantity: body.quantity,
        categoryId: body.categoryId,
        descriptionAr: body.descriptionAr,
        descriptionEn: body.descriptionEn,
        images: body.images,
      },
      select: {
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
      { message: "تم تعديل المنتج بنجاح", product: updateProducts },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
