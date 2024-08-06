'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import FeaturesImage1 from '@/assets/landing-page-12/images/feature.svg';
import FeaturesImage2 from '@/assets/landing-page-12/icons/intercom.svg';
import FeaturesImage3 from '@/assets/landing-page-12/images/hero.svg';
import FeaturesImage4 from '@/assets/landing-page-12/icons/grammarly.svg';

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
  const [activeFeature, setActiveFeature] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const controls = useAnimation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observers = featureRefs.current
      .map((ref, index) => {
        if (!ref) return null; // Skip if ref is null

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveFeature(index);
              resetAutoChange();
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(ref);
        return observer;
      })
      .filter((observer): observer is IntersectionObserver => observer !== null);

    return () => {
      observers.forEach((observer) => observer.disconnect());
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, [activeFeature, controls]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const resetAutoChange = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
  };

  return (
    <div id='features' className='flex justify-center'>
      <div className='md:max-w-[1030px] max-w-80 flex flex-col md:py-32 py-24 items-center md:gap-24 gap-16'>
        <div className='text-center space-y-6 max-w-2xl mx-auto gap-7 font-medium'>
          <h1 className='text-4xl text-slate-950 leading-9 tracking-tight'>
            Explore the power of
            <br />
            AI apps generation Workflow
          </h1>
          <p className='text-zinc-950/60 md:text-base'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>

        <div className='md:flex md:items-start justify-between gap-10 pt-10'>
          <div className='md:w-1/2 space-y-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)} // Correct ref assignment
                className='flex md:w-[346px] max-h-32 pt-5 pl-5 pb-6 pr-6 gap-5 bg-stone-50 rounded-3xl'>
                <span className='text-3xl font-bold text-stone-300 w-9'>{feature.number}</span>
                <div>
                  <h3 className='text-lg font-medium text-zinc-950'>{feature.title}</h3>
                  <p className='text-sm text-zinc-600'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-8 md:mt-0'>
            <div className='md:w-[748px] md:h-[556px] bg-gradient-to-bl from-zinc-900/90 to-zinc-900 rounded-lg p-5 flex justify-center items-center'>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} key={activeFeature}>
                <Image
                  src={features[activeFeature].image}
                  alt='Feature Screenshot'
                  width={305}
                  height={453}
                  className='rounded-lg'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
