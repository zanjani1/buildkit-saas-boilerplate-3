'use client';

import React, { useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
  };

  return (
    <div className='mx-auto text-center subscribe'>
      <div className='py-16 md:py-40 px-4 md:px-10'>
        <h2 className='text-2xl md:text-5xl font-medium text-white mb-6 md:mb-8 md:leading-[60px] tracking-tight'>
          Join over 1 million
          <br />
          developers and designers
        </h2>

        <form onSubmit={handleSubmit} className='flex flex-col md:flex-row justify-center items-center mb-8'>
          <div className='relative w-full md:w-[377px]'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your work email'
              className='w-full px-4 py-2 rounded-full text-sm border border-[#EBEBEB] bg-transparent h-12 text-white placeholder:text-white'
            />
            <button
              type='submit'
              className='absolute right-1 top-1 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold h-10'>
              Subscribe
            </button>
          </div>
        </form>

        <p className='text-white text-sm md:text-base font-light'>
          Want to Build Products on the Internet but don't know where to start?
        </p>
      </div>
    </div>
  );
}
