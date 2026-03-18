import { cookies } from "next/headers";

export async function isAdminLoggedIn(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("admin_session");

    if (!sessionCookie?.value) {
      return false;
    }

    // Decode and validate the cookie
    const decoded = JSON.parse(
      Buffer.from(sessionCookie.value, "base64").toString()
    );

    return decoded.loggedIn === true;
  } catch (error) {
    return false;
  }
}
