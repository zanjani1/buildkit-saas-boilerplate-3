// This is the entry component for the landing page of the application.
// It sequentially renders the primary sections of the landing page including Hero, Features, Product, Pricing, Faq, and Footer components.

import Faq from '@/components/landing-pages/landing-page-9/Faq';
import Features from '@/components/landing-pages/landing-page-9/Features';
import Footer from '@/components/landing-pages/landing-page-9/Footer';
import Hero from '@/components/landing-pages/landing-page-9/Hero';
import Product from '@/components/landing-pages/landing-page-9/Product';
import Pricing from '@/components/landing-pages/landing-page-9/pricing/Pricing';

export default async function LandingPage9() {
  return (
    <>
      <Hero />
      <Product />
      <Features />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}
