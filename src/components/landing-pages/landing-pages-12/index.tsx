import FeaturedOn from './FeaturedOn';
import Hero from './Hero';
import Features2 from './Features2';
import Features from './Features';
import Pricing from './Pricing/Pricing';
import Footer from './Footer';
import Faq from './Faq';
import Subscribe from './Subscribe';
import Feedback from './Feedback';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function LandingPage12() {
  return (
    <div>
      <Hero />
      <FeaturedOn />
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
