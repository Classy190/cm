import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/utils/prismaDB";
import { getAllPosts } from "@/utils/markdown";

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

// GET /api/admin/blog/list — Returns all MDX blogs merged with DB position data
export async function GET() {
  if (!(await checkAdminAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Read all MDX blogs sorted by date desc
    const mdxPosts = getAllPosts([
      "slug",
      "title",
      "date",
      "excerpt",
      "coverImage",
    ]);

    // Fetch all DB records (for position data)
    const dbBlogs = await prisma.blog.findMany({
      select: { id: true, slug: true, position: true },
    });
    const dbMap = new Map(dbBlogs.map((b) => [b.slug, b]));

    // Merge MDX data with DB positions
    // Default position = (total - index) * 10 based on date order
    const blogs = mdxPosts.map((post, index) => {
      const db = dbMap.get(post.slug);
      const defaultPos = (mdxPosts.length - index) * 10;
      return {
        id: post.slug,
        slug: post.slug,
        title: post.title || post.slug,
        excerpt: post.excerpt || "",
        date: post.date || "",
        coverImage: post.coverImage || null,
        position: db?.position && db.position !== 0 ? db.position : defaultPos,
        published: true,
        createdAt: post.date || new Date().toISOString(),
      };
    });

    // Sort by position descending (highest = top)
    blogs.sort((a, b) => b.position - a.position);

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching MDX blog list:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
