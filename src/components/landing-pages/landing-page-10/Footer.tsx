import Image from 'next/image';
import Button from './Button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const All = [
  {
    label: 'About',
    link: '',
  },
  {
    label: 'Company',
    link: '',
  },
  {
    label: 'Careers',
    link: '',
  },
  {
    label: 'Newsletter',
    link: '',
  },
];

const Info = [
  {
    label: 'Features',
    link: '',
  },
  {
    label: 'Product',
    link: '',
  },
  {
    label: 'Pricing',
    link: '',
  },
  {
    label: 'FAQs',
    link: '',
  },
];

export default async function Footer() {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col md:gap-32 gap-24 md:py-20 py-10 md:max-w-5xl max-w-80 '>
        <div className='flex md:flex-row flex-col justify-between md:gap-20 gap-10'>
          <div className='flex flex-col md:gap-6 gap-4 md:w-2/5'>
            <Image src='/lp6-logo.svg' alt='logo' width={100} height={100} className='w-32 h-8' />

            <span className='text-[#A8A8A8] text-start'>
              Unleash Your Creative Potential by Turning What You Consume into Engaging Content Ideas
            </span>

            <Button fill={false} size='md' rounded={true}>
              Get Started
              <ArrowRightIcon />
            </Button>
          </div>

          <div className='flex gap-6 md:flex-1 flex-col  md:flex-row'>
            <div className='flex flex-col gap-4 w-1/3'>
              <p className='text-xs'>ALL</p>
              <div className='flex flex-col gap-3 text-[#A8A8A8]'>
                {All.map((item) => {
                  return (
                    <Link href={item.link} key={item.label}>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className='flex flex-col gap-4 w-1/3'>
              <p className='text-xs'>INFO</p>
              <div className='flex flex-col gap-3 text-stone-400'>
                {Info.map((item) => {
                  return (
                    <Link href={item.link} key={item.label}>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className='flex flex-col gap-4 w-1/3'>
              <p className='text-xs'>CONTACTS</p>
              <Link href='mailto:vatsal1811@gmail.com' className='text-stone-400'>
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
