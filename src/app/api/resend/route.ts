import { WelcomeEmail } from '@/components/WelcomeEmail';
import { Resend } from 'resend';

// Initialize the Resend instance with the API key from environment variables
const resend = new Resend('re_EXsnrnsE_3nrG3ybxqBcmUbhAURA9KLrU');

export async function POST(req: Request) {
  try {
    // Parse the request body to extract email and name
    const { email, name } = await req.json();

    // Send the welcome email using the Resend instance
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Sender email address
      to: ['delivered@resend.dev', email], // Note: It will not send emails to custom emails until you configure your domain in Resend.
      subject: 'Welcome to BuilderKit.io', // Email subject line
      react: WelcomeEmail({ userFirstname: name }), // React component for the email body
      text: `Hi ${name},\n\nWelcome to BuilderKit, your one-stop solution for building SaaS applications.\n\nBest,\nThe BuilderKit team`, // Plain text version of the email body
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);

    // Return a JSON response indicating an error, with a 500 status code
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Check out the documentation for more details: https://resend.com/docs/send-with-nextjs.
