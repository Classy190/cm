import { NextRequest, NextResponse } from "next/server";
import { getPostBySlug } from "@/utils/markdown";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Try to load from MDX files first
    const post = getPostBySlug(id, [
      "title",
      "excerpt",
      "content",
      "date",
      "author",
      "coverImage",
      "slug",
    ]);

    if (post && post.slug) {
      return NextResponse.json({
        id: post.slug,
        title: post.title || "Untitled",
        excerpt: post.excerpt || "",
        content: post.content || "",
        coverImage: post.coverImage || null,
        createdAt: post.date || new Date().toISOString(),
        updatedAt: post.date || new Date().toISOString(),
        published: true,
        author: post.author || "Admin",
      });
    }

    return NextResponse.json(
      { error: "Blog not found" },
      { status: 404 }
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, excerpt, content, coverImage, published } = body;

    // For MDX blogs, we'll just return success without saving to file
    // In a real app, you might write to the file system or database
    return NextResponse.json({
      id,
      title,
      excerpt,
      content,
      coverImage,
      published,
      message: "Blog changes saved (MDX blogs are read-only in file system)"
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    // MDX blogs cannot be deleted via API
    return NextResponse.json(
      { error: "Cannot delete MDX blog files via API" },
      { status: 403 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
