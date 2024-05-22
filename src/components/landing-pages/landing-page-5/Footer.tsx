// This is the Footer component of the landing page.

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';

// Array of objects representing footer navigation items
const footerItems = [
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
  {
    label: 'Blog',
    url: '/blog',
  },
  {
    label: 'Story',
    url: '/story',
  },
  {
    label: 'Company',
    url: '/company',
  },
  {
    label: 'Product',
    url: '/product',
  },
  {
    label: 'Careers',
    url: '/careers',
  },
  {
    label: 'Press',
    url: '/press',
  },
  {
    label: 'Terms',
    url: '/terms-of-service',
  },
  {
    label: 'Privacy',
    url: '/privacy-policy',
  },
];

export default async function Footer() {
  return (
    <footer className='bg-[#1C1C1C] text-white px-5'>
      <div className='max-w-6xl mx-auto px-4 py-16'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
          <p className='md:w-1/2 text-2xl font-medium leading-normal md:leading-normal'>
            Get your AI apps built with blazing speed.
          </p>
          <Link href={'/login'}>
            <Button className='bg-lp5-primary flex gap-2 px-4 py-6 rounded-full'>
              Get Started
              <ArrowRightIcon />
            </Button>
          </Link>
        </div>

        <hr className='opacity-10 my-16' />

        <div className='flex flex-col md:flex-row justify-between gap-10 mb-8'>
          <div className='md:w-1/4 flex flex-col gap-8'>
            <p className='text-2xl font-normal'>GEN AI</p>

            <p className='text-lg text-white/60'>
              lorem ipsum dolor sit amet lorem ipsum dolor sit maet lorem ipsum dlor sit amet.
            </p>
          </div>

          <div className='text-white/60 grid grid-rows-4 grid-cols-3 grid-flow-col gap-x-10 gap-y-6'>
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
