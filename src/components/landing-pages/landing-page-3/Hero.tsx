import Image from 'next/image';
import HeroImage from '@/assets/landing-page-3/images/hero.svg';
import { ArrowRightIcon, VideoIcon } from '@radix-ui/react-icons';
import Button from '../landing-page-3/Button';

export default async function Hero() {
  const heading = 'Generate AI Apps with Ease';
  const content =
    "Let's make your work more organize and easily using the Dashboard with many of the latest features in managing work every day.";

  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className='flex w-full justify-center '>
      <div className='flex flex-col w-full items-center md:mt-14 mt-8 '>
        <div className='flex flex-col gap-8 max-w-[625px] items-center py-2.5 text-center'>
          <span className='md:text-6xl text-3xl font-semibold px-10 bg-gradient-to-b from-black from-60% to-[#929292] bg-clip-text text-transparent'>
            {heading}
          </span>
          <span className='text-stone-500 leading-7 px-2.5 text-sm md:text-base text-balance'>{content}</span>
          <div className='flex gap-4 justify-center leading-5'>
            <Button>
              <span>Start Creating</span>
              <ArrowRightIcon></ArrowRightIcon>
            </Button>
            <button className='rounded-lg border flex gap-2 items-center md:px-6 px-3 py-2 shadow text-xs hover:opacity-80 md:text-base bg-white'>
              <span>Watch Demo</span>
              <VideoIcon></VideoIcon>
            </button>
          </div>
        </div>
        <Image
          src={HeroImage}
          width={500}
          height={500}
          alt='hero'
          className=' w-full md:px-24 px-4 md:mt-14 mt-8'
        />
      </div>
    </div>
  );
}
