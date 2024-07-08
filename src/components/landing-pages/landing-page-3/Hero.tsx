import Button from './Button';
import Navbar from './Navbar';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { hero } from '@/assets/landing-page-3/images';

export default function Hero() {
  return (
    <div className='flex flex-col items-center bg-gradient-hero-lp4'>
      <Navbar />

      <div className='flex flex-col md:max-w-6xl w-full md:my-24 my-12 max-w-80'>
        <div className='flex flex-col gap-4'>
          <div className='bg-primary-[#262626] px-4 text-sm gap-2 rounded-lg font-semibold max-w-60 py-2 flex items-center'>
            <span>Unlock Your Creative Spark</span>
            <ArrowRightIcon />
          </div>

          <div className='flex md:flex-row flex-col '>
            <div className='text-3xl md:text-6xl font-medium md:w-1/2 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#BABABA] '>
              Generate AI Apps with ease
            </div>
            <div className='flex flex-col gap-5 md:w-1/2'>
              <span className='text-stone-400 leading-7 md:text-base text-sm'>
                Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save
                Hours of Effort and Use our robust Deployable code.
              </span>
              <Button fill={true} size='lg'>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Image src={hero} width={800} height={500} alt='hero' className='max-w-80 md:max-w-6xl w-full' />
    </div>
  );
}
