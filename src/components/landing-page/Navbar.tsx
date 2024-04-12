import Link from 'next/link';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HiBars3 } from 'react-icons/hi2';
import { Button } from '../ui/button';
import { User } from '@supabase/supabase-js';
import Logo from '../Logo';

const navbarRoutes = [
  { label: 'Features', url: '/#features' },
  { label: 'Product', url: '/#product' },
  { label: 'Pricing', url: '/#pricing' },
  { label: 'FAQ', url: '/#faq' },
];

export default async function Navbar({ user }: { user: User | null }) {
  return (
    <div className='w-full flex justify-between items-center p-4 mb-10'>
      <Logo />

      <ul className='hidden md:flex items-center gap-6'>
        {navbarRoutes.map((item, index) => (
          <li key={index} className='text-sm cursor-pointer font-medium leading-6'>
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <Link href={user ? '/dashboard' : '/login'}>
        <Button>{user ? 'Try Now' : 'Login'}</Button>
      </Link>

      <Sheet>
        <SheetTrigger className='block md:hidden'>
          <HiBars3 />
        </SheetTrigger>
        <SheetContent className=''>
          <div className='space-y-6'>
            <ul className='gap-6'>
              {navbarRoutes.map((item, index) => (
                <li key={index} className='text-sm cursor-pointer font-medium leading-6 py-2'>
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
  );
}
