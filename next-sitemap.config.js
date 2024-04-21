/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Required: your domain name
  siteUrl: process.env.APP_URL || 'https://builderkit.ai',
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false, // (optional)
  exclude: ['/logo.*', '/opengraph-image.*'],
};
