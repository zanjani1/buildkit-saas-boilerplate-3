// This component renders the main hero section of the landing page which is designed to grab the visitor's attention.
// It includes a navigation bar, a headline, a detailed subtext that explains the product briefly, and a call-to-action button.

import Image from 'next/image';
import HeroImage from '@/assets/landing-page-5/images/hero.png';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Navbar from './Navbar';

export default async function Hero() {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF33] to-[#FFD6B033]'>
      <div className='container mx-auto px-4'>
        <Navbar />
        <div className='flex flex-col items-center justify-center py-16 md:py-24'>
          <div className='max-w-3xl text-center space-y-6'>
            <p className='text-4xl sm:text-6xl font-semibold text-[#262626] leading-tight tracking-tight'>
              Generate modular <span className='text-lp2-primary'>AI Apps with ease and pace</span>
            </p>
            <p className='text-lp2-secondary sm:text-lg leading-relaxed'>
              Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
              of Effort and Use our robust Deployable code.
            </p>
            <Link
              href='/login'
              className='inline-flex items-center gap-2.5 text-white rounded-lg bg-gradient-to-t from-lp2-primary to-lp2-primary/80 px-6 py-3'>
              Get Started <ArrowRightIcon className='mt-0.5' />
            </Link>
          </div>
        </div>
        <div className='w-full px-4 md:px-0'>
          <Image src={HeroImage} alt='hero' />
        </div>
      </div>
    </section>
  );
}
