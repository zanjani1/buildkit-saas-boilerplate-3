import React from 'react';
import Image from 'next/image';
import star from '@/assets/landing-page-12/icons/StarFeature3.svg';

const features = [
  {
    title: 'Quality apps',
    description: 'Builderkit takes care of everything from authentication to payments',
    icon: star,
  },
  {
    title: 'Quality apps',
    description: 'Builderkit takes care of everything from authentication to payments',
    icon: star,
  },
  {
    title: 'Quality apps',
    description: 'Builderkit takes care of everything from authentication to payments',
    icon: star,
  },
];

const Features3 = () => {
  return (
    <div className='bg-[#0F6FFF] max-w-7xl rounded-[32px] mx-4 md:mx-auto mt-40'>
      <div className='p-8 md:p-28 space-y-14 md:space-y-20'>
        <div className='text-center md:max-w-xl mx-auto space-y-4'>
          <h2 className='text-2xl md:text-4xl font-medium text-white md:leading-[44px] tracking-tight'>
            Essentially, everything you need to ship you first AI App
          </h2>
          <p className='md:max-w-2xl text-sm md:text-base text-white/90 md:leading-8 font-light'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-6 justify-center'>
          {features.map((feature, index) => (
            <div key={index} className='bg-[#0F4EAC] rounded-3xl font-light p-7 space-y-3'>
              <Image src={feature.icon} width={32} height={32} alt={feature.title} />
              <h3 className='font-medium text-white'>{feature.title}</h3>
              <p className='text-white/90 text-sm tracking-tight '>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features3;
