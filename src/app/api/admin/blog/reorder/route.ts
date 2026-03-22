import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/utils/prismaDB";

async function checkAdminAuth() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("admin_session");
  if (!sessionCookie?.value) return false;
  try {
    const decoded = JSON.parse(
      Buffer.from(sessionCookie.value, "base64").toString()
    );
    return decoded.loggedIn === true;
  } catch {
    return false;
  }
}

// POST /api/admin/blog/reorder
// Body: { orderedSlugs: string[] } — full list in desired order (index 0 = top)
export async function POST(request: Request) {
  try {
    if (!(await checkAdminAuth())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { orderedSlugs } = await request.json();

    if (!Array.isArray(orderedSlugs) || orderedSlugs.length === 0) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const adminUser = await prisma.user.findFirst({
      where: { isAdmin: true },
      select: { id: true },
    });
    if (!adminUser) {
      return NextResponse.json({ error: "No admin user found" }, { status: 500 });
    }

    const total = orderedSlugs.length;

    // Use transaction for atomicity; run sequentially to avoid pool exhaustion
    await prisma.$transaction(
      orderedSlugs
        .filter((slug: string) => typeof slug === "string" && slug.length > 0)
        .map((slug: string, index: number) =>
          prisma.blog.upsert({
            where: { slug },
            update: { position: (total - index) * 10 },
            create: {
              title: slug,
              slug,
              content: "",
              position: (total - index) * 10,
              authorId: adminUser.id,
            },
          })
        )
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Blog reorder error:", error);
    return NextResponse.json(
      { error: error?.message || "Fehler beim Neuordnen" },
      { status: 500 }
    );
  }
}
