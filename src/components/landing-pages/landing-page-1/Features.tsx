// This component displays a list of key features or services offered by the product.
// Each feature is represented with an icon and a short description, making it easy for users to quickly understand the product's value.
// The component expects an array of features with `icon`, `title`, and `description` properties.

import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const features = [
  {
    title: 'Free forever',
    description: 'Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates.',
  },
  {
    title: 'Free forever',
    description: 'Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates.',
  },
  {
    title: 'Free forever',
    description: 'Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates.',
  },
  {
    title: 'Free forever',
    description: 'Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates.',
  },
  {
    title: 'Free forever',
    description: 'Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates.',
  },
  {
    title: 'Free forever',
    description: 'Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates.',
  },
];

const Features = () => {
  return (
    <div id='features' className='space-y-[96px]'>
      <p className='text-center text-3xl md:text-5xl font-medium header-gradient !leading-normal'>
        Revolutionize your workflow
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
        {features.map((_, index) => (
          <div key={index} className='text-white space-y-4 text-center relative p-6'>
            <div className='bg-[#26AB75]/60 size-20 blur-2xl absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            <FaGraduationCap className='size-8 z-50 mx-auto' />
            <p className='text-xl font-semibold'>Free forever</p>
            <p className='text-[#ABABB0] text-center text-sm leading-6'>
              Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
