# NextJS SaaS AI Boilerplate by [BuilderKit.ai](https://www.builderkit.ai)

`NextJs` `Shadcn` `Supabase` `Payments` `AI Modules` `Email Integrations` `SEO` `Crisp`

## Introduction

BuilderKit is a Next.js SaaS AI Boilerplate project designed to accelerate the development of AI-driven applications. It provides a robust foundation with essential features, including authentication, chat support, and various integrations, making it easy to build and scale AI products.

<a href="https://base.builderkit.ai" target="_blank" rel="noopener">
  <picture>
    <img alt="BuilderKit" src="https://base.builderkit.ai/github-cover.webp" />
  </picture>
</a>

## Features

- ✨ Support for all major AI Models & Workflows
- ⛩️ Comprehensive NextJS Boiler Plate
- ⚡️ Supabase integrations for Database, OAuth, and Storage
- 🔗 Auth, Payments & Email Integrations
- 📜 Landing Pages & Waitlist Pages
- 🤖 10 Pre-Built AI Apps
- 💬 Chat support with Crisp

## Quickstart Guide

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm or pnpm or yarn `(npm for me)`

### Installation

1. **Clone the repository:**

   Use the Project URL based on your plan

   **Starter**

   ```sh
   git clone https://github.com/1811-Labs-LLC/BuilderKit-Starter.git [YOUR_APP_NAME]
   ```

   **Pro**

   ```sh
   git clone https://github.com/1811-Labs-LLC/BuilderKit-Pro.git [YOUR_APP_NAME]
   ```

   ```sh
   cd [YOUR_APP_NAME]

   git remote remove origin

   git checkout content-writer
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Environment Variables:**

   Create a `.env.local` file in the root directory and add the following variables:

   ```plaintext
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   SUPABASE_SERVICE_ROLE_KEY=<your-supabase-service-role-key>
   OPENAI_API_KEY=<your-openai-api-key>
   REPLICATE_API_TOKEN=<your-replicate-api-key>
   ANTHROPIC_API_KEY=<your-anthropic-api-key>
   REPLICATE_API_TOKEN=<your replicate-api-key>
   LEMON_SQUEZY_BASE_URL=<your-lemon-squeezy-base-url>
   LEMON_SQUEEZY_API_KEY=<your-lemon-squeezy-api-key>
   LEMON_SQUEEZY_WEBHOOK_SECRET=<your-lemon-squeezy-webhook-secret>
   STRIPE_SECRET_KEY=<your-stripe-api-secret-key>
   STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>
   LOOPS_API_KEY=<your-loops-api-key>
   NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY=<your-google-analytics-key>
   ```

4. **Sync Supabase Types:**

   This will sync the table schema locally from Supabase. Run the below commands to login to supabase and sync the schema type.

   ```sh
   npx supabase login

   npx supabase init

   npx supabase gen types typescript --project-id [PROJECT_ID] --schema public > src/types/supabase.ts
   ```

   _To get the **PROJECT ID**, go to **Project Settings** in Supabase where you have created your project. You will find **Reference ID** under **General settings** section which is your Project ID._

### Running the Application

1. **Run the development server:**

   ```sh
   npm run dev
   ```

   This will start the development server on `http://localhost:3000`.

2. **Build for production:**

   ```sh
   npm run build
   ```

   This command compiles the application for production usage.

3. **Start the production server:**

   ```sh
   npm start
   ```

   This will start the application in production mode.

### Additional Scripts

- **Prepare Husky for Git hooks:**

  ```sh
  npm run prepare
  ```

- **Validate the code with Linting, Formatting & Typecheck:**

  ```sh
  npm run validate
  ```

## Requirements

- **Node.js**: Download and install from [here](https://nodejs.org/).
- **Supabase**: Create an account and a new project on [Supabase](https://supabase.com/). And, obtain the required details.
- **OpenAI API Key**: Sign up for an API key on [OpenAI](https://openai.com/).
- **Anthropic API Key**: Sign up for an API key on [Anthropic](https://www.anthropic.com/) and get free credits to start up.
- **Replicate API Key**: Create an account on [Replicate](https://replicate.com/) to get the API token.
- **Lemon Squeezy**: Create an account in [Lemon Squeezy](https://www.lemonsqueezy.com/) to get the API key and setup the webhook.
- **Stripe**: Sign up in [Stripe](https://stripe.com) to get the API key and setup the webhook.
- **Loops**: Create an account in Loops and get the API key and Base Url [Loops](https://loops.so/).

## License

This project is licensed under the MIT License. See the [LICENSE](https://www.builderkit.ai/license) file for details.

## Contact

For any inquiries or issues, please open an issue on the [GitHub repository](https://github.com/1811-Labs-LLC/BuilderKit) or contact the author at [vatsal1811@gmail.com](mailto:vatsal1811@gmail.com).
