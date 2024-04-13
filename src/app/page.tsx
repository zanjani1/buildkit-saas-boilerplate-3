import Faq from '@/components/landing-page/Faq';
import Features from '@/components/landing-page/Features';
import Footer from '@/components/landing-page/Footer';
import Hero from '@/components/landing-page/Hero';
import Navbar from '@/components/landing-page/Navbar';
import Pricing from '@/components/landing-page/Pricing';
import Product from '@/components/landing-page/Product';
import { getUserDetails } from '@/utils/supabase/server';

export default async function Home() {
  const user = await getUserDetails();

  return (
    <>
      <Hero user={user} />
      <Features />
      <Product />
      <Pricing />
      <Faq />
      <Footer user={user} />
    </>
  );
}
