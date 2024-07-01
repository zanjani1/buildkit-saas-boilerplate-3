import React from 'react';
import Image from 'next/image';
import Dropbox from '@/assets/landing-page-1/dropbox.png';
import Paypal from '@/assets/landing-page-1/paypal.png';
import Google from '@/assets/landing-page-1/google.png';
import { cn } from '@/utils/utils';

const logos = [
  { src: Dropbox, alt: 'Dropbox' },
  { src: Google, alt: 'Google' },
  { src: Dropbox, alt: 'Dropbox' },
  { src: Paypal, alt: 'Paypal' },
  // { src: Google, alt: 'Google' },
];

const FeatureOn = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-[64px] h-[620px]'>
      <p className='text-center text-3xl md:text-5xl font-medium header-gradient'>Featured on</p>
      <div
        className={cn(
          'grid gap-8 md:gap-36 w-full justify-center items-center',
          `md:grid-cols-${logos.length}`
        )}>
        {logos.map((logo, index) => (
          <Image key={index} src={logo.src} alt={logo.alt} className='w-4/5 md:w-full mx-auto' />
        ))}
      </div>
    </div>
  );
};

export default FeatureOn;
