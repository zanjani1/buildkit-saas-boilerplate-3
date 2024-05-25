'use client';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import Button from '../landing-page-3/Button';
import Image from 'next/image';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
    label: 'Testimonials',
    url: '/#testimonials',
  },
  {
    label: 'FAQ',
    url: '/#faq',
  },
];

export default function Navbar() {
  return (
    <div className='flex justify-between md:px-16  px-4 md:h-20 items-center h-12'>
      <Link href='https://www.builderkit.ai'>
        <div className='flex items-center gap-2 w-fit'>
          <Image src='/lp3-logo.png' width={140} height={140} alt='logo' />
        </div>
      </Link>

      <div className='hidden md:flex gap-4'>
        {navOptions.map((opt) => {
          return (
            <Link href={opt.url} key={opt.label} className='px-1 py-2.5 text-base leading-6  hover:underline'>
              {opt.label}
            </Link>
          );
        })}
      </div>
      <div>
        <div className='hidden md:block'>
          <Button>
            <span className='leading-5'>Sign Up</span>
            <ArrowRightIcon />
          </Button>
        </div>

        <Sheet>
          <SheetTrigger className='block md:hidden'>
            <HiBars3 size={24} />
          </SheetTrigger>
          <SheetContent side='top' className=''>
            <div className='space-y-6'>
              <div className='flex flex-col gap-4'>
                {navOptions.map((item, index) => (
                  <div key={index} className='text-sm font-medium py-2'>
                    <SheetClose asChild>
                      <Link href={item.url}>{item.label}</Link>
                    </SheetClose>
                  </div>
                ))}
              </div>
              <Button>
                <span>Sign Up</span>
                <ArrowRightIcon />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
