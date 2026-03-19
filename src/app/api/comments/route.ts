import { prisma } from "@/utils/prismaDB";
import { NextRequest, NextResponse } from "next/server";

// GET comments for a blog post
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const blogSlug = searchParams.get("blogSlug");

    if (!blogSlug) {
      return NextResponse.json(
        { error: "blogSlug is required" },
        { status: 400 }
      );
    }

    // Get approved comments only
    const comments = await prisma.comment.findMany({
      where: {
        blog: { slug: blogSlug },
        approved: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

// POST new comment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, authorName, authorEmail, blogSlug } = body;

    // Validation
    if (!content || !authorName || !authorEmail || !blogSlug) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Find blog by slug
    const blog = await prisma.blog.findUnique({
      where: { slug: blogSlug },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Create comment (not approved by default)
    const comment = await prisma.comment.create({
      data: {
        content,
        authorName,
        authorEmail,
        blogId: blog.id,
        approved: false,
      },
    });

    return NextResponse.json(
      { message: "Comment submitted. Awaiting moderation.", comment },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}
