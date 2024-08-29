import React from 'react';
import Image from 'next/image';
import star from '@/assets/landing-page-12/icons/StarIcon.svg';

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

const Features2 = () => {
  return (
    <div className='px-4 mt-52'>
      <div className='text-center mb-20'>
        <h2 className='md:w-2/5 text-3xl md:text-4xl font-medium md:leading-[44px] tracking-tight mx-auto mb-7'>
          Essentially, <span className='text-blue-600'>everything</span> you need to ship you{' '}
          <span className='text-blue-600'>first AI App</span>
        </h2>
        <p className='text-zinc-600 leading-8 font-light'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days.
          <br />
          Save Hours of Effort and Use our robust Deployable code.
        </p>
      </div>

      <div className='max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mx-auto'>
        {features.map((feature, index) => (
          <div key={index} className='flex items-center justify-between gap-6 bg-[#F9F9F9] rounded-3xl p-6'>
            <div className='space-y-2'>
              <h3 className='font-medium tracking-tight text-lg'>{feature.title}</h3>
              <p className='text-gray-500 text-sm leading-[22px]'>{feature.description}</p>
            </div>

            <Image src={feature.icon} width={64} height={64} alt={feature.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features2;
