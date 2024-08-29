import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { HiBars3 } from 'react-icons/hi2';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/utils/utils';

const NavbarRoutes = [
  { label: 'Features', url: '#features' },
  { label: 'FAQ', url: '#faq' },
  { label: 'Pricing', url: '#pricing' },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => (
  <Link href={href} className={cn('text-sm font-medium text-gray-700 tracking-tight', className)}>
    {children}
  </Link>
);

const Navbar = () => (
  <div className='bg-white sticky top-0 z-50 p-4 md:p-6'>
    <div className='flex items-center justify-between p-2 md:pr-2 md:pl-3 border border-[#F2F2F2] rounded-full max-w-2xl mx-auto'>
      <Link href='https://www.builderkit.ai'>
        <Image src='/lp12-logo.svg' width={124} height={24} alt='logo' />
      </Link>

      {/* Dasktop Version */}
      <>
        <div className='hidden md:flex items-center gap-6'>
          {NavbarRoutes.map((opt) => (
            <NavLink key={opt.label} href={opt.url}>
              {opt.label}
            </NavLink>
          ))}
        </div>

        <div className='hidden md:flex items-center gap-2'>
          <NavLink href='/login'>
            <Button variant='tertiary' size='start'>
              Get started
            </Button>
          </NavLink>
          <NavLink href='/login'>
            <Button variant='secondary' size='semi'>
              Login
            </Button>
          </NavLink>
        </div>
      </>

      {/* Mobile Version */}
      <Sheet>
        <SheetTrigger className='md:hidden'>
          <HiBars3 size={25} />
        </SheetTrigger>
        <SheetContent side='top' className='bg-white text-black w-full overflow-hidden'>
          <div className='space-y-4'>
            <div className='flex flex-col gap-6 text-sm'>
              {NavbarRoutes.map((item) => (
                <SheetClose key={item.label} asChild>
                  <NavLink href={item.url}>{item.label}</NavLink>
                </SheetClose>
              ))}
            </div>
            <SheetClose asChild>
              <Button variant='tertiary' size='start' className='w-24 text-xs'>
                Get started
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button variant='secondary' size='semi' className='w-24'>
                Login
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
);

export default Navbar;
