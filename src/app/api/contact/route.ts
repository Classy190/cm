import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/utils/email";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Alle Felder müssen ausgefüllt sein." },
        { status: 400 }
      );
    }

    // Send email to your address
    try {
      await sendEmail({
        to: "info@classymarketing.de",
        subject: `Neue Nachricht von ${name}`,
        html: `
          <h2>Neue Nachricht vom Kontaktformular</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <h3>Nachricht:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      // Send confirmation to customer
      await sendEmail({
        to: email,
        subject: "Wir haben Ihre Nachricht erhalten",
        html: `
          <h2>Danke, ${name}!</h2>
          <p>Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.</p>
          <p>Viele Grüße,<br>Özgür Atik<br>Classy Marketing</p>
        `,
      });
    } catch (emailError) {
      console.error("Email error:", emailError);
      return NextResponse.json(
        { error: "Fehler beim Versenden. Bitte später versuchen." },
        { status: 500 }
      );
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