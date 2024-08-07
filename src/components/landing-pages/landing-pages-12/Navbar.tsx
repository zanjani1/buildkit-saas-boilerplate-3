'use client';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HiBars3 } from 'react-icons/hi2';

const NavbarRoutes = [
  { label: 'Product', url: '#product' },
  { label: 'Features', url: '#features' },
  { label: 'FAQ', url: '#faq' },
  { label: 'Pricing', url: '#pricing' },
];

export default function Navbar() {
  return (
    <div className='md:max-w-[397px] md:h-20 text-black justify-between w-full flex gap-2 px-4 md:px-0 pt-10'>
      <Link href='https://www.builderkit.ai'>
        <div className='flex items-center size-10 bg-neutral-100 p-2 gap-20 rounded-3xl'>
          <Image src='/lp12-logo.svg' width={24} height={24} alt='logo' className='size-6' />
        </div>
      </Link>

      <div className='md:flex hidden md:w-72 md:h-10 py-1 px-3 items-center justify-between bg-neutral-100 rounded-3xl gap-20'>
        <div className='flex justify-between items-center gap-1 md:w-60 pl-2 md:h-8'>
          {NavbarRoutes.map((opt) => {
            return (
              <Link
                href={opt.url}
                key={opt.label}
                className='text-sm font-medium text-gray-900 tracking-tight '>
                {opt.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className='md:block hidden'>
        <Link href='/login' className='text-sm'>
          <Button size='semi' bg={true}>
            Login
          </Button>
        </Link>
      </div>
      <Sheet>
        <SheetTrigger className='block md:hidden'>
          <HiBars3 size={25} />
        </SheetTrigger>
        <SheetContent side='top' className='bg-neutral-100 text-black w-full overflow-hidden'>
          <div className='space-y-6 p-4'>
            <div className='flex flex-col gap-2 text-sm'>
              {NavbarRoutes.map((item, index) => (
                <div key={index} className='text-sm font-medium py-2'>
                  <SheetClose asChild>
                    <Link href={item.url}>{item.label}</Link>
                  </SheetClose>
                </div>
              ))}
            </div>
            <Button bg={true} size='semi' className='justify-center items-center '>
              <span>Login</span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
