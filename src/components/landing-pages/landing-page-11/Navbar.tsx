import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { HiBars3 } from 'react-icons/hi2';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/utils/utils';

const NavbarRoutes = [
  { label: 'Product', url: '#product' },
  { label: 'Features', url: '#features' },
  { label: 'FAQ', url: '#faq' },
  { label: 'Pricing', url: '#pricing' },
];

interface INavLink {
  href: string;
  children: ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: INavLink) => (
  <Link href={href} className={cn('text-sm font-medium text-black tracking-tight', className)}>
    {children}
  </Link>
);

const Navbar = () => (
  <div className='bg-white sticky top-0 z-50 py-4 md:py-6'>
    <div className='flex items-center justify-between md:justify-center gap-2 px-4 md:px-0'>
      <Link
        href='https://www.builderkit.ai'
        className='flex items-center size-10 bg-neutral-100 p-2 rounded-3xl'>
        <Image src='/lp11-logo.svg' width={24} height={24} alt='logo' className='size-6' />
      </Link>

      {/* Dasktop Version */}
      <div className='hidden md:flex w-72 h-10 py-1 px-3 items-center justify-between bg-neutral-100 rounded-3xl gap-2'>
        <div className='flex justify-between items-center gap-1 w-60 pl-2 h-8'>
          {NavbarRoutes.map((opt) => (
            <NavLink key={opt.label} href={opt.url}>
              {opt.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className='hidden md:block'>
        <NavLink href='/login'>
          <Button variant='secondary' size='semi'>
            Login
          </Button>
        </NavLink>
      </div>

      {/* Mobile Version */}
      <Sheet>
        <SheetTrigger className='block md:hidden'>
          <HiBars3 size={25} />
        </SheetTrigger>
        <SheetContent side='top' className='bg-white text-black w-full overflow-hidden'>
          <div className='space-y-6 p-4'>
            <div className='flex flex-col gap-2 text-sm'>
              {NavbarRoutes.map((item) => (
                <SheetClose key={item.label} asChild>
                  <NavLink href={item.url} className='py-2'>
                    {item.label}
                  </NavLink>
                </SheetClose>
              ))}
            </div>
            <Button variant='secondary' size='semi'>
              Login
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
);

export default Navbar;
