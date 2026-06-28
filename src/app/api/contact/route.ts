import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form API route.
 *
 * Validates input and processes contact submissions.
 *
 * Email delivery options:
 * 1. Set RESEND_API_KEY env var to send via Resend (recommended for production)
 * 2. Set SMTP_* env vars for Nodemailer-style SMTP (not implemented here)
 * 3. Falls back to logging the submission (development mode)
 *
 * To enable Resend: npm install resend, uncomment the Resend block below,
 * and set RESEND_API_KEY + CONTACT_EMAIL in .env.local
 */

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

function validateBody(body: unknown): ContactBody | null {
  if (!body || typeof body !== "object") return null;
  const { name, email, message } = body as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return null;
  }
  if (!name.trim() || !email.trim() || !message.trim()) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (message.length > 5000) return null;
  return { name: name.trim(), email: email.trim(), message: message.trim() };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = validateBody(body);

    if (!data) {
      return NextResponse.json(
        { error: "Invalid form data. Please check all fields." },
        { status: 400 }
      );
    }

    const contactEmail =
      process.env.CONTACT_EMAIL || "maliksaddique139@gmail.com";

    // Log submission (always, for audit trail in dev)
    console.log("[Contact Form Submission]", {
      ...data,
      timestamp: new Date().toISOString(),
    });

    // Resend integration (uncomment when RESEND_API_KEY is set)
    /*
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: contactEmail,
        replyTo: data.email,
        subject: `Portfolio Contact from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
      });
    }
    */

    // mailto fallback note: frontend could use mailto if API fails
    // For now, we acknowledge successful validation + logging

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
