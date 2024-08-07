'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Slider from 'react-slick';
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
  <div className='w-full'>
    <div className='bg-[#1A1D1E] rounded-3xl p-6 shadow-lg md:h-[280px] flex flex-col md:w-[337px]'>
      <p className='text-white/60 text-sm sm:text-base leading-7 font-normal line-clamp-3 sm:line-clamp-none md:w-72 h-28'>
        {content}
      </p>
      <div className='flex items-center gap-2 sm:gap-4 max-w-60 max-h-16 md:mt-14 '>
        <Image src={avatar} alt={author} width={60} height={60} className='rounded-full' />
        <div>
          <div className='max-w-40 max-h-10 gap-4'>
            <p className='text-white text-base md:max-w-24 md:max-h-4 sm:text-sm font-medium'>{author}</p>
            <p className='text-[#666] text-xs'>{role}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Feedback: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.7,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3.7,
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className='md:px-0 px-4 pb-0 bg-neutral-900'>
      <div className='flex items-center flex-col justify-center gap-10 sm:gap-20 py-20 sm:py-40 '>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full px-4 md:px-0 mb-10 sm:mb-0'>
            <div className='flex gap-4 sm:hidden mb-6'>
              <button
                onClick={handlePrev}
                className='p-2 rounded-full bg-neutral-700 text-white/20 hover:bg-[#333]'>
                <FaArrowLeft className='text-center text-lg' />
              </button>
              <button
                onClick={handleNext}
                className='p-2 rounded-full bg-neutral-700 text-white hover:bg-[#333]'>
                <FaArrowRight className='text-center text-lg' />
              </button>
            </div>
            <div className='flex items-center'>
              <button
                onClick={handlePrev}
                className='hidden sm:block p-2 rounded-full bg-neutral-700 text-white/20 hover:bg-[#333] mr-60'>
                <FaArrowLeft className='text-center text-lg md:text-2xl' />
              </button>
              <div className='max-w-xl gap-4 sm:gap-7 flex flex-col items-center justify-center text-center'>
                <h2 className='text-xl sm:text-2xl md:text-4xl font-medium text-white'>
                  People Say Nice Things
                </h2>
                <p className='text-white/60 text-sm md:text-base font-medium md:w-[512px]'>
                  Some of the most successful product teams in the world use. Not to mention the hundreds of
                  thousands of other talented <br />
                  individuals who have lots of lovely things to say.
                </p>
              </div>
              <button
                onClick={handleNext}
                className='hidden sm:block p-2 rounded-full bg-neutral-700 text-white hover:bg-[#333] ml-60'>
                <FaArrowRight className='text-center text-lg md:text-2xl' />
              </button>
            </div>
          </div>
        </div>
        <div className='w-full md:max-w-[1300px] md:p-0 p-2 md:max-h-[592px]'>
          <Slider ref={sliderRef} {...settings}>
            {feedbacks.map((feedback, index) => (
              <div key={index} className='p-2 sm:p-2'>
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
