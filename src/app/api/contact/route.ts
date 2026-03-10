import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    console.log("=== CONTACT FORM HIT ===");
    console.log("GMAIL_USER:", process.env.GMAIL_USER);
    console.log("GMAIL_APP_PASSWORD exists:", !!process.env.GMAIL_APP_PASSWORD);
    console.log("GMAIL_APP_PASSWORD length:", process.env.GMAIL_APP_PASSWORD?.length);

    try {
        const body = await req.json();
        console.log("Form data received:", body);

        const { name, company, phone, email, message } = body;

        if (!name || !email || !message) {
            console.log("Validation failed — missing fields");
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        console.log("Creating transporter...");
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        console.log("Verifying transporter...");
        await transporter.verify();
        console.log("Transporter verified OK!");

        console.log("Sending email...");
        await transporter.sendMail({
            from: `"Melody Sweets Website" <${process.env.GMAIL_USER}>`,
            to: "melodysweetsandbakers@gmail.com",
            replyTo: email,
            subject: `New Contact Form Message from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f0e8d5; border-radius: 12px;">
          <h2 style="color: #2c1a0e; border-bottom: 2px solid #c8860a; padding-bottom: 12px;">
            New Message — Melody Sweets & Bakers
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; color: #7a5c3a; font-weight: bold; width: 130px;">Name</td>
              <td style="padding: 10px 0; color: #2c1a0e;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7a5c3a; font-weight: bold;">Email</td>
              <td style="padding: 10px 0; color: #2c1a0e;">
                <a href="mailto:${email}" style="color: #c8860a;">${email}</a>
              </td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; color: #7a5c3a; font-weight: bold;">Company</td>
              <td style="padding: 10px 0; color: #2c1a0e;">${company}</td>
            </tr>` : ""}
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: #7a5c3a; font-weight: bold;">Phone</td>
              <td style="padding: 10px 0; color: #2c1a0e;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #7a5c3a; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #2c1a0e; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
        });

        console.log("Email sent successfully!");
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("=== ERROR ===");
        console.error(error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}