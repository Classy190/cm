import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAllPosts } from "@/utils/markdown";

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

    // Read all MDX blog files using existing utility
    const allPosts = getAllPosts(["title", "date", "slug", "coverImage"]);

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
