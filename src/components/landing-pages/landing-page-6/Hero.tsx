import Image from 'next/image';
import HeroImage from '@/assets/landing-page-6/images/hero.svg';
import { ArrowRightIcon, VideoIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import LP3Button from './Button';

export default async function Hero() {
  return (
    <div className='flex w-full justify-center'>
      <div className='flex flex-col w-full items-center md:mt-14 mt-8 '>
        <div className='flex flex-col gap-8 max-w-[625px] items-center text-center'>
          <p className='md:text-6xl text-3xl font-semibold px-10 bg-gradient-to-b from-black from-60% to-[#929292] bg-clip-text text-transparent'>
            Generate AI Apps with Ease
          </p>
          <p className='text-stone-500 leading-7 px-2.5 text-sm md:text-base text-balance'>
            Let's make your work more organize and easily using the Dashboard with many of the latest features
            in managing work every day.
          </p>

          <div className='flex gap-4 justify-center leading-5'>
            <LP3Button>
              <span>Start Creating</span>
              <ArrowRightIcon />
            </LP3Button>
            <Button variant='outline' className='h-8 md:h-12 gap-2 md:px-7 rounded-lg'>
              <span>Watch Demo</span>
              <VideoIcon />
            </Button>
          </div>
        </div>

        <Image
          src={HeroImage}
          width={500}
          height={500}
          alt='hero'
          className='w-full md:px-24 px-4 mt-8 md:mt-20'
        />
      </div>
    </div>
  );
}
