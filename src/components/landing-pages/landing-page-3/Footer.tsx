import Button from './Button';
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
    <div className='md:px-32 px-8 md:py-56 py-24'>
      <div className='flex flex-col md:gap-16 gap-8 '>
        <div className='flex justify-between flex-col md:flex-row gap-6 md:gap-0'>
          <h1 className='font-medium md:text-4xl text-white max-w-[613px] text-2xl'>
            Get your AI apps built with blazing speed.
          </h1>
          <Button fill={true} size='md'>
            <span>Get Started</span>
            <ArrowRightIcon className='font-bolder' />
          </Button>
        </div>

        <hr className='border opacity-25'></hr>

        <div className='flex justify-between flex-col md:flex-row gap-10 md:gap-0'>
          <div className='flex flex-col gap-8 max-w-[300px]'>
            <h1 className='font-medium text-2xl leading-6 text-stone-300'>BuilderKit.ai</h1>
            <span className='text-stone-400'>
              Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days.
            </span>
            <p className='font-medium text-white'>All rights reserved</p>
          </div>

          <div className='grid grid-cols-3 md:gap-x-[140px] gap-y-4 gap-x-10 text-stone-400 text-sm font-medium '>
            {options.map((option, index) => {
              return (
                <Link href={option.url} className='text-start hover:underline' key={index}>
                  {option.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
