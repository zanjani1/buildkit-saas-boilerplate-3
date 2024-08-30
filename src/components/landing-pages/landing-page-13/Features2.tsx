'use client';

import { useState } from 'react';
import Image from 'next/image';

import { cn } from '@/utils/utils';
import { featureDetails, featureNames } from './features2/content';

export default function Features2() {
  const [activeFeature, setActiveFeature] = useState(featureNames[0]);

  return (
    <div id='features2' className='max-w-7xl mx-auto py-16 sm:py-28 px-4 space-y-12'>
      <h2 className='w-full sm:w-5/6 md:w-[638px] mx-auto font-medium text-3xl md:text-5xl md:leading-[60px] text-[#090A18] text-center tracking-tight'>
        Essentially, everything you need to ship your first AI App
      </h2>

      {/* tabs */}
      <div className='flex flex-wrap justify-center gap-2 sm:gap-4'>
        {featureNames.map((name) => (
          <button
            key={name}
            className={cn(
              'px-4 py-3 rounded-full text-xs sm:text-sm bg-zinc-100 text-[#687076]',
              activeFeature === name ? 'bg-zinc-800 text-white' : 'hover:bg-zinc-200'
            )}
            onClick={() => setActiveFeature(name)}>
            {name}
          </button>
        ))}
      </div>

      {/* features card */}
      <div className='flex flex-col md:flex-row gap-6 sm:gap-11 bg-stone-50 p-6 sm:p-14 rounded-3xl'>
        <div className='w-full md:w-1/2 text-center md:text-left space-y-3'>
          <h3 className='font-medium text-2xl md:text-4xl tracking-tight text-neutral-700 md:leading-tight'>
            {featureDetails[activeFeature].title}
          </h3>
          <p className='text-[#8B8B8B] text-sm sm:text-base leading-6 md:leading-8'>
            {featureDetails[activeFeature].content}
          </p>
        </div>

        <div className='w-full md:w-1/2 h-auto sm:h-[450px] py-5 flex items-center justify-center rounded-3xl bg-gradient-to-b from-[#303030] via-[#303030] to-[#3c50e0]'>
          <Image
            src={featureDetails[activeFeature].url}
            alt={featureDetails[activeFeature].title}
            width={255}
            height={378}
            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  );
}
