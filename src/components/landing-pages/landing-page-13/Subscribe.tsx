'use client';

import React, { useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
  };

  return (
    <div className='text-center bg-[linear-gradient(180deg,_#303030_36.53%,_#3c50e0_100%)] py-16 md:py-40 px-4 space-y-8'>
      <h2 className='text-2xl md:text-5xl font-medium text-white md:leading-[60px] tracking-tight'>
        Join over 1 million
        <br />
        developers and designers
      </h2>

      <form onSubmit={handleSubmit}>
        <div className='relative w-full md:w-[375px] mx-auto'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your work email'
            className='w-full h-12 px-4 rounded-full text-sm border border-[#EBEBEB] bg-white/5 text-white placeholder:text-white'
          />
          <button
            type='submit'
            className='absolute right-1 top-1 bg-white text-black px-4 py-2 rounded-full text-sm font-medium h-10'>
            Subscribe
          </button>
        </div>
      </form>

      <p className='text-white text-sm md:text-base font-light'>
        Want to Build Products on the Internet but don't know where to start?
      </p>
    </div>
  );
}
