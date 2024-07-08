import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const options = [
  {
    label: 'About',
    url: '',
  },
  {
    label: 'Company',
    url: '',
  },
  {
    label: 'Press',
    url: '',
  },
  {
    label: 'Contact',
    url: '',
  },
  {
    label: 'Product',
    url: '',
  },
  {
    label: 'Careers',
    url: '',
  },
  {
    label: 'Blog',
    url: '',
  },
  {
    label: 'Press',
    url: '',
  },
  {
    label: 'Newsletter',
    url: '',
  },
  {
    label: 'Story',
    url: '',
  },
  {
    label: 'More',
    url: '',
  },
  {
    label: 'More',
    url: '',
  },
];

export default function Footer() {
  return (
    <div className=' mt-20 md:py-20 md:px-32 bg-[#062B1C] px-8 py-10'>
      <div className='flex flex-col md:gap-16 gap-8 '>
        <div className='flex justify-between flex-col gap-6 md:gap-0 md:flex-row'>
          <p className='font-medium md:text-4xl text-white max-w-[613px] text-2xl'>
            Get your AI apps built with blazing speed.
          </p>
          <Button className='h-10 md:h-14 bg-white hover:bg-white/95 text-black text-base px-2 md:px-8 font-semibold rounded-full gap-2'>
            <span>Get Started</span>
            <ArrowRightIcon />
          </Button>
        </div>

        <hr className='border opacity-25'></hr>

        <div className='flex justify-between flex-col gap-10 md:flex-row md:gap-0'>
          <div className='flex flex-col gap-8 max-w-[300px]'>
            <p className='font-medium text-2xl leading-6 text-stone-300'>BuilderKit.ai</p>
            <p className='text-stone-400'>
              Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days.
            </p>
            <p className='font-medium text-white'>All rights reserved</p>
          </div>

          <div className='grid grid-cols-3 md:gap-x-32 gap-y-4 gap-x-10 text-stone-400 text-sm font-medium '>
            {options.map((option, index) => (
              <Link href={option.url} className='text-start hover:underline' key={index}>
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
