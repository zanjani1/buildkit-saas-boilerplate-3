import config from '@/config';

// GENERATE YOUR OWN TERMS & SERVICES

// STEPS
// 1. Copy the prompt below and paste it in ChatGPT
// 2. Replace the data in the prompt with your own data (if required)
// 3. Paste (replace) the answer from the ChatGPT, in the CONTENT variable below in line number 30

// ---------------------------

// PROMPT 👇🏽

// As an accomplished attorney, I require your expertise in crafting a straightforward Terms & Services document for my website. Here are the details:
//
// • Site URL: https://builderkit.ai
// • Name: BuilderKit
// • Contact Email: help@builderkit.ai
// • Purpose: JavaScript code templates to accelerate startup development
// • Code Ownership: Buyers own the code but cannot resell it
// • Data Collection: User's name, email, and payment details
// • Additional Data Tracking: Cookies for site functionality
// • Privacy Policy Link: https://builderkit.ai/privacy-policy
// • Legal Jurisdiction: India
// • Notification of Terms Changes: Via email
//
// Please draft the Terms & Services for my website, including today's date.
// Make sure to add links to the URLs with HTML <a> tag. And highlight the URLs with blue color.

const CONTENT = `
Effective Date: April 15, 2024

1. Acceptance of Terms
Welcome to BuilderKit. By accessing <a href="https://builderkit.ai" style="color: blue;">https://builderkit.ai</a>, you agree to be bound by these Terms of Service and our Privacy Policy, accessible at <a href="https://builderkit.ai/privacy-policy" style="color: blue;">https://builderkit.ai/privacy-policy</a>. If you disagree with any part of the terms, you must not use our website.

2. Services Provided
BuilderKit provides JavaScript code templates to accelerate startup development. These templates are designed to help you expedite your project development.

3. Code Ownership and Use
When you purchase templates from BuilderKit, you are granted ownership of the code. However, you are not permitted to resell any code obtained from our website. You may use the code for personal or business projects subject to these terms.

4. Data Collection
We collect personal information such as your name, email address, and payment details to process transactions and improve our services. For more details on our data practices, please review our Privacy Policy linked above.

5. Use of Cookies
Our website uses cookies to enhance user experience, analyze site usage, and manage content displayed. By using BuilderKit, you consent to the use of cookies in accordance with our privacy policy.

6. Legal Jurisdiction
These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising under or related to these terms shall be subject to the exclusive jurisdiction of the courts of India.

7. Modification of Terms
BuilderKit reserves the right to modify these Terms at any time. We will notify you of any changes by sending an email to the address you provided us. Your continued use of the website after such modifications will constitute your acceptance of the revised terms.

8. Contact Information
For any questions or concerns regarding these Terms of Service, please contact us at <a href="mailto:help@builderkit.ai" style="color: blue;">help@builderkit.ai</a>.

By using BuilderKit, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
`;

export default async function TermsOfService() {
  return (
    <div className='flex flex-col gap-6 w-11/12 md:w-1/2 mx-auto py-10'>
      <h1 className='text-4xl font-bold'>Terms of Service for {config.app.name}</h1>

      <p
        dangerouslySetInnerHTML={{ __html: CONTENT }}
        className='text-sm leading-relaxed whitespace-pre-line'
      />
    </div>
  );
}
