// This is the Footer component of the landing page.

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ArrowRightSm from '@/assets/landing-page-8/icons/ArrowRightSm';

// Array of objects representing footer navigation items
const footerItems = [
  {
    label: 'About',
    url: '#',
  },
  {
    label: 'Contact',
    url: '#',
  },
  {
    label: 'Blog',
    url: '#',
  },
  {
    label: 'Story',
    url: '#',
  },
  {
    label: 'Company',
    url: '#',
  },
  {
    label: 'Product',
    url: '#',
  },
  {
    label: 'Press',
    url: '#',
  },
  {
    label: 'More',
    url: '#',
  },
  {
    label: 'Press',
    url: '#',
  },
  {
    label: 'Careers',
    url: '#',
  },
  {
    label: 'News letters',
    url: '#',
  },
  {
    label: 'More',
    url: '#',
  },
];

export default async function Footer() {
  return (
    <footer className='bg-[#062616] text-white px-5'>
      <div className='max-w-6xl mx-auto py-12 md:py-16'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
          <p className='md:w-3/4 text-3xl md:text-4xl font-medium'>
            Get your AI apps built with blazing speed.
          </p>
          <Link href={'/login'}>
            <Button variant={'ghost'} className='flex gap-2 px-4 py-6 rounded bg-white text-black'>
              Get Started
              <ArrowRightSm />
            </Button>
          </Link>
        </div>

        <hr className='opacity-10 my-16' />

        <div className='flex flex-col md:flex-row justify-between gap-10 max-md:mb-8'>
          <div className='flex flex-col gap-10'>
            <p className='text-2xl font-medium text-white/70'>BuilderKit.ai</p>
            <p className='max-w-sm tracking-[-0.54px] leading-6 text-white/60'>
              Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days.
            </p>
          </div>

          <div className='text-white/60 grid grid-rows-4 grid-cols-3 grid-flow-col lg:gap-x-24 gap-y-6'>
            {footerItems.map((item, index) => (
              <Link key={index} href={item.url} className='hover:underline'>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <p className='font-medium'>All rights reserved.</p>
      </div>
    </footer>
  );
}
