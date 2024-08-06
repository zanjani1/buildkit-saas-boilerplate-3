import React from 'react';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/landing-page-12/images/subscribe.svg';

export default function Subscribe() {
  return (
    <div className='flex justify-center py-20 max-h-[619px] gap-8 relative px-4'>
      <div className='bg-neutral-100 rounded-3xl p-10 max-w-2xl w-full text-center gap-3'>
        <p className='text-sm text-neutral-900 mb-2 font-semibold'>Subscribe</p>
        <div className='grid grid-cols-1 max-w-xl max-h-64 gap-10 items-center justify-center'>
          <h2 className='md:text-4xl text-2xl font-medium text-center text-slate-950 '>
            Join over 1 million
            <br />
            developers and designers
          </h2>
          <div className='flex md:max-w-md mx-auto items-center'>
            <Input
              type='email'
              placeholder='Enter your email address'
              className='rounded-l-2xl rounded-r-none p-4 gap-3 md:max-w-80 md:h-14 text-base'
            />
            <Link href='/pricing'>
              <Button className='rounded-l-none rounded-r-2xl bg-stone-900 text-white hover:bg-gray-800 md:max-w-40 md:h-14'>
                Subscribe
              </Button>
            </Link>
            <Image src={logo} width={71.12} height={40.61} alt='logo' />
          </div>
          <p className='text-sm text-zinc-600'>
            Want to Build Products on the Internet but don't know where to start?
          </p>
        </div>
      </div>
    </div>
  );
}
