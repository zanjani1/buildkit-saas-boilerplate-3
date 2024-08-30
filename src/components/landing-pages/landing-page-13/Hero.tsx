import Button from './Button';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

export default function Hero() {
  return (
    <div className='space-y-8 mt-4'>
      <h1 className=' md:max-w-[738px] font-semibold text-3xl md:text-6xl text-center mx-auto tracking-tighter md:leading-[70px] bg-clip-text text-transparent bg-text-gradient'>
        Generate modular AI
        <br /> Apps with ease and pace
      </h1>

      <p className='text-zinc-500 text-sm md:text-base md:leading-8 text-center tracking-tight mb-2'>
        Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps
        <br />
        within days. Save Hours of Effort and Use our robust Deployable code.
      </p>

      <Link href='#pricing' className='block'>
        <Button variant='tertiary' size='default'>
          <span>Get Started</span>
          <HiArrowRight />
        </Button>
      </Link>
    </div>
  );
}
