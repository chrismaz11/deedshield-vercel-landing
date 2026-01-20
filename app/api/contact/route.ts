import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactFormEmail } from "@/emails/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, comments } = body;

    // Validate required fields
    if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Name, company, and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "your-email@example.com";

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send email using Resend with React email template
    const { data, error } = await resend.emails.send({
      from: "Deed Shield <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail({
        name,
        company,
        email,
        phone: phone || "Not provided",
        message: comments || "No message provided",
      }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: data?.id
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

