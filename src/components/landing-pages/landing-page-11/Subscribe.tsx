'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import BentArrowIcon from '@/assets/landing-page-11/icons/bent-arrow.svg';
import Image from 'next/image';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
  };

  return (
    <div className='w-11/12 md:w-[44%] bg-neutral-100 rounded-3xl p-8 md:p-10 text-center mx-auto mt-32 md:mt-48'>
      <p className='text-sm text-slate-950 mb-4 font-semibold leading-6'>Subscribe</p>

      <div className='space-y-10'>
        <h2 className='text-2xl md:text-4xl font-medium text-slate-950'>
          Join over 1 million <br className='hidden md:block' /> developers and designers
        </h2>

        <div className='flex justify-center relative'>
          <form onSubmit={handleSubmit} className='w-full md:w-5/6 flex'>
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email address'
              className='w-3/4 h-12 md:h-14 rounded-l-xl md:rounded-l-2xl rounded-r-none p-4 border-none'
            />
            <button
              type='submit'
              className='w-1/4 h-12 md:h-14 bg-stone-900 text-white rounded-r-xl md:rounded-r-2xl text-xs md:text-base'>
              Subscribe
            </button>
          </form>

          <div className='hidden md:block absolute -right-4 top-5'>
            <Image src={BentArrowIcon} alt='bent-arrow-icon' />
          </div>
        </div>

        <p className='text-sm md:text-base text-zinc-600'>
          Want to Build Products on the Internet but don't know where to start?
        </p>
      </div>
    </div>
  );
}
