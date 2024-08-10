import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Button from './Button';
import hero from '@/assets/landing-page-11/images/hero.svg';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='flex flex-col gap-6 items-center mt-6 mb-10 md:mb-14'>
        <h1 className='w-11/12 md:w-1/2 font-medium md:text-5xl text-3xl text-center tracking-tighter md:leading-tight'>
          Generate modular AI Apps with ease and pace
        </h1>

        <p className='w-11/12 md:w-1/2 text-zinc-950/60 text-sm md:text-base leading-6 md:leading-8 text-center tracking-tight'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of
          Effort and Use our robust Deployable code.
        </p>

        <div className='flex justify-center items-center gap-4 mt-4'>
          <Link href='#pricing'>
            <Button variant='default' size='sm'>
              <span>Get Started</span>
              <ArrowRightIcon className='ml-2' />
            </Button>
          </Link>
          <Link href='#features'>
            <Button variant='secondary' size='sm' className='bg-[#F9F9F9] border border-[#EDEDED]'>
              See our plans
            </Button>
          </Link>
        </div>
      </div>

      <Image src={hero} width={1100} height={588} alt='hero' className='mx-auto rounded-xl' />
    </div>
  );
}
