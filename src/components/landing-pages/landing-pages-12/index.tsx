import FeaturedOn from './FeaturedOn';
import Hero from './Hero';
import Features2 from './Features2';
// import Features from './Features';
import Pricing from './Pricing/Pricing';
import Footer from './Footer';
import Faq from './Faq';
import Subscribe from './Subscribe';
import Feedback from './Feedback';
import Headers from './Header';
import Navbar from './Navbar';
export default function LandingPage12() {
  return (
    <div>
      <Headers />
      <div className='flex flex-col justify-center items-center md:sticky md:top-0 md:z-50'>
        <Navbar />
      </div>
      <Hero />
      <FeaturedOn />
      {/* <Features /> */}
      <Features2 />
      <Feedback />
      <Pricing />
      <Subscribe />
      <Faq />
      <Footer />
    </div>
  );
}
