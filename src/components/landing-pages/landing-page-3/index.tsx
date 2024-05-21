// This is the entry component for the landing page of the application.
// It sequentially renders the primary sections of the landing page including Hero, Features, Product, Pricing, Faq, and Footer components.
import Navbar from './Navbar';
import Hero from './Hero';
import FeaturedOn from './FeaturedOn';
import HowTo from './HowTo';
import Pricing from './Pricing/Pricing';
import Help from './Help';
import Footer from './Footer';

export default async function LandingPage3() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedOn />
      <HowTo />
      <Pricing />
      <Help />
      <Footer />
    </>
  );
}
