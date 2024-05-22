import Hero from '@/components/landing-pages/landing-page-5/Hero';
import Features from '@/components/landing-pages/landing-page-5/Features';
import Faq from '@/components/landing-pages/landing-page-5/Faq';
import Product from '@/components/landing-pages/landing-page-5/Product';
import Pricing from '@/components/landing-pages/landing-page-5/pricing/Pricing';
import Footer from '@/components/landing-pages/landing-page-5/Footer';

export default async function LandingPage5() {
  return (
    <>
      <main className='bg-black'>
        <Hero />
        <Features />
        <Product />
        <Pricing />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
