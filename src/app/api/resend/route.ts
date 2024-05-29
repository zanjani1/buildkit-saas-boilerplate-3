// import welcomeEmail from '@/components/email-template/WelcomeEmail';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize the Resend instance with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

const senderEmailAddress = 'onboarding@resend.dev';
// const testEmail = 'deliered@resend.dev'; // Use this email address to test the email sending functionality.

export async function POST(req: Request) {
  try {
    // Parse the request body to extract email, subject, and email body
    const { email, subject, emailBody } = await req.json();

    // Send the mail using the Resend instance
    await resend.emails.send({
      from: senderEmailAddress,
      to: email, // For multiple addresses, send as an array of strings. Max 50. It will not send emails to custom emails until you configure your domain in Resend.
      subject: subject,
      html: emailBody, //add email body in HTML format
    });

    return NextResponse.json({ message: `Email sent to ${email}` }, { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

// Check out the documentation for more details: https://resend.com/docs/send-with-nextjs.
