import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
  honeypot: z.string().optional(),
});

// Basic in-memory rate limiting
const rateLimit = new Map<string, { count: number; timestamp: number }>();

export async function POST(req: Request) {
  try {
    // 1. Basic Rate Limiting
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = 3;

    const rateData = rateLimit.get(ip) || { count: 0, timestamp: now };
    if (now - rateData.timestamp > windowMs) {
      rateData.count = 1;
      rateData.timestamp = now;
    } else {
      rateData.count++;
      if (rateData.count > maxRequests) {
        return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
      }
    }
    rateLimit.set(ip, rateData);

    // 2. Parse JSON body
    const body = await req.json();

    // 3. Validate Inputs
    const validatedData = contactSchema.parse(body);

    // 4. Check Honeypot for simple spam protection
    if (validatedData.honeypot) {
      // If honeypot is filled, it's likely a bot. Silently drop the request but return success to fool the bot.
      console.warn("Spam detected: Honeypot field was filled.");
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    }

    // 5. Send Email via Resend
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json({ error: "Server misconfiguration. Cannot send email." }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Resend default test domain. Update for production.
      to: "shubhamkt278@gmail.com",
      subject: `New Portfolio Message from ${validatedData.name}`,
      text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\n\nMessage:\n${validatedData.message}`,
      html: `
        <h3>New Message from Portfolio</h3>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <hr/>
        <p>${validatedData.message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: "Failed to send email via Resend." }, { status: 500 });
    }

    // Return 200 success
    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact API Error:", error);
    if (error instanceof z.ZodError) {
      // 400 invalid input
      return NextResponse.json({ error: "Invalid input data", details: (error as any).errors }, { status: 400 });
    }
    // 500 server error
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
