// This component serves as the navigation bar for the application, which appears across various pages.
// It dynamically adjusts to display different links based on the user's authentication status and screen size.
// The component uses both responsive and conditional rendering techniques for optimization across devices.

import Link from 'next/link';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HiBars3 } from 'react-icons/hi2';
import { Button } from '../../ui/button';
import { getUser } from '@/utils/get-user';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import LogoIcon from '../../../assets/landing-page-2/icons/LogoIcon';

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
        <Link href='/'>
          <div className='flex items-center gap-2'>
            {/* Image component is commented out. If you want to display the logo image, uncomment the following line and ensure the image path is correct. */}
            <LogoIcon />
            <p className='text-2xl not-italic font-bold leading-6'>Builderkit.ai</p>
          </div>
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
        <Link href={user ? '/admin-dashboard' : '/login'} className='hidden md:block'>
          <Button className=' bg-gradient-to-t from-[#FF4F00] to-[#ff5100dc]'>
            {user ? 'Try Now' : 'Get Started'} <ArrowRightIcon />
          </Button>
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
