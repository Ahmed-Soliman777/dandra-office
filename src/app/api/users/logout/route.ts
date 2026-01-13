import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @route ~/api/users/logout
 * @access public
 * @desc logout user
 */

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    return NextResponse.json(
      { message: "تم تسجبل الخروج بنجاح" },
      { status: 200 }
    );
  } catch (error) {
    // return error message
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
