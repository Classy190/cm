import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

// PATCH /api/admin/blog/[slug] - Update MDX frontmatter (date, title, excerpt, etc.)
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
    const { date, title, excerpt, description, keywords } = await request.json();

    // Validate date format: YYYY-MM-DD if provided
    if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json(
        { error: "Ungültiges Datumsformat. Erwartet: YYYY-MM-DD" },
        { status: 400 }
      );
    }

    // Sanitize slug to prevent path traversal
    const cleanSlug = slug.replace(/[^a-zA-Z0-9-_]/g, "");
    const filePath = path.join(process.cwd(), "markdown", "blogs", `${cleanSlug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Artikel nicht gefunden" }, { status: 404 });
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const parsed = matter(fileContents);

    // Update frontmatter fields
    if (date) parsed.data.date = date;
    if (title !== undefined) parsed.data.title = title;
    if (excerpt !== undefined) parsed.data.excerpt = excerpt;
    if (description !== undefined) parsed.data.description = description;
    if (keywords !== undefined) parsed.data.keywords = keywords;

    // Rebuild file: frontmatter + content
    const updatedFile = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(filePath, updatedFile, "utf8");

    return NextResponse.json({ 
      success: true, 
      slug: cleanSlug, 
      updated: { date, title, excerpt, description, keywords }
    });
  } catch (error) {
    console.error("Blog metadata update error:", error);
    return NextResponse.json({ error: "Fehler beim Aktualisieren" }, { status: 500 });
  }
}
