// This component renders the main hero section of the landing page which is designed to grab the visitor's attention.
// It includes a navigation bar, a headline, a detailed subtext that explains the product briefly, and a call-to-action button.

import Image from 'next/image';
import HeroImage from '@/assets/landing-page-8/images/hero.png';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ArrowRightMd from '@/assets/landing-page-8/icons/ArrowRightMd';
import Navbar from './Navbar';

export default async function Hero() {
  return (
    <div className='bg-[#F6FFF8]'>
      <div className='max-w-7xl mx-auto'>
        <Navbar />

        <div className='flex max-w-4xl pt-16 flex-col gap-5 px-4 items-center justify-center mx-auto'>
          <h1 className='text-[#151515] max-w-xl font-medium leading-snug text-3xl sm:text-[44px] text-center'>
            Generate modular AI Apps with ease and pace
          </h1>
          <p className='text-gray-500 text-center leading-7 max-w-2xl'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>

          <Button className='flex text-sm gap-2.5 bg-lp9-primary rounded shadow-xl h-12 px-6 hover:bg-lp9-primary/90'>
            <Link href={'/login'}>Get started</Link>
            <ArrowRightMd />
          </Button>
        </div>
        <div className='w-full max-md:px-6 mt-16 md:mt-10'>
          <Image src={HeroImage} alt='hero' />
        </div>
      </div>
    </div>
  );
}
