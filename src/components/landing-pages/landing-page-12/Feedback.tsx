import React from 'react';
import Image from 'next/image';
import avatar1 from '@/assets/landing-page-12/images/AvatarFeedback.svg';
import avatar2 from '@/assets/landing-page-12/images/Avatar2Feedback.svg';
import { FaTwitter } from 'react-icons/fa6';

const testimonials = [
  {
    name: 'Smutchings',
    username: '@Smutchings',
    content: 'Builderkit takes care of everything from authentication to payments',
    avatar: avatar1,
  },
  {
    name: 'Smutchings',
    username: '@Smutchings',
    content: 'Builderkit takes care of everything from authentication to payments',
    avatar: avatar2,
  },
  {
    name: 'Smutchings',
    username: '@Smutchings',
    content: 'Builderkit takes care of everything from authentication to payments',
    avatar: avatar1,
  },
  {
    name: 'Smutchings',
    username: '@Smutchings',
    content: 'Builderkit takes care of everything from authentication to payments',
    avatar: avatar1,
  },
  {
    name: 'Smutchings',
    username: '@Smutchings',
    content: 'Builderkit takes care of everything from authentication to payments',
    avatar: avatar1,
  },
  {
    name: 'Smutchings',
    username: '@Smutchings',
    content: 'Builderkit takes care of everything from authentication to payments',
    avatar: avatar1,
  },
];

const Feedback = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 mt-40'>
      <h2 className='text-3xl md:text-4xl font-medium text-center md:leading-[44px] tracking-tight mb-20'>
        Supporting over 1 million
        <br />
        developers and designers
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='rounded-xl border border-gray-200 p-4 md:p-5'>
            <div className='flex justify-between items-start mb-3'>
              <div className='flex items-center gap-3'>
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={44}
                  height={44}
                  className='rounded-full'
                />
                <div>
                  <p className='font-semibold'>{testimonial.name}</p>
                  <p className='text-gray-400 text-sm font-light'>{testimonial.username}</p>
                </div>
              </div>
              <FaTwitter size={20} />
            </div>
            <p className='text-gray-700 text-sm md:w-80 leading-6'>{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
