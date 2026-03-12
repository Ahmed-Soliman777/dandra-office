import { NextResponse } from "next/server";
import prisma from "@/utils/db";

export async function GET() {
  try {
    const users = await prisma.user.count({ where: { isAdmin: false } });
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
