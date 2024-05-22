// This component renders the main hero section of the landing page which is designed to grab the visitor's attention.
// It includes a navigation bar, a headline, a detailed subtext that explains the product briefly, and a call-to-action button.

import Navbar from '@/components/landing-pages/landing-page-2/Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import HeroImage from '@/assets/landing-page-2/images/hero.png';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export default async function Hero() {
  return (
    <div className=''>
      <div className='max-w-7xl mx-auto '>
        {/* Navbar component: Displays the top navigation menu. */}
        <Navbar />

        <div className='flex  flex-col gap-10 py-5 md:py-14 px-4 items-center justify-center mx-auto max-w-4xl'>
          <h1 className='font-semibold text-6xl max-sm:text-3xl text-center'>
            Generate modular <span className='text-lp2-primary'>AI Apps with ease and pace</span>{' '}
          </h1>
          <p className='text-lp2-secondary text-center font-inter text-lg font-medium leading-6'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
          <Link href={'/login'} className='hidden md:block'>
            <Button className=' bg-gradient-to-t from-lp2-primary to-lp2-primary/80 flex gap-2 px-3 py-2'>
              Get Started
              <ArrowRightIcon />
            </Button>
          </Link>
        </div>
        <div className='w-full'>
          <Image src={HeroImage} alt='hero' />
        </div>
      </div>
    </div>
  );
}
