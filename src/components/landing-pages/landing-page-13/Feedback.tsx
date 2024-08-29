'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import avatar from '@/assets/landing-page-13/images/feedback.svg';

interface Feedback {
  content: string;
  author: string;
}

const feedbacks = [
  {
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    author: 'Kevin Debru',
  },
  {
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    author: 'Kevin Debru',
  },
  {
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    author: 'Kevin Debru',
  },
  {
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    author: 'Kevin Debru',
  },
  {
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    author: 'Kevin Debru',
  },
  {
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    author: 'Kevin Debru',
  },
];

const FeedbackCard: React.FC<Feedback> = ({ content, author }) => (
  <div className='bg-white rounded-3xl gap-6 p-6 shadow-card space-y-6 border border-[#F1F1F1]'>
    <Image src={avatar} alt={author} width={64} height={64} />
    <div className='space-y-24'>
      <p className='text-[#687076] text-sm md:text-lg leading-7 tracking-tight'>{content}</p>
      <p className='text-gray-800 font-semibold text-lg'>{author}</p>
    </div>
  </div>
);

const Feedback: React.FC = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = useCallback(() => {
    if (window.innerWidth < 640) setSlidesToShow(1);
    else if (window.innerWidth < 1024) setSlidesToShow(2);
    else setSlidesToShow(3);
  }, []);

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, [updateSlidesToShow]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    customPaging: () => <div className='custom-dot' />,
  };

  return (
    <section id='testimonial' className='bg-white py-32 md:py-40 md:pb-60'>
      <div className='w-11/12 max-w-7xl mx-auto space-y-10 md:space-y-20 relative'>
        <h2 className='text-2xl md:text-5xl font-medium text-center text-slate-950 md:leading-[60px] tracking-tight'>
          What our customers
          <br />
          are saying about us.
        </h2>

        <Slider {...settings} className='feedback-slider md:px-6 px-4'>
          {feedbacks.map((feedback, index) => (
            <div key={index}>
              <FeedbackCard {...feedback} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Feedback;
