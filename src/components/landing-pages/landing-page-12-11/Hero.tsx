import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import Dashboard from '@/assets/landing-page-12/dashboard.png';
import { ArrowRightIcon } from '@radix-ui/react-icons';
export default function Hero() {
  return (
    <div className='bg-lp12 bg-no-repeat'>
      <div className='max-w-6xl mx-auto px-4 py-9 text-center'>
        <h1 className='text-4xl md:text-[56px] font-extrabold mb-4 md:leading-[62px] tracking-tight'>
          Generate modular AI Apps <br />
          with ease and pace
        </h1>

        <p className='text-zinc-600 mb-10 max-w-xl mx-auto font-medium leading-8 tracking-tight'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of
          Effort and Use our robust Deployable code.
        </p>

        <div className='flex justify-center items-center gap-4 mt-4'>
          <Link href='#pricing'>
            <Button variant='tertiary' size='lg'>
              <span>Get Started</span>
              <ArrowRightIcon className='size-3' />
            </Button>
          </Link>
        </div>

        <div className='pt-20'>
          <Image
            width={1028}
            height={588}
            src={Dashboard}
            alt='Dashboard Preview'
            className='rounded-3xl shadow-image mx-auto border border-[#F2F2F2] bg-contain'
          />
        </div>
      </div>
    </div>
  );
}
