import config from '@/config';
import { Metadata } from 'next';

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
    title: title || config.app.name,
    description: description || config.app.description,
    keywords: keywords || [config.app.name],
    metadataBase: new URL(config.app.url),

    openGraph: {
      type: 'website',
      locale: 'en_US',
      title: title || config.app.name,
      description: description || config.app.description,
      url: config.app.url,
      siteName: title || config.app.name,
      //   You don't need to add add the code below if you have an opengraph-image.(jpg|jpeg|png) in your /src/app directory
      //   images: '/opengraph-image.png',
    },

    twitter: {
      card: 'summary_large_image',
      title: title || config.app.name,
      description: description || config.app.description,
      //   You don't need to add add the code below if you have an twitter-image.(jpg|jpeg|png) in your /src/app directory
      //   images: '/twitter-image.png',
    },

    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    ...extraTags,
  };
};

export default getSeoMetadata;
