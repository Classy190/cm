import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("admin_session");

    if (!sessionCookie?.value) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    const decoded = JSON.parse(
      Buffer.from(sessionCookie.value, "base64").toString()
    );

    if (decoded.loggedIn === true) {
      return NextResponse.json(
        { authenticated: true, email: decoded.email },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }
}
