import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { HiBars3 } from 'react-icons/hi2';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { cn } from '@/utils/utils';

const NavItems = [
  { label: 'Features', url: '#features' },
  { label: 'Product', url: '#features2' },
  { label: 'Testimonial', url: '#testimonial' },
  { label: 'FAQ', url: '#faq' },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => (
  <Link href={href} className={cn('text-sm text-neutral-500 hover:text-gray-900', className)}>
    {children}
  </Link>
);

const GetStartedButton = () => (
  <NavLink href='/login'>
    <Button variant='tertiary' size='start'>
      <span>Get started</span>
      <ArrowRightIcon />
    </Button>
  </NavLink>
);

const DesktopNavigation = () => (
  <div className='hidden md:flex items-center space-x-4'>
    {NavItems.map((item) => (
      <NavLink key={item.label} href={item.url}>
        {item.label}
      </NavLink>
    ))}
  </div>
);

const MobileNavigation = () => (
  <Sheet>
    <SheetTrigger className='md:hidden'>
      <HiBars3 size={25} />
    </SheetTrigger>
    <SheetContent side='top' className='bg-white text-black w-full overflow-hidden'>
      <div className='space-y-6'>
        <div className='flex flex-col gap-2 text-sm'>
          {NavItems.map((item) => (
            <SheetClose key={item.label} asChild>
              <NavLink href={item.url} className='py-2'>
                {item.label}
              </NavLink>
            </SheetClose>
          ))}
        </div>
        <SheetClose asChild>
          <GetStartedButton />
        </SheetClose>
      </div>
    </SheetContent>
  </Sheet>
);

const Navbar = () => (
  <nav className='bg-white border-b border-gray-200'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex justify-between items-center h-16'>
        <div className='shrink-0'>
          <Link href='https://www.builderkit.ai'>
            <Image src='/lp13-logo.svg' width={124} height={24} alt='Builderkit.ai logo' />
          </Link>
        </div>
        <DesktopNavigation />
        <div className='hidden md:block'>
          <GetStartedButton />
        </div>
        <MobileNavigation />
      </div>
    </div>
  </nav>
);

export default Navbar;
