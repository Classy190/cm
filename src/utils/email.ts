type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

export const sendEmail = async (data: EmailPayload) => {
  try {
    // Try using Resend if API key exists
    if (process.env.RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "noreply@classymarketing.de",
          to: data.to,
          subject: data.subject,
          html: data.html,
        }),
      });

      if (!response.ok) {
        throw new Error(`Resend error: ${response.statusText}`);
      }

      return response.json();
    }

    // Fallback: Just log to console
    console.log("📧 Email (logged to console - no service configured):");
    console.log(`To: ${data.to}`);
    console.log(`Subject: ${data.subject}`);
    return Promise.resolve({ success: true, id: "logged-only" });
  } catch (error) {
    console.error("Email error:", error);
    throw error;
  }
};
