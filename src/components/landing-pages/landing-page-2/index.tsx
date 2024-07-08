import Hero from './Hero';
import Features from './Features';
import Faq from './Faq';
import Product from './Product';
import Pricing from './pricing/Pricing';
import Footer from './Footer';

export default async function LandingPage2() {
  return (
    <>
      <main className='bg-black'>
        <Hero />
        <Features />
        <Product />
        <Pricing />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
