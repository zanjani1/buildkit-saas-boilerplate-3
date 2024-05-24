// This component renders the main hero section of the landing page which is designed to grab the visitor's attention.
// It includes a navigation bar, a headline, a detailed subtext that explains the product briefly, and a call-to-action button.

import Navbar from '@/components/landing-pages/landing-page-5/Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import HeroImage from '@/assets/landing-page-5/images/hero.png';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import { Badge } from '@/components/ui/badge';
import HeroBG from '@/assets/landing-page-5/icons/HeroBG';

export default async function Hero() {
  return (
    <div className='relative isolate bg-[#090909]'>
      <span className='absolute w-full overflow-hidden max-w-[98vw] -z-50 top-20'>
        <HeroBG className='mx-auto' />
      </span>

      <div className='max-w-7xl mx-auto'>
        {/* Navbar component: Displays the top navigation menu. */}
        <Navbar />
        <div className='flex max-w-4xl mt-4 flex-col gap-5 py-5 md:py-14 px-4 items-center justify-center mx-auto'>
          <Badge className='bg-[#5d5d5d4f]'>
            Unlock Your Creative Spark! <ArrowRightIcon className='ml-2 pt-0.5' />{' '}
          </Badge>
          <h1 className='font-medium text-white text-3xl sm:text-6xl  text-center'>
            Generate AI Apps with ease
          </h1>
          <p className='text-lp5-secondary text-center mb-8 max-w-2xl font-medium'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
          <Link href={'/login'}>
            <Button variant={'ghost'} className='rounded-full  text-black bg-white px-9 py-6 font-semibold'>
              Get Started
            </Button>
          </Link>
          <div className='w-[250px] md:w-[600px] -z-50 rounded-full mx-auto pt-0 translate-y-20 bg-[#302f2f] blur-[50px] block h-20' />
        </div>
        <div className='w-full px-7'>
          <Image src={HeroImage} alt='hero' />
        </div>
      </div>
    </div>
  );
}
