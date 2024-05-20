// This is the entry component for the landing page of the application.
// It sequentially renders the primary sections of the landing page including Hero, Features, Product, Pricing, Faq, and Footer components.

import Features from './Features';
import Hero from './Hero';
import Product from './Product';

export default async function LandingPage2() {
  return (
    <>
      <Hero />
      <Features />
      <Product />
    </>
  );
}
