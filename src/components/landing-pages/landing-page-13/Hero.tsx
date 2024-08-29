import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Button from './Button';
import hero from '@/assets/landing-page-13/images/hero.png';
import Link from 'next/link';
import FeaturedOn from './FeaturedOn';
export default function Hero() {
  return (
    <div className='max-w-6xl mx-auto py-16 px-4 '>
      <div className='flex flex-col gap-8 items-center mt-4'>
        <h1 className=' md:max-w-[738px] font-semibold md:text-[64px] text-3xl text-center tracking-tighter md:leading-[70px] bg-clip-text text-transparent bg-text-gradient'>
          Generate modular AI
          <br /> Apps with ease and pace
        </h1>

        <p className='w-11/12 md:w-[552px] text-zinc-500 font-medium text-sm md:text-base md:leading-8 text-center tracking-tight'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of
          Effort and Use our robust Deployable code.
        </p>
        <Link href='#pricing'>
          <Button variant='tertiary' size='start' className='mt-2'>
            <span>Get Started</span>
            <ArrowRightIcon />
          </Button>
        </Link>
      </div>

      <FeaturedOn />

      <Image src={hero} width={1100} height={588} alt='hero' className='mx-auto rounded-xl' />
    </div>
  );
}
