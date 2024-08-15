'use client';

import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';
import Card from './features-card';
import { projects } from './features-data';

export default function Home(): JSX.Element {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  const { scrollY } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const updateScrollHeight = () => {
      setScrollHeight(document.documentElement.scrollHeight);
    };

    updateScrollHeight();
    window.addEventListener('resize', updateScrollHeight);

    return () => window.removeEventListener('resize', updateScrollHeight);
  }, []);

  const progress = useTransform(scrollY, [0, scrollHeight], [0, 1]);

  // Use useMemo to memoize the results of useSpring to avoid calling it inside the map function
  const scales = projects.map((project, index) => {
    const targetScale = 1 - (projects.length - index) * 0.05;
    const range: [number, number] = [index * 0.25, 1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSpring(useTransform(progress, range, [1, targetScale]), {
      damping: 20,
      stiffness: 300,
    });
  });

  return (
    <motion.main
      ref={containerRef}
      className='max-w-full flex flex-col py-16 md:py-24 items-center md:gap-24 gap-12 px-4 md:px-0 mx-auto'>
      <header className='flex flex-col items-center gap-4 md:gap-7 text-center'>
        <div className='flex flex-col gap-2 md:gap-4'>
          <h1 className='text-2xl md:text-4xl font-semibold max-w-lg flex flex-col gap-1'>
            <span>Explore the power of</span>
            <span>
              AI apps generation
              <span className='text-[#0F6FFF]'> Workflow</span>
            </span>
          </h1>
        </div>

        <p className='text-[#53535C] leading-6 md:leading-8 max-w-xl'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save hours of
          effort and use our robust deployable code.
        </p>
      </header>

      <div className='flex flex-col w-full gap-12 md:gap-16'>
        {projects.map((project, index) => (
          <Card
            i={0}
            link={''}
            key={project.id || index}
            {...project}
            progress={scrollY}
            range={[index * 0.25, 1]}
            targetScale={1 - (projects.length - index) * 0.05}
            scale={scales[index]} // Use the memoized scale value
          />
        ))}
      </div>
    </motion.main>
  );
}
