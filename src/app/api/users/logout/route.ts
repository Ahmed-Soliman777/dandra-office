import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/**
 * @method GET
 * @route ~/api/users/logout
 * @access public
 * @desc logout user
 */

export async function GET() {
  try {
    const cookieStore = await cookies();
    if (!cookieStore.get("token")) {
      return NextResponse.json(
        { message: "انت غير مسجل الدخول" },
        { status: 400 },
      );
    }
    cookieStore.delete("token");
    return NextResponse.json(
      { message: "تم تسجبل الخروج بنجاح" },
      { status: 200 },
    );
  } catch (error) {
    // return error message
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
