import Link from 'next/link';
import { Button } from '@/components/landing-pages/landing-page-7/Button';
import ArrowRightMd from '@/assets/landing-page-7/icons/ArrowRightMd';
import Image from 'next/image';

const all = [
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Company',
    link: '/company',
  },
  {
    label: 'Careers',
    link: '/careers',
  },
  {
    label: 'Newsletter',
    link: '/newsletter',
  },
];

const info = [
  {
    label: 'Features',
    link: '/features',
  },
  {
    label: 'Product',
    link: '/product',
  },
  {
    label: 'Pricing',
    link: '/pricing',
  },
  {
    label: 'FAQs',
    link: '/faqs',
  },
];

export default async function Footer() {
  return (
    <div className='flex md:justify-center bg-[#FCFCFC] border border-t-[#DEDEDE] p-5'>
      <div className='flex flex-col md:gap-32 gap-24 md:py-12 md:max-w-5xl w-full'>
        <div className='flex md:flex-row flex-col justify-between md:gap-20 gap-10'>
          <div className='flex flex-col md:gap-6 gap-4 md:w-2/5'>
            <Link href='https://www.builderkit.ai'>
              <div className='flex items-center gap-2 w-fit'>
                <Image src='/lp7-logo.svg' width={140} height={140} alt='logo' />
              </div>
            </Link>

            <span className='text-lp7-secondary font-medium leading-7 lg:min-w-[400px]'>
              Unleash Your Creative Potential by Turning What You Consume into Engaging Content Ideas
            </span>

            <Button className='flex shadow-xl w-fit h-10'>
              Get Started
              <ArrowRightMd />
            </Button>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 w-full justify-between max-w-xl md:grid-cols-2 xl:grid-cols-3 gap-10'>
            <div className='flex flex-col gap-4 w-1/3'>
              <p className='text-xs text-stone-400'>ALL</p>
              <div className='flex flex-col gap-3 '>
                {all.map((item) => (
                  <Link href={item.link} key={item.label}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-4 w-1/3'>
              <p className='text-xs text-stone-400'>INFO</p>
              <div className='flex flex-col gap-3'>
                {info.map((item) => (
                  <Link href={item.link} key={item.label}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-4 w-1/3'>
              <p className='text-xs text-stone-400'>CONTACTS</p>
              <Link href='mailto:vatsal1811@gmail.com' className='text-lp7-secondary'>
                vatsal1811@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='text-stone-600 text-xs'>© 2024 — 1811 Labs</p>
        </div>
      </div>
    </div>
  );
}
