import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const options = [
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Company',
    url: '/company',
  },
  {
    label: 'Press',
    url: '/press',
  },
  {
    label: 'Contact',
    url: '/contact',
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
    label: 'Blog',
    url: '/blog',
  },
  {
    label: 'Press',
    url: '/press',
  },
  {
    label: 'Newsletter',
    url: '/newsletter',
  },
  {
    label: 'Story',
    url: '/story',
  },
  {
    label: 'More',
    url: '/more',
  },
  {
    label: 'More',
    url: '/more',
  },
];

export default function Footer() {
  const heading = 'Get your AI apps built with blazing speed.';
  const content = 'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. ';

  return (
    <div className=' mt-[208px] md:py-20 md:px-32 bg-[#062B1C] px-8 py-10'>
      <div className='flex flex-col md:gap-16 gap-8 '>
        <div className='flex justify-between flex-col gap-6 md:gap-0 md:flex-row'>
          <h1 className='font-medium md:text-4xl text-white max-w-[613px] text-2xl'>{heading}</h1>
          <Button className='bg-white hover:bg-white hover:opacity-80 rounded-full flex md:gap-2 gap-1  md:px-8 leading-6 px-2 text-black font-semibold md:text-base text-sm md:h-14 h-10'>
            <span>Get Started</span>
            <ArrowRightIcon></ArrowRightIcon>
          </Button>
        </div>

        <hr className='border opacity-25'></hr>

        <div className='flex justify-between flex-col gap-10 md:flex-row md:gap-0'>
          <div className='flex flex-col gap-8 max-w-[300px]'>
            <h1 className='font-medium text-2xl leading-6 text-stone-300'>BuilderKit.ai</h1>
            <span className='text-stone-400'>{content}</span>
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
