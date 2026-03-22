import { prisma } from "@/utils/prismaDB";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

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

// GET all comments (admin)
export async function GET(request: NextRequest) {
  if (!(await checkAdminAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get("filter"); // "pending" | "approved" | all

    const where =
      filter === "pending"
        ? { approved: false }
        : filter === "approved"
          ? { approved: true }
          : {};

    const comments = await prisma.comment.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        blog: { select: { slug: true, title: true } },
      },
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

// PATCH – approve or reject a comment
export async function PATCH(request: NextRequest) {
  if (!(await checkAdminAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, approved } = await request.json();
    if (!id || typeof approved !== "boolean") {
      return NextResponse.json({ error: "Invalid body" }, { status: 400 });
    }

    const comment = await prisma.comment.update({
      where: { id },
      data: { approved },
    });

    return NextResponse.json(comment);
  } catch (error) {
    console.error("Error updating comment:", error);
    return NextResponse.json(
      { error: "Failed to update comment" },
      { status: 500 }
    );
  }
}

// DELETE a comment
export async function DELETE(request: NextRequest) {
  if (!(await checkAdminAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "id is required" }, { status: 400 });
    }

    await prisma.comment.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting comment:", error);
    return NextResponse.json(
      { error: "Failed to delete comment" },
      { status: 500 }
    );
  }
}
