import FeaturedOn from './FeaturedOn';
import Hero from './Hero';
import Features2 from './Features-2';
import Features from './Features';
import Pricing from './Pricing';
import Faq from './FAQ';
import Footer from './Footer';

export default function LandingPage6() {
  return (
    <div className='bg-[#141414] bg-gradient-to-tr from-[#090A1833] to-[#313B8233] text-white pt-4'>
      <Hero />
      <FeaturedOn />
      <Features2 />
      <Features />
      <Pricing />
      <Faq />
      <hr className='border border-[#2B2F45] w-full'></hr>
      <Footer />
    </div>
  );
}
