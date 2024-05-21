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
    <div className='flex w-full justify-center bg-gradient-to-r from-[#52BDAA33] from-20% via-white  to-[#52BDAA33] to-80%'>
      <div className='flex flex-col w-full items-center mt-14 max-md:mt-8 '>
        <div className='flex flex-col gap-8 max-w-[625px] items-center py-2.5 text-center'>
          <span className=' text-6xl max-md:text-3xl font-semibold px-10 bg-gradient-to-b from-black from-60% to-[#929292] bg-clip-text text-transparent'>
            {heading}
          </span>
          <span className='text-stone-500 leading-7 px-2.5 max-md:text-sm text-balance'>{content}</span>
          <div className='flex gap-4 justify-center leading-5'>
            <Button>
              <span>Start Creating</span>
              <ArrowRightIcon></ArrowRightIcon>
            </Button>
            <button className='rounded-lg border flex gap-2 items-center px-6 max-md:px-3 max-md:py-2 shadow max-md:text-xs hover:opacity-80'>
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
          className=' w-full px-24 max-md:px-4 mt-14 max-md:mt-8'
        />
      </div>
    </div>
  );
}
