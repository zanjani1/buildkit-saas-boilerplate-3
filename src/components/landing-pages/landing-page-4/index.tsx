// This is the entry component for the landing page of the application.
// It sequentially renders the primary sections of the landing page including Hero, Features, Product, Pricing, Faq, and Footer components.

import Faq from './Faq';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import Pricing from './pricing/Pricing';
import Product from './Product';

export default async function LandingPage4() {
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
