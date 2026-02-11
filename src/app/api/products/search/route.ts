import prisma from "@/app/utils/db";
import { Prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route ~/api/products/search?product=value&minPrice=value&maxPrice=value
 * @method GET
 * @description search for products
 * @access public
 */

export async function GET(request: NextRequest) {
  try {
    // get product name from search params
    const search = request.nextUrl.searchParams.get("product");

    // get min price of product from search params
    const minPrice = request.nextUrl.searchParams.get("minPrice");

    // get max price of product from search params
    const maxPrice = request.nextUrl.searchParams.get("maxPrice");

    // user have to apply search so that he could apply filters for the target product
    if (!search) {
      return NextResponse.json(
        { message: "Search term 'product' is required." },
        { status: 400 },
      );
    }

    // search for product name weather in arabic or english
    const whereClause: Prisma.ProductWhereInput = {
      OR: [
        {
          productNameAr: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          productNameEn: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    };

    // parse min price to float and apply filters to searched products
    if (minPrice) {
      const parsedMinPrice = parseFloat(minPrice);
      if (!isNaN(parsedMinPrice)) {
        whereClause.price = {
          gte: parsedMinPrice,
        };
      }
    }

    // parse max price to float and apply filters to searched products
    if (maxPrice) {
      const parsedMaxPrice = parseFloat(maxPrice);
      if (!isNaN(parsedMaxPrice)) {
        whereClause.price = {
          lte: parsedMaxPrice,
        };
      }
    }

    // search for products depending on whereClause variable
    const products = await prisma.product.findMany({
      where: whereClause,
    });

    // if there is no products
    if (products.length === 0) {
      return NextResponse.json({ messsage: "منتج غير متوفر" }, { status: 200 });
    }

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
