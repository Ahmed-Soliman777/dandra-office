import prisma from "@/app/utils/db";
import { Prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route ~/api/products/filter?minPrice=value&maxPrice=value&reviews=value
 * @method GET  
 * @description products filters
 * @access public
 */

export async function GET(request: NextRequest) {
  try {
    const minPriceFilter = request.nextUrl.searchParams.get("minPrice");
    const maxPriceFilter = request.nextUrl.searchParams.get("maxPrice");

    // const reviewsFilter = request.nextUrl.searchParams.get("reviews");

    const where: Prisma.ProductWhereInput = {};
    const filterArr: Prisma.ProductWhereInput[] = [];

    if (minPriceFilter) {
      filterArr.push({ price: { gte: Number(minPriceFilter) } });
    }

    if (maxPriceFilter) {
      filterArr.push({ price: { lte: Number(maxPriceFilter) } });
    }

    // if (reviewsFilter) {
    //   filterArr.push({ reviews: Number(reviewsFilter) });
    // }

    if (filterArr.length) {
      where.AND = filterArr;
    }

    const products = await prisma.product.findMany({ where });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
