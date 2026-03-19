import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/utils/prismaDB";

async function checkAdminAuth() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("admin_session");
    console.log("Cookie check:", {
      hasCookie: !!sessionCookie,
      cookieValue: sessionCookie?.value?.substring(0, 20),
    });
    
    if (!sessionCookie?.value) {
      console.log("No admin_session cookie found");
      return false;
    }
    
    const decoded = JSON.parse(
      Buffer.from(sessionCookie.value, "base64").toString()
    );
    console.log("Decoded session:", decoded);
    return decoded.loggedIn === true;
  } catch (error) {
    console.error("Auth decode error:", error);
    return false;
  }
}

// POST /api/admin/blog/reorder - Reorder blogs
export async function POST(request: Request) {
  try {
    // Log incoming request
    const headers = request.headers;
    console.log("Reorder request headers:", {
      cookieHeader: headers.get("cookie"),
    });

    const isAuthorized = await checkAdminAuth();
    console.log("Auth check result:", isAuthorized);

    if (!isAuthorized) {
      console.log("Auth failed - no valid admin session");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { blogId, direction } = await request.json();
    console.log("Reorder request:", { blogId, direction });

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
      // If blog not in DB, we need to create a record with position
      const newPosition = direction === "up" ? 10000 : 1;
      await prisma.blog.create({
        data: {
          id: blogId,
          title: blogId,
          slug: blogId,
          content: "",
          position: newPosition,
          authorId: "system",
        },
      });
      return NextResponse.json({ success: true });
    }

    // Get all blogs to find swap target
    const allBlogs = await prisma.blog.findMany({
      orderBy: { position: "desc" },
    });

    const currentIndex = allBlogs.findIndex((b) => b.id === blogId);
    if (currentIndex === -1) {
      return NextResponse.json(
        { error: "Blog not found in list" },
        { status: 404 }
      );
    }

    if (direction === "up" && currentIndex === 0) {
      return NextResponse.json(
        { error: "Already at top" },
        { status: 400 }
      );
    }
    if (direction === "down" && currentIndex === allBlogs.length - 1) {
      return NextResponse.json(
        { error: "Already at bottom" },
        { status: 400 }
      );
    }

    const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    const targetBlog = allBlogs[targetIndex];

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
