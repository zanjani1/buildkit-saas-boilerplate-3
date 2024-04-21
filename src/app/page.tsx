// This is the entry component for the landing page of the application.
// It sequentially renders the primary sections of the landing page including Hero, Features, Product, Pricing, Faq, and Footer components.

import Faq from '@/components/landing-page/Faq';
import Features from '@/components/landing-page/Features';
import Footer from '@/components/landing-page/Footer';
import Hero from '@/components/landing-page/Hero';
import Pricing from '@/components/landing-page/pricing/Pricing';
import Product from '@/components/landing-page/Product';

export default async function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Product />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}
