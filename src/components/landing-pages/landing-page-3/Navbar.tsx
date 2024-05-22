'use client';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Button from '../landing-page-3/Button';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HiBars3 } from 'react-icons/hi2';
import Link from 'next/link';

const navOptions = [
  {
    label: 'Features',
    url: '/features',
  },
  {
    label: 'Product',
    url: '/#product',
  },
  {
    label: 'Testimonials',
    url: '/#testimonials',
  },
  {
    label: 'FAQ',
    url: '/#Help',
  },
];

export default function Navbar() {
  return (
    <div className='flex justify-between px-16  max-md:px-4 h-20 items-center max-md:h-12'>
      <Image src='/lp3-logo.svg' width={100} height={100} alt='logo' className='h-12 w-32' />
      <div className='flex max-md:hidden gap-4'>
        {navOptions.map((opt) => {
          return (
            <Link
              href={opt.url}
              key={opt.label}
              className='px-1 py-2.5 text-base leading-6 font-medium hover:underline'>
              {opt.label}
            </Link>
          );
        })}
      </div>
      <div>
        <div className='hidden md:block'>
          <Button>
            <span className=' leading-5'>Sign Up</span>
            <ArrowRightIcon />
          </Button>
        </div>

        <Sheet>
          <SheetTrigger className='block md:hidden'>
            <HiBars3 />
          </SheetTrigger>
          <SheetContent side='top' className=''>
            <div className='space-y-6'>
              <ul className='gap-6'>
                {navOptions.map((item, index) => (
                  <li key={index} className='text-sm font-medium py-2'>
                    <Link href={item.url}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <Button>
                <span>Sign Up</span>
                <ArrowRightIcon />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
