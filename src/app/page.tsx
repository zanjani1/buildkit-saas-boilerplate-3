import Faq from '@/components/landing-page/Faq';
import Features from '@/components/landing-page/Features';
import Footer from '@/components/landing-page/Footer';
import Hero from '@/components/landing-page/Hero';
import Pricing from '@/components/landing-page/pricing/Pricing';
import Product from '@/components/landing-page/Product';
import { getUser } from '@/utils/get-user';

export default async function Home() {
  const user = await getUser();

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
