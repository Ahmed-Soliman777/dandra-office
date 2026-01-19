import prisma from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route ~/api/products/search?product=value
 * @method GET
 * @description search for products
 * @access public
 */

export async function GET(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams.get("product");

    let products;

    if (search) {
      products = await prisma.product.findMany({
        where: {
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
        },
      });

      if (products.length === 0) {
        return NextResponse.json(
          { messsage: "منتج غير متوفر" },
          { status: 404 },
        );
      }

      return NextResponse.json(products, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
