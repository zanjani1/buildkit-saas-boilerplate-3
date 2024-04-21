import config from '@/config';

// GENERATE YOUR OWN PRIVACY POLICY

// STEPS
// 1. Copy the prompt below and paste it in ChatGPT
// 2. Replace the data in the prompt with your own data (if required)
// 3. Paste (replace) the answer from the ChatGPT, in the CONTENT variable below in line number 30

// ---------------------------

// PROMPT 👇🏽

// As a skilled attorney, your expertise is needed to compose a straightforward privacy policy for my website. Key details are as follows:
//
// • Site URL: https://builderkit.ai
// • Name: BuilderKit
// • Contact Email: help@builderkit.ai
// • Purpose: JavaScript code templates to accelerate startup development
// • Data Collection: User's name, email, and payment details
// • Additional Data Tracking: Cookies for site functionality
// • Primary Data Use: Processing orders
// • Data Sharing Policy: No third-party sharing
// • Children's Data Protection: No data from minors collected
// • Notification of Policy changes: Via email
//
// Please create a concise privacy policy for my website and include today’s date.
// Make sure to add links to the URLs with HTML <a> tag. And highlight the URLs with blue color.

const CONTENT = `
Effective Date: April 16, 2024

Welcome to BuilderKit, accessible at <a href="https://builderkit.ai" style="color:blue;">https://builderkit.ai</a>. This privacy policy describes how we collect, use, and handle your information when you use our services.

Information We Collect
Personal Information: We collect your name, email address, and payment details when you use our services.
Cookies: We use cookies to ensure the functionality of our website. These are small data files stored on your device.
Use of Information
Your information is used to process orders and improve our services. We do not share your personal information with third parties, except as necessary to provide our services or as required by law.

Data Protection
We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.

Children's Privacy
Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you are a parent or guardian and believe we have such information, please contact us at <a href="mailto:help@builderkit.ai" style="color:blue;">help@builderkit.ai</a>.

Changes to This Policy
We may update this policy from time to time. We will notify you of any changes by sending an email to the address you have provided us.

Contact Us
If you have any questions about this privacy policy, please contact us at <a href="mailto:help@builderkit.ai" style="color:blue;">help@builderkit.ai</a>.
`;

export default async function PrivacyPolicy() {
  return (
    <div className='flex flex-col gap-6 w-11/12 md:w-1/2 mx-auto py-10'>
      <h1 className='text-4xl font-bold'>Privacy Policy for {config.app.name}</h1>

      <p
        dangerouslySetInnerHTML={{ __html: CONTENT }}
        className='text-sm leading-relaxed whitespace-pre-line'
      />
    </div>
  );
}
