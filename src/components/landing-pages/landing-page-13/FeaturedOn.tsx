import React from 'react';
import { Notion, Grammarly, Intercom, Unsplash, Descript } from '@/assets/landing-page-13/icons';
import Image from 'next/image';

const imageSrc = [Unsplash, Notion, Intercom, Descript, Grammarly];

export default function FeaturedOn() {
  return (
    <div className='md:max-w-5xl px-4 mx-auto py-28'>
      <div className='flex items-center gap-10 md:ml-6'>
        <h1 className='font-medium text-zinc-800 tracking-tight md:w-20'>Trusted by</h1>
        <div className='relative max-w-3xl overflow-hidden'>
          <div className='absolute left-0 inset-y-0 w-10 bg-gradient-to-r from-white to-transparent z-10'></div>
          <div className='absolute right-0 inset-y-0 w-10 bg-gradient-to-l from-white to-transparent z-10'></div>
          <div className='flex animate-scroll'>
            {[...imageSrc, ...imageSrc].map((src, index) => (
              <div key={index} className='shrink-0 mx-8'>
                <Image src={src} width={112} height={24} alt='logo' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
