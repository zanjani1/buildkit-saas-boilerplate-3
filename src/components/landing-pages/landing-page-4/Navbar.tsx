'use client';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Button from '../landing-page-4/Button';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HiBars3 } from 'react-icons/hi2';
import Link from 'next/link';

const navOptions = [
  {
    label: 'Features',
    url: '/#features',
  },
  {
    label: 'Product',
    url: '/#product',
  },
  {
    label: 'Pricing',
    url: '/#pricing',
  },
  {
    label: 'FAQ',
    url: '/#faq',
  },
];

export default function Navbar() {
  return (
    <div className='flex justify-between md:h-12 md:max-w-6xl mt-4 items-center w-full max-w-80'>
      <Image src='/lp4-logo.svg' width={100} height={100} alt='logo' className='size-8' />
      <div className='md:flex hidden gap-4'>
        {navOptions.map((opt) => {
          return (
            <Link href={opt.url} key={opt.label} className='px-1 py-2.5 text-base leading-6  hover:underline'>
              {opt.label}
            </Link>
          );
        })}
      </div>
      <div className='flex gap-2'>
        <div className='md:block hidden'>
          <Button fill={false} size='sm'>
            <span className='leading-5'>Sign in</span>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger className='block md:hidden'>
            <HiBars3 />
          </SheetTrigger>
          <SheetContent side='top' className='bg-black text-white border-black'>
            <div className='space-y-6'>
              <ul className='gap-6'>
                {navOptions.map((item, index) => (
                  <li key={index} className='text-sm font-medium py-2'>
                    <Link href={item.url} className=' scroll-smooth'>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button fill={false} size='sm'>
                <span>Sign in</span>
                <ArrowRightIcon />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
