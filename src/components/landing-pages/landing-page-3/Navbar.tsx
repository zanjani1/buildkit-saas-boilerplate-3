'use client';
import { ArrowRightIcon, Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Button } from '../../ui/button';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navOptions = ['Features', 'Product', 'Testimonials', 'FAQ'];
  return (
    <div className='flex justify-between px-16 py-6 max-md:px-4 max-md:py-1.5 items-center'>
      <Image src='/lp2-logo.svg' width={100} height={100} alt='logo' className='h-8 w-32' />
      <div className='flex max-md:hidden gap-1'>
        {navOptions.map((opt) => {
          return (
            <button key={opt} className='px-1 py-2.5 text-base leading-6 font-medium'>
              {opt}
            </button>
          );
        })}
      </div>
      <div className='flex gap-2 items-center'>
        <Button className='flex px-3 py-6 gap-1 bg-lp3-primary hover:bg-lp3-primary max-md:px-1.5 max-md:py-3 max-md:text-xs'>
          <span className=' leading-5'>Sign Up</span>
          <ArrowRightIcon></ArrowRightIcon>
        </Button>
        {!sidebarOpen ? (
          <HamburgerMenuIcon className='md:hidden' onClick={() => setSidebarOpen(true)}></HamburgerMenuIcon>
        ) : (
          <div className='flex flex-col gap-4 absolute right-0 top-0 h-full px-6 py-16 z-50 bg-white'>
            <div className='flex mr-auto'>
              <button>
                <Cross1Icon onClick={() => setSidebarOpen(false)}></Cross1Icon>
              </button>
            </div>
            {navOptions.map((opt) => {
              return <button key={opt}>{opt}</button>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
