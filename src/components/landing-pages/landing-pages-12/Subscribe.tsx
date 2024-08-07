'use client';
import React, { useState } from 'react';
import { Input } from '../../ui/input';
import { cn } from '@/utils/utils';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
  };

  return (
    <div className='flex justify-center py-32 max-h-[619px] gap-8 relative px-4'>
      <div className='bg-neutral-100 rounded-3xl p-10 max-w-[630px] w-full text-center gap-3'>
        <p className='text-sm text-neutral-900 mb-2 font-semibold'>Subscribe</p>
        <div className='grid grid-cols-1 max-w-xl max-h-64 gap-10 items-center justify-center'>
          <h2 className='md:text-4xl text-2xl font-medium text-center text-slate-950'>
            Join over 1 million
            <br />
            developers and designers
          </h2>
          <div className='flex md:max-w-md mx-auto items-center relative'>
            <form onSubmit={handleSubmit} className='flex'>
              <Input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email address'
                className='rounded-l-2xl rounded-r-none p-4 gap-3 md:max-w-80 md:h-14 text-base'
              />
              <button
                type='submit'
                className={cn(
                  'px-6 py-2 bg-stone-900 text-white font-semibold rounded-r-2xl',
                  'hover:bg-stone-900/90 transition-colors duration-200'
                )}>
                Subscribe
              </button>
            </form>
            <div className='absolute -right-14 md:-right-16 top-full -translate-y-2/4'>
              <svg width='50' height='75' viewBox='0 0 50 75' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M35.6584 44.5946L35.6584 45.5946L35.6584 45.5946L35.6584 44.5946ZM0.763913 8.30896C0.445868 8.76047 0.554071 9.38433 1.00558 9.70237L8.36346 14.8852C8.81497 15.2032 9.43882 15.095 9.75687 14.6435C10.0749 14.192 9.96671 13.5682 9.5152 13.2501L2.97487 8.64316L7.58183 2.10283C7.89987 1.65132 7.79167 1.02747 7.34016 0.709417C6.88864 0.391375 6.26479 0.499574 5.94674 0.951088L0.763913 8.30896ZM21.8722 73.9976C36.5228 75.0233 45.8359 67.7238 48.5757 59.8766C49.9405 55.9673 49.6709 51.8801 47.4894 48.743C45.2957 45.5885 41.31 43.5945 35.6584 43.5946L35.6584 45.5946C40.8361 45.5945 44.1202 47.4011 45.8474 49.8849C47.5869 52.3862 47.8892 55.7752 46.6875 59.2173C44.294 66.0727 35.9197 72.9762 22.0119 72.0025L21.8722 73.9976ZM35.6584 43.5946C30.3064 43.5947 25.784 43.0177 22.278 41.9265C18.7575 40.8307 16.3718 39.2521 15.1237 37.3335C13.9075 35.464 13.6642 33.1042 14.7826 30.1481C15.9139 27.1577 18.4256 23.6139 22.6353 19.5545L21.2471 18.1148C16.9336 22.2742 14.1909 26.0598 12.912 29.4404C11.62 32.8554 11.8105 35.9083 13.4472 38.4241C15.0519 40.8909 17.9381 42.6703 21.6836 43.8361C25.4435 45.0064 30.1813 45.5947 35.6584 45.5946L35.6584 43.5946ZM22.6353 19.5545C24.8037 17.4637 26.1919 15.6593 26.8773 14.0875C27.5773 12.482 27.5797 11.0127 26.7894 9.79956C26.0458 8.65812 24.7301 7.95642 23.2872 7.508C21.8195 7.05188 20.0581 6.80801 18.2136 6.69746C14.5198 6.47608 10.3116 6.78034 7.05204 7.13379C5.41685 7.3111 4.00951 7.50204 3.01019 7.64877C2.51038 7.72216 2.11222 7.78455 1.8382 7.82873C1.70118 7.85083 1.59516 7.86837 1.52296 7.88047C1.48686 7.88652 1.45921 7.89121 1.44036 7.89443C1.43094 7.89603 1.42371 7.89727 1.41873 7.89813C1.41624 7.89856 1.41431 7.89889 1.41295 7.89913C1.41227 7.89925 1.41167 7.89935 1.41134 7.89941C1.41088 7.89948 1.41057 7.89954 1.58145 8.88483C1.75234 9.87012 1.75232 9.87013 1.75243 9.87011C1.75266 9.87006 1.75292 9.87002 1.75337 9.86994C1.75428 9.86979 1.75575 9.86953 1.75778 9.86918C1.76185 9.86848 1.76815 9.8674 1.77664 9.86595C1.79362 9.86306 1.81936 9.85869 1.85352 9.85297C1.92183 9.84152 2.02378 9.82464 2.15657 9.80323C2.42217 9.7604 2.81101 9.69946 3.30074 9.62756C4.28049 9.4837 5.66235 9.29621 7.26765 9.12214C10.4891 8.77282 14.5671 8.4825 18.094 8.69388C19.8599 8.79972 21.4425 9.02907 22.6937 9.41789C23.9696 9.81442 24.7476 10.3294 25.1137 10.8913C25.433 11.3815 25.5611 12.1021 25.044 13.2881C24.5122 14.5076 23.3404 16.0963 21.2471 18.1148L22.6353 19.5545Z'
                  fill='#0F6FFF'
                />
              </svg>
            </div>
          </div>
          <p className='text-sm text-zinc-600 pt-0 max-w-[550px]'>
            Want to Build Products on the Internet but don't know where to start?
          </p>
        </div>
      </div>
    </div>
  );
}
