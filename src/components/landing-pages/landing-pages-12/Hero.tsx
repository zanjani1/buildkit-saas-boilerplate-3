import Navbar from './Navbar';
import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Button from './Button';
import hero from '@/assets/landing-page-12/images/hero.svg';

export default function Hero() {
  return (
    <div id='#product' className='flex flex-col items-center gap-10 md:px-0 px-4 pb-0'>
      <div className='flex bg-neutral-900 w-full text-white gap-3 py-2 px-3 justify-center items-center max-h-11 text-sm '>
        <span className='text-center max-w-[397px]'>
          Summer Sale: Get flat 10% off on any pack of podnotes.
        </span>
        <ArrowRightIcon />
      </div>
      <Navbar />
      <div className='flex flex-col gap-8 items-center text-center md:px-0 px-3'>
        <h1 className='font-semibold md:text-5xl text-3xl md:w-[599px] md:h-28 text-center tracking-tight'>
          Generate modular AI Apps with ease and pace
        </h1>
        <span className='text-zinc-950 text-sm md:text-base leading-8 text-center tracking-tight max-w-xl md:h-16'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of
          Effort and Use our robust Deployable code.
        </span>
        <div className='flex flex-col md:flex-row max-w-96 md:max-h-10 gap-4 justify-between items-center'>
          <Button pro={true} size='sm' rounded={true}>
            <span>Get Started</span>
            <ArrowRightIcon />
          </Button>
          <Button bg={true} size='sm' rounded={true}>
            <span>See our plans</span>
          </Button>
        </div>
      </div>

      <Image src={hero} width={1028} height={588} alt='hero' className=' rounded-xl h-auto' />
    </div>
  );
}
