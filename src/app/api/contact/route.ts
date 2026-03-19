import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/utils/email";

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, projectType, timeline, investment, message } = await request.json();

    // Validate required fields
    if (!fullName || !email || !projectType || !timeline || !investment || !message) {
      return NextResponse.json(
        { error: "Alle Pflichtfelder müssen ausgefüllt werden." },
        { status: 400 }
      );
    }

    // Save to database (PRIMARY - always save)
    const submission = await prisma.contactSubmission.create({
      data: {
        fullName,
        email,
        projectType,
        timeline,
        investment,
        message,
      },
    });

    // Try to send emails (BONUS - but not required for success)
    try {
      // Create email content
      const emailContent = `
        <h2>Neue Projektanfrage von ${fullName}</h2>

        <h3>Kontaktdaten:</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>E-Mail:</strong> ${email}</p>

        <h3>Projekt-Details:</h3>
        <p><strong>Art des Projekts:</strong> ${projectType}</p>
        <p><strong>Zeitrahmen:</strong> ${timeline}</p>
        <p><strong>Investitionsrahmen:</strong> ${investment}</p>

        <h3>Nachricht:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>

        <hr>
        <p><small>Diese Anfrage wurde über das Kontaktformular auf classymarketing.de gesendet.</small></p>
      `;

      // Send email to business owner
      await sendEmail({
        to: "info@classymarketing.de",
        subject: `Neue Projektanfrage: ${projectType} - ${fullName}`,
        html: emailContent,
      });

      // Send confirmation email to customer
      const confirmationContent = `
        <h2>Vielen Dank für Ihre Anfrage!</h2>

        <p>Hallo ${fullName},</p>

        <p>Vielen Dank für Ihr Interesse an unseren Dienstleistungen. Wir haben Ihre Projektanfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.</p>

        <h3>Ihre Anfrage:</h3>
        <p><strong>Projekt:</strong> ${projectType}</p>
        <p><strong>Zeitrahmen:</strong> ${timeline}</p>
        <p><strong>Budget:</strong> ${investment}</p>

        <p>Mit freundlichen Grüßen,<br>
        Ihr Classy Marketing Team</p>

        <hr>
        <p><small>Özgür Atik<br>
        Hauptstrasse 8<br>
        69190 Walldorf<br>
        info@classymarketing.de</small></p>
      `;

      await sendEmail({
        to: email,
        subject: "Ihre Projektanfrage bei Classy Marketing",
        html: confirmationContent,
      });
    } catch (emailError) {
      // Email failed, but that's OK - we saved to DB
      console.error("Email send failed (but form was saved):", emailError);
    }

    return NextResponse.json(
      { 
        message: "✅ Vielen Dank! Ihre Anfrage wurde erfolgreich gespeichert. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
        submissionId: submission.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}