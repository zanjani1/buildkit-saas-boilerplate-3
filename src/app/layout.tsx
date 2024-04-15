import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { Providers } from './providers';
import getSeoMetadata from '@/utils/seo-metadata';

const font = Inter({ subsets: ['latin'] });

export const metadata = getSeoMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
