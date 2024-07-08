// This is the entry component for the landing page of the application.
// It sequentially renders the primary sections of the landing page including Hero, Features, Product, Pricing, Faq, and Footer components.

import Faq from './Faq';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import Product from './Product';
import Pricing from './pricing/Pricing';

export default async function LandingPage9() {
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
