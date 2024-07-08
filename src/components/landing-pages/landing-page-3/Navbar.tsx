'use client';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HiBars3 } from 'react-icons/hi2';
import Link from 'next/link';
import Button from './Button';

const navOptions = [
  { label: 'Features', url: '#features' },
  { label: 'Product', url: '#product' },
  { label: 'Pricing', url: '#pricing' },
  { label: 'FAQ', url: '#faq' },
];

export default function Navbar() {
  return (
    <div className='flex justify-between md:h-12 md:max-w-6xl mt-4 items-center w-full max-w-80'>
      <Link href='https://www.builderkit.ai'>
        <div className='flex items-center gap-2 w-fit'>
          <Image src='/lp4-logo.svg' width={40} height={40} alt='logo' />
        </div>
      </Link>

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
            <HiBars3 size={24} />
          </SheetTrigger>
          <SheetContent side='top' className='bg-black text-white border-black'>
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
