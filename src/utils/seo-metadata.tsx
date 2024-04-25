// This function constructs SEO metadata for pages using default values from the config or overrides provided by the caller.
// This metadata can be injected into the <head> of HTML documents to improve SEO and social media interaction.

import config from '@/config';
import { Metadata } from 'next';

// Parameters:
// - title: custom title for the SEO metadata; defaults to app name from config if not provided.
// - description: description for SEO; defaults to app description from config if not provided.
// - keywords: SEO keywords as an array; defaults to an array containing the app name if not provided.
// - canonicalUrlRelative: optional relative URL for the canonical link; useful for avoiding duplicate content issues.
// - extraTags: any additional meta tags as an object, where key is the tag name and value is the content.

// The function returns an object structured for SEO usage with several key properties:
const getSeoMetadata = ({
  title,
  description,
  keywords,
  canonicalUrlRelative,
  extraTags,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, string>;
} = {}) => {
  return {
    // Basic metadata like title, description, and keywords.
    title: title || config.app.name,
    description: description || config.app.description,
    keywords: keywords || [config.app.name],
    metadataBase: new URL(config.app.url),

    // Open Graph (OG) data, widely used by social networks like Facebook to enhance shared content.
    // Includes OG-specific fields like type, locale, url, and siteName.
    openGraph: {
      type: 'website',
      locale: 'en_US',
      title: title || config.app.name,
      description: description || config.app.description,
      url: config.app.url,
      siteName: title || config.app.name,
      //   You don't need to add add the code below if you have an opengraph-image.(jpg|jpeg|png) in your /src/app directory
      images: '/opengraph-image.png',
    },

    // Twitter card data to define how URLs are displayed on Twitter, specifying the type of card and other visual elements.
    twitter: {
      card: 'summary_large_image',
      title: title || config.app.name,
      description: description || config.app.description,
      //   You don't need to add add the code below if you have an twitter-image.(jpg|jpeg|png) in your /src/app directory
      images: '/opengraph-image.png',
    },

    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    ...extraTags,
  };
};

export default getSeoMetadata;

// Additional notes:
// - `canonicalUrlRelative` is used to specify a canonical URL, which helps prevent SEO issues related to duplicate content.
// - `extraTags` allows for flexibility to include any additional SEO tags that might be needed for specific pages.

// Example usage:
// const seoData = getSeoMetadata({
//   title: 'Example Page Title',
//   description: 'Description of the example page',
//   keywords: ['example', 'demo', 'tutorial'],
//   canonicalUrlRelative: '/example-page',
// });

// This setup ensures that all pages have robust and flexible SEO and social media presentation capabilities.
