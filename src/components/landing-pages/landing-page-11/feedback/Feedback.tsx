'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import feedbacks from './content';
import avatar from '@/assets/landing-page-11/images/feedback.svg';

const Feedback = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.6,
    slidesToScroll: 1,
    rows: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2.2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1.2 },
      },
    ],
  };

  return (
    <div className='bg-neutral-900 mt-32 md:mt-40'>
      <div className='w-11/12 mx-auto space-y-10 md:space-y-20 pb-28 pt-40 md:py-40 relative'>
        <div className='max-w-xl mx-auto text-center space-y-7'>
          <h2 className='text-2xl md:text-4xl font-medium text-white'>People Say Nice Things</h2>
          <p className='text-white/60 text-sm md:text-base leading-relaxed'>
            Some of the most successful product teams in the world use. Not to mention the hundreds of
            thousands of other talented individuals who have lots of lovely things to say.
          </p>
        </div>

        <div className='w-full'>
          <Slider ref={sliderRef} {...settings} className='lp-11-slider space-y-4'>
            {feedbacks.map(({ content, author, role }, index) => (
              <div key={index} className='bg-[#1A1D1E] rounded-3xl p-8 space-y-14'>
                <p className='text-white/60 text-sm md:text-base md:leading-7 font-light'>{content}</p>

                <div className='flex items-center gap-2 sm:gap-4 '>
                  <Image src={avatar} alt={author} width={60} height={60} className='rounded-full' />

                  <div className='space-y-0.5'>
                    <p className='text-white text-base font-medium'>{author}</p>
                    <p className='text-[#F1F1F399] text-sm font-light'>{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
