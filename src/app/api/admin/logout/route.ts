import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const response = NextResponse.json(
    { success: true, message: "Logged out successfully" },
    { status: 200 }
  );

  // Clear the admin session cookie
  response.cookies.set({
    name: "admin_session",
    value: "",
    httpOnly: true,
    expires: new Date(0),
  });

  return response;
}
