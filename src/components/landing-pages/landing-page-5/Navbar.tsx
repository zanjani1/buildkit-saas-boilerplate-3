'use client';
import Link from 'next/link';
import { HiBars3 } from 'react-icons/hi2';
import LogoIcon from '@/assets/landing-page-5/icons/LogoIcon';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

const navbarRoutes = [
  { label: 'Features', url: '/#features' },
  { label: 'Product', url: '/#product' },
  { label: 'Pricing', url: '/#pricing' },
  { label: 'FAQ', url: '/#faq' },
];

export default function Navbar() {
  return (
    <div className='max-w-2xl mx-auto pt-5 transition-all'>
      <div
        className='w-full p-2 flex flex-col justify-between items-center border-[#222222] border rounded-full bg-[linear-gradient(180deg,#121212_0%,#202020_100%)] transition-all duration-300 ease-in-out
        '>
        <div className='w-full flex justify-between items-center '>
          <Link href='/'>
            <LogoIcon />
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
            className='hidden m ax-h-12 md:flex justify-center items-center gap-[10px] py-1.5 pb-2 leading-4 px-2.5 text-white rounded-full bg-[#262626] hover:bg-[#262626]/70'>
            Sign in
          </Link>
          <Sheet>
            <SheetTrigger className='block md:hidden'>
              <HiBars3 className='text-white size-7' />
            </SheetTrigger>
            <SheetContent
              side='top'
              className='bg-[linear-gradient(180deg,#121212_0%,#202020_100%)] border-none text-white'>
              <div className='space-y-6'>
                <ul className='gap-6'>
                  {navbarRoutes.map((item, index) => (
                    <li key={index} className='text-sm font-medium py-2'>
                      <Link href={item.url}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
