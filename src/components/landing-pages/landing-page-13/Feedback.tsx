'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import avatar from '@/assets/landing-page-13/images/feedback.svg';

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

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: () => <div className='custom-dot' />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div id='testimonial' className='w-11/12 max-w-7xl mx-auto space-y-10 md:space-y-20 relative py-32'>
      <h2 className='text-3xl md:text-5xl font-medium text-center text-slate-950 md:leading-[60px] tracking-tight'>
        What our customers
        <br />
        are saying about us.
      </h2>

      <Slider {...settings} className='lp-13-slider md:space-x-6'>
        {feedbacks.map(({ author, content }, index) => (
          <div
            key={index}
            className='bg-white rounded-3xl gap-6 p-6 shadow-[0px_0px_6.8px_5px_#eaeaea40] space-y-6 border border-[#F1F1F1]'>
            <Image src={avatar} alt={author} width={64} height={64} />
            <div className='space-y-16 md:space-y-20'>
              <p className='text-[#687076] md:text-lg font-light leading-7 tracking-tight'>{content}</p>
              <p className='text-gray-800 font-medium text-lg'>{author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;
