import Hero from './Hero';
import Pricing from './pricing/Pricing';
import Footer from './Footer';
import Faq from './Faq';
import Subscribe from './Subscribe';
import Navbar from './Navbar';
import { Space_Grotesk } from 'next/font/google';
import FeaturedOn from './FeaturedOn';
import Features from './features/Features';
import Features2 from './Features2';
import Features3 from './Features3';
import Feedback from './Feedback';

const font = Space_Grotesk({
  subsets: ['latin'],
});

export default function LandingPage12() {
  return (
    <div className={font.className}>
      <Navbar />
      <Hero />
      <FeaturedOn />
      <Features />
      <Features2 />
      <Features3 />
      <Feedback />
      <Pricing />
      <Subscribe />
      <Faq />
      <Footer />
    </div>
  );
}
