import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/auth";
import { prisma } from "@/utils/prismaDB";
import { getAllPosts } from "@/utils/markdown";

export async function GET() {
  try {
    // Get blogs from MDX files
    const posts = getAllPosts([
      "slug",
      "title",
      "excerpt",
      "date",
      "author",
      "coverImage",
      "content",
    ]);

    // Format posts to match expected structure
    const blogs = posts.map((post: any) => ({
      id: post.slug,
      title: post.title || "Untitled",
      excerpt: post.excerpt || "",
      slug: post.slug,
      coverImage: post.coverImage || null,
      createdAt: post.date || new Date().toISOString(),
      updatedAt: post.date || new Date().toISOString(),
      published: true,
      author: {
        name: post.author || "Admin",
        image: null,
      },
    }));

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, excerpt, content, coverImage, published } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    const blog = await prisma.blog.create({
      data: {
        title,
        excerpt,
        content,
        coverImage,
        slug,
        published,
        authorId: user.id,
      },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
