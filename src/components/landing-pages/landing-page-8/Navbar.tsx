// This component serves as the navigation bar for the application, which appears across various pages.
// It dynamically adjusts to display different links based on the user's authentication status and screen size.
// The component uses both responsive and conditional rendering techniques for optimization across devices.

import Link from 'next/link';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HiBars3 } from 'react-icons/hi2';
import { getUser } from '@/utils/get-user';
import ArrowRightMd from '@/assets/landing-page-8/icons/ArrowRightMd';
import Image from 'next/image';

const navbarRoutes = [
  { label: 'Features', url: '#features' },
  { label: 'Product', url: '#product' },
  { label: 'Pricing', url: '#pricing' },
  { label: 'FAQ', url: '#faq' },
];

export default async function Navbar() {
  // Fetch user information to determine authentication state.
  const user = await getUser();

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='w-full flex justify-between items-center p-4'>
        <Link href='https://www.builderkit.ai'>
          <div className='flex items-center gap-2 w-fit'>
            <Image src='/lp9-logo.svg' width={140} height={140} alt='logo' />
          </div>
        </Link>

        <ul className='hidden md:flex items-center gap-14'>
          {navbarRoutes.map((item, index) => (
            <li key={index} className='font-medium'>
              <Link href={item.url} className='hover:underline text-[#151515] text-sm'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={user ? '/admin-dashboard' : '/login'}
          className='hidden md:flex gap-2.5 text-sm justify-center items-center text-white rounded-sm px-6 h-12 bg-lp9-primary'>
          Sign in
          <ArrowRightMd />
        </Link>

        <Sheet>
          <SheetTrigger className='block md:hidden -mr-3 mb-3'>
            <HiBars3 size={24} />
          </SheetTrigger>
          <SheetContent side='top' className='px-5'>
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
                href={user ? '/admin-dashboard' : '/login'}
                className='rounded-sm px-6 h-12 text-white gap-2.5 text-sm items-center justify-center w-full flex bg-lp9-primary'>
                Sign Up
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
