import Hero from './Hero';
import Footer from './Footer';
import Headers from './Header';
import Navbar from './Navbar';
import Features from './features/Features';
import Features2 from './Features2';
import Feedback from './Feedback';
import Pricing from './pricing/Pricing';
import Subscribe from './Subscribe';
import Faq from './Faq';

import Image from 'next/image';
import hero from '@/assets/landing-page-13/images/hero.png';
import FeaturedOn from './FeaturedOn';

export default function LandingPage13() {
  return (
    <div>
      <Headers />
      <Navbar />
      <div className='max-w-6xl mx-auto py-16 px-4 '>
        <Hero />
        <FeaturedOn />
        <Image src={hero} width={1042} height={550} alt='hero' className='mx-auto rounded-xl' />
      </div>
      <Features />
      <Features2 />
      <Feedback />
      <Pricing />
      <Subscribe />
      <Faq />
      <Footer />
    </div>
  );
}
