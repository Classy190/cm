import { NextRequest, NextResponse } from "next/server";
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

    // Send emails
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

      console.log("✅ E-Mails erfolgreich versendet für:", email);
    } catch (emailError) {
      console.error("❌ E-Mail-Versand fehlgeschlagen:", emailError);
      return NextResponse.json(
        { error: "E-Mail-Versand fehlgeschlagen. Bitte versuchen Sie es später erneut." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: "✅ Vielen Dank! Ihre Anfrage wurde erfolgreich versendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Kontaktformular Fehler:", error);
    
    return NextResponse.json(
      { 
        error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      },
      { status: 500 }
    );
  }
}