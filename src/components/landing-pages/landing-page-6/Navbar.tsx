'use client';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HiBars3 } from 'react-icons/hi2';
import Link from 'next/link';
import Button from './Button';

const navOptions = [
  { label: 'Features', url: '#features' },
  { label: 'Product', url: '#product' },
  { label: 'Pricing', url: '#pricing' },
  { label: 'FAQ', url: '#faq' },
];

export default function Navbar() {
  return (
    <nav className='container mx-auto p-4 md:p-6'>
      <div className='flex justify-between items-center'>
        <Link href='https://www.builderkit.ai' className='flex items-center gap-2'>
          <Image src='/lp3-logo.png' width={140} height={140} alt='BuilderKit.ai logo' />
        </Link>

        <div className='hidden md:flex items-center gap-12'>
          {navOptions.map((option) => (
            <Link key={option.label} href={option.url} className='font-medium hover:text-lp2-primary'>
              {option.label}
            </Link>
          ))}
        </div>

        <div className='hidden md:block'>
          <Button>
            <span>Sign Up</span>
            <ArrowRightIcon className='ml-2' />
          </Button>
        </div>

        <Sheet>
          <SheetTrigger className='md:hidden'>
            <HiBars3 size={24} />
          </SheetTrigger>
          <SheetContent side='top' className='py-6'>
            <div className='flex flex-col gap-3'>
              {navOptions.map((option) => (
                <SheetClose key={option.label} asChild>
                  <Link href={option.url} className='font-medium py-2 hover:text-lp2-primary'>
                    {option.label}
                  </Link>
                </SheetClose>
              ))}
              <Button>
                <span>Sign Up</span>
                <ArrowRightIcon className='ml-2' />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
