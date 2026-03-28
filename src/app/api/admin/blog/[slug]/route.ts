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

// PATCH /api/admin/blog/[slug] - Update blog metadata in database
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const isAuthorized = await checkAdminAuth();
    if (!isAuthorized) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug } = await params;
    const { date, title, excerpt, description, keywords, coverImage } = await request.json();

    // Validate date format: YYYY-MM-DD if provided
    if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json(
        { error: "Ungültiges Datumsformat. Erwartet: YYYY-MM-DD" },
        { status: 400 }
      );
    }

    // Sanitize slug to prevent path traversal
    const cleanSlug = slug.replace(/[^a-zA-Z0-9-_]/g, "");

    console.log("Updating blog in database:", { slug: cleanSlug, date, title });

    // Find blog by slug
    const blog = await prisma.blog.findUnique({
      where: { slug: cleanSlug },
    });

    if (!blog) {
      console.log("Blog not found:", cleanSlug);
      return NextResponse.json({ error: "Artikel nicht gefunden" }, { status: 404 });
    }

    // Update blog metadata in database
    const updatedBlog = await prisma.blog.update({
      where: { slug: cleanSlug },
      data: {
        ...(date && { createdAt: new Date(date) }),
        ...(title !== undefined && { title }),
        ...(excerpt !== undefined && { excerpt }),
        ...(description !== undefined && { description }),
        ...(keywords !== undefined && { keywords }),
        ...(coverImage !== undefined && { coverImage }),
      },
    });

    console.log("Blog successfully updated in database:", cleanSlug);

    return NextResponse.json({ 
      success: true, 
      slug: cleanSlug, 
      updated: updatedBlog
    });
  } catch (error: any) {
    console.error("Blog metadata update error:", error);
    const errorMsg = error?.message || "Fehler beim Aktualisieren";
    return NextResponse.json(
      { error: `Fehler: ${errorMsg}` }, 
      { status: 500 }
    );
  }
}
