import FeaturedOn from './FeaturedOn';
import Hero from './Hero';
import Features2 from './Features2';
import Features from './Features';
import Pricing from './Pricing';
import Footer from './Footer';
import Faq from './Faq';

export default function LandingPage10() {
  return (
    <div className='text-white bg-[#141414] bg-gradient-to-bl from-[#313B8233] to-[#090A1833]'>
      <Hero />
      <FeaturedOn />
      <Features2 />
      <Features />
      <Pricing />
      <Faq />
      <hr className='border border-[#2B2F45] w-full' />
      <Footer />
    </div>
  );
}
