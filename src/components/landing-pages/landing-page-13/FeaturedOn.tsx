import React from 'react';
import { Notion, Grammarly, Intercom, Unsplash, Descript } from '@/assets/landing-page-13/icons';
import Image from 'next/image';

const imageSrc = [Unsplash, Notion, Intercom, Descript, Grammarly];

export default function FeaturedOn() {
  return (
    <div className='md:w-3/4 mx-auto my-28 flex flex-col md:flex-row items-center gap-10'>
      <p className='text-zinc-800 tracking-tight min-w-20'>Trusted by</p>

      <div className='relative overflow-hidden'>
        <div className='absolute left-0 inset-y-0 w-10 bg-gradient-to-r from-white to-transparent z-10' />
        <div className='flex gap-10 animate-scroll'>
          {[...imageSrc, ...imageSrc].map((src, index) => (
            <Image key={index} src={src} width={112} height={24} alt='logo' />
          ))}
        </div>
      </div>
    </div>
  );
}
