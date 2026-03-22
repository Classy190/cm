import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/utils/email";
import { prisma } from "@/utils/prismaDB";

export async function POST(request: NextRequest) {
  try {
    // Support both basic contact form (name/message) and InvestmentFunnel (fullName/projectType/timeline/investment)
    const body = await request.json();
    const name: string = body.fullName || body.name || "";
    const email: string = body.email || "";
    const message: string = body.message || "";
    const projectType: string = body.projectType || "Nicht angegeben";
    const timeline: string = body.timeline || "Nicht angegeben";
    const investment: string = body.investment || "Nicht angegeben";

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Alle Felder müssen ausgefüllt sein." },
        { status: 400 }
      );
    }

    // Save to database first so we never lose a submission
    await prisma.contactSubmission.create({
      data: {
        fullName: name,
        email,
        message,
        projectType,
        timeline,
        investment,
      },
    });

    // Send email notification (non-blocking – submission is already saved)
    try {
      await sendEmail({
        to: "info@classymarketing.de",
        subject: `Neue Anfrage von ${name}`,
        html: `
          <h2>Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Projektart:</strong> ${projectType}</p>
          <p><strong>Zeitrahmen:</strong> ${timeline}</p>
          <p><strong>Investition:</strong> ${investment}</p>
          <h3>Nachricht:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });

      // Confirmation to customer
      await sendEmail({
        to: email,
        subject: "Wir haben Ihre Nachricht erhalten",
        html: `
          <h2>Danke, ${name}!</h2>
          <p>Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.</p>
          <p>Viele Grüße,<br>Özgür Atik<br>Classy Marketing</p>
        `,
      });
    } catch (emailError) {
      // Submission is already saved – log the error but return success
      console.error("Email sending error:", emailError);
    }

    return NextResponse.json(
      { message: "✅ Danke! Ich habe Ihre Nachricht erhalten und melde mich in Kürze!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Es ist ein Fehler aufgetreten." },
      { status: 500 }
    );
  }
}