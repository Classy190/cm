import { NextResponse } from "next/server";
import { prisma } from "@/utils/prismaDB";
import { cookies } from "next/headers";

export async function GET(request: Request) {
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

    // Get blog stats
    const totalBlogs = await prisma.blog.count();
    const publishedBlogs = await prisma.blog.count({ where: { published: true } });
    const draftBlogs = totalBlogs - publishedBlogs;

    // Get comment stats
    const totalComments = await prisma.comment.count();
    const approvedComments = await prisma.comment.count({ where: { approved: true } });

    // Get contact stats
    const totalContacts = await prisma.contactSubmission.count();
    const unreadContacts = await prisma.contactSubmission.count({ where: { read: false } });
    const archivedContacts = await prisma.contactSubmission.count({ where: { archived: true } });

    // Get user stats
    const totalUsers = await prisma.user.count();
    const adminUsers = await prisma.user.count({ where: { isAdmin: true } });

    // Recent activities
    const recentBlogs = await prisma.blog.findMany({
      take: 5,
      orderBy: { updatedAt: "desc" },
      select: { title: true, updatedAt: true, published: true }
    });

    const recentMessages = await prisma.contactSubmission.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: { fullName: true, email: true, createdAt: true }
    });

    return NextResponse.json({
      blogs: {
        total: totalBlogs,
        published: publishedBlogs,
        drafts: draftBlogs
      },
      comments: {
        total: totalComments,
        approved: approvedComments,
        pending: totalComments - approvedComments
      },
      contacts: {
        total: totalContacts,
        unread: unreadContacts,
        archived: archivedContacts
      },
      users: {
        total: totalUsers,
        admins: adminUsers
      },
      recentBlogs,
      recentMessages,
      lastUpdated: new Date()
    });
  } catch (error) {
    console.error("Stats error:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
