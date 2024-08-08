'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the current feature image when the index changes
    const container = imageContainerRef.current;
    if (container) {
      const index = currentIndex;
      const imageHeight = container.scrollHeight / features.length;
      container.scrollTo({
        top: index * imageHeight,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handleScroll = () => {
    const container = imageContainerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const totalHeight = container.scrollHeight - containerHeight;
      const index = Math.min(Math.floor((scrollTop / totalHeight) * features.length), features.length - 1);
      setCurrentIndex(index);

      // Check if the user has scrolled past the last image
      if (scrollTop >= totalHeight) {
        const section = sectionRef.current;
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div id='features' className='flex justify-center'>
      <div className='md:max-w-[1030px] max-w-80 flex flex-col md:pt-40 py-10 items-center md:gap-24 gap-16'>
        <div className='text-center space-y-6 max-w-2xl mx-auto gap-7 font-medium'>
          <h1 className='md:text-4xl text-3xl text-slate-950 md:leading-[44px] tracking-tight font-medium'>
            Explore the power of
            <br />
            AI apps generation Workflow
          </h1>
          <p className='text-zinc-950/60 md:text-base md:w-[642px] font-medium leading-7 md:h-14'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>

        <div className='md:flex md:items-start justify-between gap-10 pt-10'>
          <div className='md:w-1/2 space-y-6'>
            {features.map((feature, index) => (
              <div
                key={feature.number}
                className={`flex md:w-[346px] max-h-32 pt-5 pl-5 pb-6 pr-6 gap-5 rounded-3xl cursor-pointer ${
                  currentIndex === index ? 'bg-stone-50' : ''
                }`}
                onClick={() => setCurrentIndex(index)}>
                <span
                  className={`text-3xl font-bold ${
                    currentIndex === index ? 'text-stone-300' : 'text-stone-300'
                  } w-9`}>
                  {feature.number}
                </span>
                <div>
                  <h3
                    className={`text-lg font-medium ${
                      currentIndex === index ? 'text-zinc-950' : 'text-zinc-950'
                    }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${currentIndex === index ? 'text-zinc-600' : 'text-zinc-600'}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image container for large screens */}
          <div
            ref={imageContainerRef}
            onScroll={handleScroll}
            className='hidden md:block relative w-[748px] h-[556px] overflow-y-scroll scrollbar-hidden pt-5 bg-gradient-to-bl from-zinc-900/90 to-zinc-900'>
            {features.map((feature, index) => (
              <div
                key={feature.number}
                className={`sticky top-0 z-[${features.length - index}] transform transition-transform duration-800 ease-in-out ${
                  currentIndex >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                } mb-12`}>
                <div className='relative h-[400px] w-[305px] mx-auto'>
                  <Image
                    src={feature.image}
                    alt={`Feature ${feature.number}`}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image container for small screens */}
        <div
          ref={imageContainerRef}
          onScroll={handleScroll}
          className='md:hidden relative w-full h-[300px] overflow-y-scroll scrollbar-hidden pt-5 bg-gradient-to-bl from-zinc-900/90 to-zinc-900'>
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`sticky top-0 z-[${features.length - index}] transform transition-transform duration-800 ease-in-out ${
                currentIndex >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              } mb-12`}>
              <div className='relative h-[200px] w-[150px] mx-auto'>
                <Image
                  src={feature.image}
                  alt={`Feature ${feature.number}`}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div ref={sectionRef} className='h-0' />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Features;
