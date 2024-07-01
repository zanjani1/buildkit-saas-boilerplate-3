import Hero from './Hero';
import Features from './Features';
import Features2 from './Features2';
import Pricing from './Pricing';
import Faq from './FAQ';
import Footer from './Footer';

export default async function LandingPage4() {
  return (
    <div className='bg-black text-white '>
      <Hero />
      <Features />
      <Features2 />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
