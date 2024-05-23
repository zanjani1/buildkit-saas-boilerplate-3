// This component serves as the navigation bar for the application, which appears across various pages.
// It dynamically adjusts to display different links based on the user's authentication status and screen size.
// The component uses both responsive and conditional rendering techniques for optimization across devices.

import Link from 'next/link';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HiBars3 } from 'react-icons/hi2';
import { Button } from '@/components/ui/button';
import { getUser } from '@/utils/get-user';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import LogoIcon from '@/assets/landing-page-2/icons/LogoIcon';

const navbarRoutes = [
  { label: 'Features', url: '/#features' },
  { label: 'Product', url: '/#product' },
  { label: 'Pricing', url: '/#pricing' },
  { label: 'FAQ', url: '/#faq' },
];

export default async function Navbar() {
  // Fetch user information to determine authentication state.
  const user = await getUser();

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='w-full flex justify-between items-center p-4 mb-5'>
        <Link href='/'>
          <LogoIcon />
        </Link>

        <ul className='hidden md:flex items-center gap-6'>
          {navbarRoutes.map((item, index) => (
            <li key={index} className='text-sm font-medium'>
              <Link href={item.url} className='hover:underline'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Conditional button that changes based on user status. */}
        <Link
          href={user ? '/admin-dashboard' : '/login'}
          className='hidden md:flex justify-center items-center text-white rounded-lg  bg-gradient-to-t px-7 py-2 from-lp2-primary to-lp2-primary/70'>
          Get Started <ArrowRightIcon className='ml-2 mt-0.5' />
        </Link>

        <Sheet>
          <SheetTrigger className='block md:hidden -mr-3 mb-3'>
            <HiBars3 className='size-6' />
          </SheetTrigger>
          <SheetContent side='top' className='px-5'>
            <div className='space-y-6'>
              <ul className='gap-6'>
                {navbarRoutes.map((item, index) => (
                  <li key={index} className='text-sm font-medium py-2'>
                    <Link href={item.url}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <Button className='rounded-lg px-6 py-3   w-full flex border bg-gradient-to-t from-lp2-primary to-lp2-primary/80'>
                Sign Up
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
