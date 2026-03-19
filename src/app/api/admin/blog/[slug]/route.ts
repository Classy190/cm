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

// PATCH /api/admin/blog/[slug] - Update date in MDX frontmatter
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
    const { date } = await request.json();

    // Validate date format: YYYY-MM-DD
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
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

    // Update date in frontmatter
    parsed.data.date = date;

    // Rebuild file: frontmatter + content
    const updatedFile = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(filePath, updatedFile, "utf8");

    return NextResponse.json({ success: true, slug: cleanSlug, date });
  } catch (error) {
    console.error("Blog date update error:", error);
    return NextResponse.json({ error: "Fehler beim Aktualisieren" }, { status: 500 });
  }
}
