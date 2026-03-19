import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    // Get auth header (simple API key protection)
    const authHeader = request.headers.get("authorization");
    const apiKey = process.env.ADMIN_API_KEY || "default-secret-key";

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.slice(7);
    if (token !== apiKey) {
      return NextResponse.json(
        { error: "Invalid API key" },
        { status: 401 }
      );
    }

    // Get all submissions
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(submissions, { status: 200 });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const apiKey = process.env.ADMIN_API_KEY || "default-secret-key";

    if (!authHeader || authHeader.slice(7) !== apiKey) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { submissionId, action } = await request.json();

    if (action === "read") {
      const updated = await prisma.contactSubmission.update({
        where: { id: submissionId },
        data: { read: true },
      });
      return NextResponse.json(updated, { status: 200 });
    }

    if (action === "archive") {
      const updated = await prisma.contactSubmission.update({
        where: { id: submissionId },
        data: { archived: true },
      });
      return NextResponse.json(updated, { status: 200 });
    }

    return NextResponse.json(
      { error: "Invalid action" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Error updating submission:", error);
    return NextResponse.json(
      { error: "Failed to update submission" },
      { status: 500 }
    );
  }
}
