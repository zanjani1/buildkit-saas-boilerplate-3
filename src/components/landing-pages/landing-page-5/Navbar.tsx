// This component serves as the navigation bar for the application, which appears across various pages.
// It dynamically adjusts to display different links based on the user's authentication status and screen size.
// The component uses both responsive and conditional rendering techniques for optimization across devices.

import Link from 'next/link';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HiBars3 } from 'react-icons/hi2';
import { getUser } from '@/utils/get-user';
import { ArrowRightIcon } from '@radix-ui/react-icons';
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
    <div className='max-w-7xl mx-auto bg-white'>
      <div className='w-full flex justify-between items-center p-4'>
        <Link href='https://www.builderkit.ai'>
          <div className='flex items-center gap-2 w-fit'>
            <Image src='/lp2-logo.svg' width={140} height={140} alt='logo' />
          </div>
        </Link>

        <ul className='hidden md:flex items-center gap-10'>
          {navbarRoutes.map((item, index) => (
            <li key={index} className='text-sm font-medium '>
              <Link href={item.url} className='hover:underline text-[#4B5563]'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Conditional button that changes based on user status. */}
        <Link
          href={user ? '/admin-dashboard' : '/login'}
          className='hidden md:flex justify-center items-center text-white rounded-lg  bg-gradient-to-t h-12 px-6 from-lp2-primary to-lp2-primary/70'>
          Get Started <ArrowRightIcon className='ml-2' />
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
                className='rounded-lg px-6 py-3 text-white justify-center w-full flex border bg-gradient-to-t from-lp2-primary to-lp2-primary/80'>
                Sign Up
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
