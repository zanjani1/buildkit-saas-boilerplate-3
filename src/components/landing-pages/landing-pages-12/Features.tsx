'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import FeaturesImage1 from '@/assets/landing-page-12/images/hero.svg';
import FeaturesImage2 from '@/assets/landing-page-12/images/feature.svg';
import FeaturesImage3 from '@/assets/landing-page-12/images/feedback.svg';
import FeaturesImage4 from '@/assets/landing-page-12/images/hero.svg';

const features = [
  {
    number: '01',
    title: 'Quality apps',
    description: 'BuilderKit takes care of everything from authentication to payments.',
    image: FeaturesImage1,
  },
  {
    number: '02',
    title: 'Robust security',
    description: 'Built with security in mind, ensuring your apps are safe and secure.',
    image: FeaturesImage2,
  },
  {
    number: '03',
    title: 'Scalability',
    description: 'Easily scale your applications to handle more users and data.',
    image: FeaturesImage3,
  },
  {
    number: '04',
    title: 'Seamless integration',
    description: 'Integrate with various tools and services effortlessly.',
    image: FeaturesImage4,
  },
];

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div id='features' className='flex justify-center px-4'>
      <div className='md:max-w-[1030px] max-w-full flex flex-col md:pt-40 py-0 md:mt-0 mt-10 items-center md:gap-24 gap-12'>
        <div className='flex flex-col items-center gap-5 justify-between text-center'>
          <div className='flex flex-col gap-3'>
            <h1 className='md:text-4xl text-2xl font-semibold md:max-w-lg flex flex-col md:gap-2 text-slate-950'>
              <span>Explore the power of</span>
              <span>AI apps generation Workflow</span>
            </h1>
          </div>

          <span className='text-zinc-950/60 max-w-[642px] text-sm md:text-base leading-[22px] md:leading-[25.6px] font-medium'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </span>
        </div>

        <div className='flex flex-col md:flex-row md:items-start justify-between pt-3 w-full'>
          <div className='md:w-1/2 space-y-6'>
            {features.map((feature) => (
              <div
                key={feature.number}
                className='flex md:w-[346px] w-full max-h-32 pt-5 pl-5 pb-6 pr-6 gap-5 rounded-3xl cursor-pointer bg-stone-50'>
                <span className='text-3xl font-bold w-9 text-stone-300'>{feature.number}</span>
                <div>
                  <h3 className='text-lg font-medium text-slate-950'>{feature.title}</h3>
                  <p className='text-sm text-zinc-600'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <motion.div
            ref={containerRef}
            className='relative md:w-[748px] md:h-[556px] w-full h-[300px] overflow-hidden pt-5 bg-neutral-200/20 bg-gradient-to-b from-zinc-900/90 to-zinc-900 rounded-3xl mt-10 md:mt-0'>
            {features.map((feature, index) => {
              const yProgress = useTransform(
                scrollYProgress,
                [index * 0.25, (index + 1) * 0.25],
                ['100%', '0%']
              );
              const opacity = useTransform(scrollYProgress, [index * 0.25, (index + 1) * 0.25], [0, 1]);

              return (
                <motion.div
                  key={feature.number}
                  className='absolute top-0 left-0 right-0 h-full flex items-center justify-center'
                  style={{
                    y: index === 0 ? 0 : yProgress,
                    opacity: index === 0 ? 1 : opacity,
                    zIndex: features.length - index,
                  }}>
                  <div className='h-[80%] md:h-[453px] w-[70%] md:w-[305px] mx-auto'>
                    <Image src={feature.image} alt={`Feature ${feature.number}`} className='rounded-lg' />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
