'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useTransform, MotionValue } from 'framer-motion';
import Image1 from '@/assets/landing-page-11/images/feature.svg';

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  range: [number, number]; // Tuple representing the range
  targetScale: number;
  progress: MotionValue<number>;
  scale: MotionValue<number>;
}

// Card component
const Card: React.FC<CardProps> = ({ title, description, progress, color, range, targetScale }) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className='sticky top-0 bg-white -mt-24'>
      <motion.div
        className='card flex flex-col relative rounded-3xl '
        style={{
          scale,
          backgroundColor: color,
        }}>
        <div className='flex flex-col md:flex-row items-center justify-between bg-[#F6F6F6] rounded-[20px] md:rounded-[40px] p-4 md:pl-10 md:pr-4 gap-6'>
          <div className='p-4 md:p-6 rounded-3xl w-full md:w-96 text-center md:text-start'>
            <h2 className='text-3xl md:text-[40px] font-semibold mb-4 tracking-tight md:leading-[56px]'>
              {title}
            </h2>
            <p className='text-base md:text-lg md:leading-8 text-[#727272] tracking-tight font-normal'>
              {description}
            </p>
          </div>
          <div className='bg-blue-600 rounded-3xl w-full h-auto md:w-[588px] md:h-[568px] py-12 flex items-center justify-center '>
            <Image
              width={305}
              height={453}
              src={Image1}
              alt='Feature'
              className='w-[200px] h-[300px] md:w-[305px] md:h-[453px] mx-auto rounded-3xl'
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
