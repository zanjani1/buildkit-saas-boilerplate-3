// This component serves as the navigation bar for the application, which appears across various pages.
// It dynamically adjusts to display different links based on the user's authentication status and screen size.
// The component uses both responsive and conditional rendering techniques for optimization across devices.

import Link from 'next/link';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HiBars3 } from 'react-icons/hi2';
import { Button } from '../ui/button';
import Logo from '../Logo';
import { getUser } from '@/utils/get-user';

const navbarRoutes = [
  { label: 'Waitlist', url: '/waitlist' },
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
        <Logo />

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
        <Link href={user ? '/admin-dashboard' : '/login'} className='hidden md:block'>
          <Button>{user ? 'Try Now' : 'Login'}</Button>
        </Link>

        <Sheet>
          <SheetTrigger className='block md:hidden'>
            <HiBars3 />
          </SheetTrigger>
          <SheetContent side='top' className=''>
            <div className='space-y-6'>
              <ul className='gap-6'>
                {navbarRoutes.map((item, index) => (
                  <li key={index} className='text-sm font-medium py-2'>
                    <Link href={item.url}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <Button className='rounded-lg w-full flex border border-[#51DCA3] green-btn-gradient'>
                Sign Up
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
