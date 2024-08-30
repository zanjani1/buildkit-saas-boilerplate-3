import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import Dashboard from '@/assets/landing-page-12/dashboard.png';
import { BsArrowRightShort } from 'react-icons/bs';

export default function Hero() {
  return (
    <div className='bg-lp12 bg-no-repeat'>
      <div className='max-w-2xl mx-auto flex flex-col items-center text-center px-4 pt-14 md:px-0 mb-20'>
        <h1 className='text-3xl md:text-[56px] font-extrabold md:leading-[62px] tracking-tight mb-4'>
          Generate modular AI Apps with ease and pace
        </h1>

        <p className='w-10/12 text-zinc-600 leading-7 md:leading-8 tracking-tight mb-10'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of
          Effort and Use our robust Deployable code.
        </p>

        <Link href='#pricing'>
          <Button variant='tertiary' size='lg'>
            <span>Get Started</span>
            <BsArrowRightShort className='size-5' />
          </Button>
        </Link>
      </div>

      <Image
        width={1044}
        height={588}
        src={Dashboard}
        alt='Dashboard Preview'
        className='rounded-3xl shadow-[0px_0px_16.6px_16px_#e1e1e140] mx-auto border border-[#F2F2F2]'
      />
    </div>
  );
}
