'use client';

import Link from 'next/link';
import { HiBars3 } from 'react-icons/hi2';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet';
import ArrowRightSm from '@/assets/landing-page-9/icons/ArrowRightSm';
import Image from 'next/image';
import { Button } from './Button';

const navbarRoutes = [
  { label: 'Features', url: '#features' },
  { label: 'Product', url: '#product' },
  { label: 'Pricing', url: '#pricing' },
  { label: 'FAQ', url: '#faq' },
];

export default function Navbar() {
  return (
    <div className='max-w-2xl mx-auto px-3 pt-4 bg-white'>
      <div
        className='w-full p-2 flex flex-col justify-between items-center border-[#EAEAEA] border rounded-2xl
        '>
        <div className='w-full flex justify-between items-center'>
          <Link href='https://www.builderkit.ai'>
            <div className='flex items-center gap-2 w-fit'>
              <Image src='/lp7-logo.svg' width={140} height={140} alt='logo' />
            </div>
          </Link>

          <ul className='hidden md:flex items-center gap-6'>
            {navbarRoutes.map((item, index) => (
              <li key={index} className='text-sm font-medium text-[#0C0E1E]'>
                <Link href={item.url} className='hover:underline'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button className='hidden md:flex gap-2 px-3 py-1.5'>
            <Link href={'/login'}>Sign up</Link>
            <ArrowRightSm />
          </Button>
          <Sheet>
            <SheetTrigger className='block md:hidden'>
              <HiBars3 size={24} />
            </SheetTrigger>
            <SheetContent side='top' className='border-none text-[#0C0E1E]'>
              <div className='space-y-6'>
                <div className='flex flex-col gap-4'>
                  {navbarRoutes.map((item, index) => (
                    <div key={index} className='text-sm font-medium py-2'>
                      <SheetClose asChild>
                        <Link href={item.url}>{item.label}</Link>
                      </SheetClose>
                    </div>
                  ))}
                </div>
                <Button className='flex w-full gap-2 px-3 py-1.5'>
                  <Link href='/login'>Sign up</Link>
                  <ArrowRightSm />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
