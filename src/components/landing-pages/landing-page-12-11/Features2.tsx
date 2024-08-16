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
    <div className='md:py-40 py-20 px-4'>
      <div className='flex flex-col text-center gap-5 max-w-2xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-semibold md:leading-[44px] tracking-tight'>
          Essentially, <span className='text-blue-600'>everything</span> you need
          <br />
          to ship you <span className='text-blue-600'>first AI App</span>
        </h2>
        <p className='text-zinc-600 leading-8'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of
          Effort and Use our robust Deployable code.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:mt-20 py-10'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='flex items-center justify-between bg-[#F9F9F9] rounded-3xl p-6 shadow-sm'>
            <div className='space-y-2'>
              <h3 className='font-medium tracking-tight text-lg'>{feature.title}</h3>
              <p className='text-gray-600 font-normal text-sm leading-[22px] md:w-60'>
                {feature.description}
              </p>
            </div>
            <div className='shrink-0'>
              <Image src={feature.icon} width={64} height={64} alt={feature.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features2;
