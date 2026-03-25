import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/utils/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const bestellnummer: string = (body.bestellnummer || "").trim();
    const email: string = (body.email || "").trim();

    // Validate required fields
    if (!bestellnummer || !email) {
      return NextResponse.json(
        { error: "Bestellnummer und E-Mail-Adresse sind erforderlich." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }

    const now = new Date();
    const timestamp = now.toLocaleString("de-DE", {
      timeZone: "Europe/Berlin",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Confirmation email to customer (required by § 356a BGB)
    try {
      await sendEmail({
        to: email,
        subject: "Eingangsbestätigung Ihres Widerrufs – Classy Marketing",
        html: `
          <h2>Eingangsbestätigung Ihrer Widerrufserklärung</h2>
          <p>Hiermit bestätigen wir den Eingang Ihrer Widerrufserklärung.</p>
          <table style="border-collapse:collapse;width:100%;max-width:500px;">
            <tr>
              <td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Bestellnummer</td>
              <td style="padding:8px;border:1px solid #ddd;">${bestellnummer}</td>
            </tr>
            <tr>
              <td style="padding:8px;border:1px solid #ddd;font-weight:bold;">E-Mail-Adresse</td>
              <td style="padding:8px;border:1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Eingangszeitpunkt</td>
              <td style="padding:8px;border:1px solid #ddd;">${timestamp} Uhr (MEZ)</td>
            </tr>
          </table>
          <p style="margin-top:16px;">Ihr Widerruf ist damit rechtswirksam erklärt. Wir werden uns innerhalb von 14 Tagen bei Ihnen melden und die weitere Abwicklung mit Ihnen klären.</p>
          <p>Mit freundlichen Grüßen,<br>Özgür Atik<br>Classy Marketing<br>Hauptstrasse 8, 69190 Walldorf<br>info@classymarketing.de</p>
        `,
      });

      // Internal notification
      await sendEmail({
        to: "info@classymarketing.de",
        subject: `⚠️ Widerruf eingegangen – Bestellnummer ${bestellnummer}`,
        html: `
          <h2>Widerrufserklärung eingegangen</h2>
          <p><strong>Bestellnummer:</strong> ${bestellnummer}</p>
          <p><strong>E-Mail des Kunden:</strong> ${email}</p>
          <p><strong>Eingangszeitpunkt:</strong> ${timestamp} Uhr</p>
          <p>Bitte Widerruf prüfen und innerhalb der gesetzlichen Fristen abwickeln.</p>
        `,
      });
    } catch (emailError) {
      console.error("Widerruf email error:", emailError);
      // Still return success – the widerruf is legally received even if email fails
    }

    return NextResponse.json(
      {
        message: "Ihr Widerruf wurde erfolgreich übermittelt.",
        timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Widerruf route error:", error);
    return NextResponse.json(
      { error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}
