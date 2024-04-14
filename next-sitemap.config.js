/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Required: your domain name
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  exclude: ['/logo.*', '/og-image.*'],
};
