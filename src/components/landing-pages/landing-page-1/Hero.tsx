// This component renders the main hero section of the landing page which is designed to grab the visitor's attention.
// It includes a navigation bar, a headline, a detailed subtext that explains the product briefly, and a call-to-action button.

import Navbar from './Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import HeroImage from '@/assets/landing-page-1/images/hero.png';
import Link from 'next/link';

export default async function Hero() {
  return (
    <div className='bg-waves bg-[#EDF6FF]'>
      <div className='max-w-6xl mx-auto'>
        {/* Navbar component: Displays the top navigation menu. */}
        <Navbar />

        <div className='flex flex-col md:flex-row gap-10 py-5 md:py-14 px-4'>
          <div className='space-y-6 w-full md:w-1/2'>
            <p className='text-primary text-xs md:text-sm font-bold leading-normal tracking-widest uppercase'>
              Let's ship your Apps faster
            </p>
            <p className='text-5xl md:text-6xl'>Ship AI apps like a pro.</p>
            <p className='text-lg md:text-xl text-secondary md:leading-relaxed'>
              With lots of unique blocks, you can easily build a page without coding.
              <br className='block md:hidden' /> Build your next AI website within few minutes.
            </p>
            <Link href='/admin-dashboard' className='block'>
              <Button className='px-8 py-5'>Get Started</Button>
            </Link>
          </div>
          <div className='w-full md:w-1/2 flex items-center justify-center'>
            <Image src={HeroImage} width={500} height={500} alt='hero' />
          </div>
        </div>
      </div>
    </div>
  );
}
