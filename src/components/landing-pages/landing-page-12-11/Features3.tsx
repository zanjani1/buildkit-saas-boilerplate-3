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
    <div className='bg-[#0F6FFF] max-w-[1200px] md:mx-auto rounded-3xl mx-4'>
      <div className='md:p-28 p-10  '>
        <div className='text-center md:max-w-xl mx-auto gap-5'>
          <h2 className='text-2xl md:text-4xl font-medium text-white mb-4 md:leading-[44px] tracking-tight'>
            Essentially, everything you need to ship you first AI App
          </h2>
          <p className='text-blue-100 md:max-w-2xl text-sm md:text-base leading-8 font-light'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 justify-center'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-blue-800 rounded-3xl p-6 gap-4 flex flex-col max-w-[308px] shadow-sm'>
              <div>
                <Image src={feature.icon} width={32} height={32} alt={feature.title} />
              </div>
              <div className='font-light'>
                <h3 className='font-medium text-white mb-1'>{feature.title}</h3>
                <p className='text-blue-100 text-sm tracking-tight'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features3;
