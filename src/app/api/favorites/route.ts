import prisma from "@/app/utils/db";
import { FavoriteDTO } from "@/app/utils/dtos";
import { userFavorite } from "@/app/utils/validationSchemas";
import { verifyToken } from "@/app/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route ~/api/favorites
 * @method POST
 * @description add user favorites
 * @access private
 */

export async function POST(request: NextRequest) {
  try {
    // 1- validate token
    const userPayload = verifyToken(request);
    if (userPayload === null) {
      return NextResponse.json(
        { message: "سجل دخولك لأضافة المنتج الى المفضلة" },
        { status: 403 },
      );
    }

    // 2- validate favorites
    const body = (await request.json()) as FavoriteDTO;
    const validation = userFavorite.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    // validate product
    const product = await prisma.product.findUnique({
      where: { id: Number(body.productId) },
    });

    if (!product) {
      return NextResponse.json({ message: "منتج غير متوفر" }, { status: 400 });
    }

    // 3- add favorites to db
    await prisma.favorite.create({
      data: {
        userId: userPayload.id,
        productId: body.productId,
      },
    });

    return NextResponse.json(
      { message: "تم اضافة المنتج الى المفضلة" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @route ~/api/favorites
 * @method DELETE
 * @description add user favorites
 * @access private
 */

export async function DELETE(request: NextRequest) {
  try {
    // 1- validate token
    const userPayload = verifyToken(request);
    if (userPayload === null) {
      return NextResponse.json(
        { message: "سجل دخولك لحذف المنتج من المفضلة" },
        { status: 403 },
      );
    }

    // 2- validate favorites
    const body = (await request.json()) as FavoriteDTO;
    const validation = userFavorite.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    // validate product
    const product = await prisma.product.findUnique({
      where: { id: Number(body.productId) },
    });

    if (!product) {
      return NextResponse.json({ message: "منتج غير متوفر" }, { status: 400 });
    }

    // 3- delete favorites from db
    await prisma.favorite.delete({
      where: {
        userId_productId: {
          userId: userPayload.id,
          productId: body.productId,
        },
      },
    });

    return NextResponse.json(
      { message: "تم حذف المنتج من المفضلة" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @route ~/api/favorites
 * @method GET
 * @description read user favorites
 * @access private
 */

export async function GET(request: NextRequest) {
  try {
    // 1- validate token
    const userPayload = verifyToken(request);
    if (userPayload === null) {
      return NextResponse.json(
        { message: "سجل دخولك لعرض المفضلة" },
        { status: 403 },
      );
    }

    const userFav = await prisma.favorite.findMany({
      where: { userId: userPayload.id },
      include: { product: true },
    });

    if (!userFav) {
      return NextResponse.json({ message: "غير مصرح" }, { status: 403 });
    }

    // 2- get user favorite
    return NextResponse.json(userFav, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
