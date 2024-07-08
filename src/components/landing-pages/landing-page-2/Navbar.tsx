'use client';

import Link from 'next/link';
import { HiBars3 } from 'react-icons/hi2';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet';
import Image from 'next/image';

const navbarRoutes = [
  { label: 'Features', url: '#features' },
  { label: 'Product', url: '#product' },
  { label: 'Pricing', url: '#pricing' },
  { label: 'FAQ', url: '#faq' },
];

export default function Navbar() {
  return (
    <div className='max-w-2xl mx-auto px-3 pt-3'>
      <div
        className='w-full p-2 flex flex-col justify-between items-center border-[#222222] border rounded-full bg-gradient-to-t from-[#121212] to-[#202020]
        '>
        <div className='w-full flex justify-between items-center '>
          <Link href='https://www.builderkit.ai'>
            <div className='flex items-center gap-2 w-fit'>
              <Image src='/lp5-logo.svg' width={40} height={40} alt='logo' />
            </div>
          </Link>

          <ul className='hidden md:flex items-center gap-6'>
            {navbarRoutes.map((item, index) => (
              <li key={index} className='text-sm font-medium text-white'>
                <Link href={item.url} className='hover:underline'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={'/login'}
            className='hidden text-center rounded-[24px]  h-8 md:flex pb-0.5 items-center text-sm px-2.5 text-white bg-[#262626] hover:bg-[#262626]/70'>
            Sign in
          </Link>

          <Sheet>
            <SheetTrigger className='block md:hidden'>
              <HiBars3 size={24} className='text-white' />
            </SheetTrigger>
            <SheetContent
              side='top'
              className='bg-[linear-gradient(180deg,#121212_0%,#202020_100%)] border-none text-white'>
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
                <Link
                  href={'/login'}
                  className='w-full h-10 flex justify-center items-center mt-5 text-sm text-white rounded-full bg-[#262626]'>
                  Sign in
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
