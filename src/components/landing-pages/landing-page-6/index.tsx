// This is the entry component for the landing page of the application.
// It sequentially renders the primary sections of the landing page including Hero, Features, Product, Pricing, Faq, and Footer components.

import Navbar from './Navbar';
import Hero from './Hero';
import FeaturedOn from './FeaturedOn';
import Pricing from './pricing/Pricing';
import Faq from './Faq';
import Footer from './Footer';
import Features from './Features';

export default async function LandingPage6() {
  return (
    <>
      {/* eslint-disable tailwindcss/no-contradicting-classname */}
      <div className='bg-gradient-to-r from-[#52BDAA33] from-20% via-white to-[#52BDAA33] to-80%'>
        <Navbar />
        <Hero />
      </div>
      <FeaturedOn />
      <Features />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}
