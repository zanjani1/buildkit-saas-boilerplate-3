// Root layout component for the application, setting global styles and loading essential scripts.
// This setup ensures that page views and user interactions are tracked for analysis.
// This layout wraps around the main content of the application and applies the global CSS defined in 'globals.css'.

import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { Providers } from './providers';
import getSeoMetadata from '@/utils/seo-metadata';

const font = Inter({ subsets: ['latin'] });

// It handles the integration of SEO metadata. It is fetched from a utility function and can be used to set meta tags dynamically.
export const metadata = getSeoMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* It handles the integration of Google Analytics. The scripts are set to load lazily and configure tracking ID from environment variables.*/}
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`}
      />
      <Script strategy='lazyOnload' id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}', {
          page_path: window.location.pathname,
          });
      `}
      </Script>

      <html lang='en'>
        <body className={font.className}>
          <Providers>
            <main>{children}</main>
          </Providers>
        </body>
      </html>
    </>
  );
}
