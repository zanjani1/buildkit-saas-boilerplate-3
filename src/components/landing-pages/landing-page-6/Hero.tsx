import Navbar from './Navbar';
import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Button from './Button';
import hero from '@/assets/landing-page-6/images/hero.svg';

const heading = 'Generate AI Apps with ease';
const content =
  'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of Effort and Use our robust Deployable code.';

export default function Hero() {
  return (
    <div className='flex flex-col items-center md:gap-[88px] gap-16'>
      <Navbar />

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4 items-start md:max-w-2xl max-w-80 w-full'>
          <div className='border border-[#222222] px-4 items-center flex h-7 font-semibold text-sm rounded-full'>
            Unlock Your Creative Spark!
            <ArrowRightIcon className='ml-2' />
          </div>

          <div className='gap-4 flex flex-col'>
            <h1 className='font-semibold md:text-[40px] text-3xl'>{heading}</h1>
            <span className='text-stone-300 text-sm md:text-base'>{content}</span>
          </div>
        </div>
        <Button fill={false} size='md' rounded={true}>
          <span>Get Started</span>
          <ArrowRightIcon />
        </Button>
      </div>

      <Image src={hero} width={200} height={200} alt='hero' className='w-full md:px-[84.5px] px-5' />
    </div>
  );
}
