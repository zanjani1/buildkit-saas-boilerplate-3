// This is the Footer component of the landing page.

import Link from 'next/link';
import WhiteArrowIcon from '@/assets/landing-page-2/icons/WhiteArrowIcon';

// Array of objects representing footer navigation items
const footerItems = [
  {
    label: 'About',
    url: '#',
  },
  {
    label: 'Company',
    url: '#',
  },
  {
    label: 'Press',
    url: '#',
  },
  {
    label: 'Contact',
    url: '#',
  },
  {
    label: 'Product',
    url: '#',
  },
  {
    label: 'Careers',
    url: '#',
  },
  {
    label: 'Blog',
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
    label: 'Story',
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
    <footer className='bg-[#1C1C1C] text-white px-5'>
      <div className='max-w-6xl mx-auto py-16'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
          <p className='max-w-xl text-3xl md:text-4xl font-medium leading-tight md:leading-[52px]'>
            Get your AI apps built with blazing speed.
          </p>
          <Link href={'/login'}>
            <button className='h-12 flex items-center gap-2 rounded-xl font-semibold bg-gradient-to-t from-lp5-primary to-[#ff5100dc] px-8 py-3'>
              Get Started
              <WhiteArrowIcon />
            </button>
          </Link>
        </div>

        <hr className='opacity-30 my-16' />

        <div className='flex flex-col md:flex-row justify-between gap-10 mb-8'>
          <div className='flex flex-col gap-8'>
            <p className='text-3xl font-semibold text-white/70'>BuilderKit.ai</p>
            <p className='md:text-lg max-w-[290px] tracking-[-0.54px] leading-6 text-white/60'>
              lorem ipsum dolor sit amet lorem ipsum dolor sit maet lorem ipsum dlor sit amet.
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
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
