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

// POST /api/admin/blog/reorder - Reorder blogs by slug
export async function POST(request: Request) {
  try {
    if (!(await checkAdminAuth())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { blogId, direction } = await request.json();

    if (!blogId || !["up", "down"].includes(direction)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Get admin user for upsert
    const adminUser = await prisma.user.findFirst({ where: { isAdmin: true } });
    if (!adminUser) {
      return NextResponse.json({ error: "No admin user found" }, { status: 500 });
    }

    // Build the full ordered list from MDX + DB positions (same as list API)
    const mdxPosts = getAllPosts(["slug", "date"]);
    const dbBlogs = await prisma.blog.findMany({
      select: { slug: true, position: true },
    });
    const dbMap = new Map(dbBlogs.map((b) => [b.slug, b.position]));

    const orderedList = mdxPosts
      .map((post, index) => ({
        slug: post.slug,
        position: dbMap.has(post.slug) && dbMap.get(post.slug) !== 0
          ? (dbMap.get(post.slug) as number)
          : (mdxPosts.length - index) * 10,
      }))
      .sort((a, b) => b.position - a.position);

    const currentIndex = orderedList.findIndex((b) => b.slug === blogId);
    if (currentIndex === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    if (direction === "up" && currentIndex === 0) {
      return NextResponse.json({ error: "Already at top" }, { status: 400 });
    }
    if (direction === "down" && currentIndex === orderedList.length - 1) {
      return NextResponse.json({ error: "Already at bottom" }, { status: 400 });
    }

    const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    const current = orderedList[currentIndex];
    const target = orderedList[targetIndex];

    // Swap positions — upsert both into DB
    await prisma.blog.upsert({
      where: { slug: current.slug },
      update: { position: target.position },
      create: {
        title: current.slug,
        slug: current.slug,
        content: "",
        position: target.position,
        authorId: adminUser.id,
      },
    });

    await prisma.blog.upsert({
      where: { slug: target.slug },
      update: { position: current.position },
      create: {
        title: target.slug,
        slug: target.slug,
        content: "",
        position: current.position,
        authorId: adminUser.id,
      },
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
