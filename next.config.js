// eslint-disable-next-line
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'replicate.delivery',
      },
    ],
  },
};

module.exports = nextConfig;

// SENTRY: Uncomment the below code from line:23 - line:31 to enable and start using sentry.
// This will enable Sentry for your project and will start capturing errors and exceptions.

// USAGE: Add your Sentry auth token in the .env file and update the org and project name as per the configuration you have in Sentry Dashboard.

// module.exports = withSentryConfig(module.exports, {
//   org: '1811-labs',
//   project: 'builderkit',

//   silent: false, // Can be used to suppress logs

//   // An auth token is required for uploading source maps.
//   authToken: process.env.SENTRY_AUTH_TOKEN,
// });

// You can configure more options as per the requirement.
// Here you can also set context data - data about the user, for example, or tags, or even arbitrary data - which will be added to every event sent to Sentry.
// For all available options, check - https://github.com/getsentry/sentry-webpack-plugin#options
