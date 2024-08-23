import React from 'react';
import Image from 'next/image';
import avatar1 from '@/assets/landing-page-12/images/AvatarFeedback.svg';
import avatar2 from '@/assets/landing-page-12/images/Avatar2Feedback.svg';

interface Testimonial {
  name: string;
  username: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
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

const TwitterIcon: React.FC = () => (
  <svg width='20' height='20' viewBox='0 0 24 24' fill='black' xmlns='http://www.w3.org/2000/svg'>
    <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
  </svg>
);

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className='bg-white rounded-lg border border-gray-200 md:py-6 md:px-5 py-5 px-4'>
    <div className='flex justify-between items-start mb-3'>
      <div className='flex items-center'>
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className='rounded-full mr-3'
        />
        <div>
          <p className='font-semibold'>{testimonial.name}</p>
          <p className='text-gray-500 text-sm font-light'>{testimonial.username}</p>
        </div>
      </div>
      <TwitterIcon />
    </div>
    <p className='text-gray-700 text-sm md:w-80 leading-6'>{testimonial.content}</p>
  </div>
);

const Feedback: React.FC = () => {
  return (
    <div className='py-40 px-4'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-semibold text-center mb-20'>
          Supporting over 1 million
          <br />
          developers and designers
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
