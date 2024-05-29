import WelcomeEmail from '@/components/email-template/WelcomeEmail';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize the Resend instance with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY!);

const senderEmailAddress = 'onboarding@resend.dev';
const testEmail = 'delivered@resend.dev'; // Use this email address to test the email sending functionality.

export async function POST(req: Request) {
  try {
    // Parse the request body to extract email and name
    const { email, name } = await req.json();

    // Send the welcome email using the Resend instance
    await resend.emails.send({
      from: senderEmailAddress,
      to: testEmail ?? email, // For multiple addresses, send as an array of strings. Max 50. It will not send emails to custom emails until you configure your domain in Resend.
      subject: 'Welcome to BuilderKit.ai',
      react: WelcomeEmail({ name }), // Email template
      // Optional: Use "text" parameter to send message in the email body instead of react or html format.
      // Example: Hi ${name},\n\nWelcome to BuilderKit, your one-stop solution for building SaaS applications.\n\nBest,\nTeam BuilderKit
      text: '',
    });

    return NextResponse.json({ message: `Email sent to ${email}` }, { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

// Check out the documentation for more details: https://resend.com/docs/send-with-nextjs.
