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

// POST /api/admin/blog/reorder - Reorder blogs
export async function POST(request: Request) {
  try {
    const isAuthorized = await checkAdminAuth();
    if (!isAuthorized) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { blogId, direction } = await request.json();

    if (!blogId || !["up", "down"].includes(direction)) {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    // Get the blog
    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
    });

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    // Find the blog to swap with
    let targetBlog;
    if (direction === "up") {
      targetBlog = await prisma.blog.findFirst({
        where: { position: { lt: blog.position } },
        orderBy: { position: "desc" },
      });
    } else {
      targetBlog = await prisma.blog.findFirst({
        where: { position: { gt: blog.position } },
        orderBy: { position: "asc" },
      });
    }

    if (!targetBlog) {
      return NextResponse.json(
        { error: "Cannot move in this direction" },
        { status: 400 }
      );
    }

    // Swap positions
    const temp = blog.position;
    await prisma.blog.update({
      where: { id: blog.id },
      data: { position: targetBlog.position },
    });

    await prisma.blog.update({
      where: { id: targetBlog.id },
      data: { position: temp },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Blog reorder error:", error);
    return NextResponse.json(
      { error: error?.message || "Fehler beim Neuordnen" },
      { status: 500 }
    );
  }
}
