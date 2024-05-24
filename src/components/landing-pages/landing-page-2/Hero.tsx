// This component renders the main hero section of the landing page which is designed to grab the visitor's attention.
// It includes a navigation bar, a headline, a detailed subtext that explains the product briefly, and a call-to-action button.

import Navbar from '@/components/landing-pages/landing-page-2/Navbar';
import Image from 'next/image';
import HeroImage from '@/assets/landing-page-2/images/hero.png';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export default async function Hero() {
  return (
    <div className='max-w-7xl mx-auto'>
      {/*Gradient Background*/}
      <div className='relative w-full'>
        <div className='absolute inset-0 flex justify-between'>
          <div className='rounded-full bg-[#FFD6B0] blur-[500px] size-[634px] -translate-x-1/2 -z-10'></div>
          <div className='rounded-full bg-[#FFD6B0] blur-[500px] size-[634px] -translate-x-1/4 -z-10'></div>
        </div>
      </div>

      <div>
        {/* Navbar component: Displays the top navigation menu. */}
        <Navbar />

        <div className='flex flex-col gap-6 sm:gap-8 py-8 md:py-14 px-4 items-center justify-center mx-auto max-w-3xl'>
          <h1 className='font-semibold leading-[67px] text-6xl max-sm:text-4xl text-center'>
            Generate modular <span className='text-lp2-primary'>AI Apps with ease and pace</span>{' '}
          </h1>

          <p className='text-lp2-secondary text-center sm:text-lg leading-7'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
          <Link
            href='/login'
            className='flex justify-center items-center text-white rounded-lg bg-gradient-to-t px-6 py-3 from-lp2-primary to-lp2-primary/80 max-sm:mb-8'>
            Get Started <ArrowRightIcon className='ml-2 mt-0.5' />
          </Link>
        </div>
        <div className='w-full max-md:px-7 px-3 md:mt-5'>
          <Image src={HeroImage} alt='hero' />
        </div>
      </div>
    </div>
  );
}
