'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import feedbacks from './Feedback-data';
import avatar from '@/assets/landing-page-12/images/feedback.svg';

interface FeedbackCardProps {
  content: string;
  author: string;
  role: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ content, author, role }) => (
  <div className='w-full h-auto'>
    <div className='bg-[#1A1D1E] rounded-3xl p-4 sm:p-6 shadow-lg'>
      <p className='text-white/60 text-sm sm:text-base font-normal h-20 sm:h-28 mb-4 line-clamp-3 sm:line-clamp-none'>
        {content}
      </p>
      <div className='flex items-center gap-2 sm:gap-4'>
        <Image src={avatar} alt={author} width={40} height={40} className='rounded-full' />
        <div>
          <p className='text-white text-xs sm:text-sm font-medium'>{author}</p>
          <p className='text-[#666] text-xs'>{role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Feedback: React.FC = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3.5,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className='gap-10 md:px-0 px-4 pb-0'>
      <div className='flex items-center flex-col justify-center gap-10 sm:gap-20 bg-neutral-900 w-full py-20 sm:py-40 mx-auto'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full px-4 md:px-0 mb-10 sm:mb-0'>
            <div className='flex gap-4 sm:hidden mb-6'>
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className='p-2 rounded-full bg-neutral-700 text-white/20 hover:bg-[#333]'>
                <FaArrowLeft className='text-center text-lg' />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className='p-2 rounded-full bg-neutral-700 text-white hover:bg-[#333]'>
                <FaArrowRight className='text-center text-lg' />
              </button>
            </div>
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className='hidden sm:block p-2 rounded-full bg-neutral-700 text-white/20 hover:bg-[#333]'>
              <FaArrowLeft className='text-center text-lg md:text-2xl' />
            </button>
            <div className='max-w-xl gap-4 sm:gap-7 flex flex-col items-center justify-center text-center'>
              <h2 className='text-xl sm:text-2xl md:text-4xl font-medium text-white'>
                People Say Nice Things
              </h2>
              <p className='text-white text-sm md:text-base font-medium'>
                Some of the most successful product teams in the world use BuilderKit. Not to mention the
                hundreds of thousands of other talented individuals who have lots of lovely things to say.
              </p>
            </div>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className='hidden sm:block p-2 rounded-full bg-neutral-700 text-white hover:bg-[#333]'>
              <FaArrowRight className='text-center text-lg md:text-2xl' />
            </button>
          </div>
        </div>
        <div className='pt-10 sm:pt-20 w-full'>
          <Slider ref={sliderRef} {...settings}>
            {feedbacks.map((feedback, index) => (
              <div key={index} className='p-2 sm:p-3'>
                <FeedbackCard {...feedback} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
