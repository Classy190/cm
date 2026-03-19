import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAllPosts } from "@/utils/markdown";
import { prisma } from "@/utils/prismaDB";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("admin_session");

    if (!sessionCookie?.value) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = JSON.parse(
      Buffer.from(sessionCookie.value, "base64").toString()
    );

    if (decoded.loggedIn !== true) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Try to get from database first
    let allPosts: any[] = [];
    try {
      const dbBlogs = await prisma.blog.findMany({
        select: {
          title: true,
          date: true,
          slug: true,
          coverImage: true,
        },
        orderBy: { position: "desc" },
      });
      if (dbBlogs && dbBlogs.length > 0) {
        allPosts = dbBlogs;
      }
    } catch (error) {
      // If DB query fails, fall back to MDX
      console.log("DB query failed, using MDX fallback");
    }

    // Fallback to MDX files if database is empty
    if (allPosts.length === 0) {
      allPosts = getAllPosts(["title", "date", "slug", "coverImage"]);
    }

    const recentBlogs = allPosts.slice(0, 6).map((post: any) => ({
      title: post.title || post.slug,
      slug: post.slug,
      date: post.date || null,
      coverImage: post.coverImage || null,
    }));

    return NextResponse.json({
      blogs: {
        total: allPosts.length,
      },
      recentBlogs,
      lastUpdated: new Date(),
    });
  } catch (error) {
    console.error("Stats error:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
