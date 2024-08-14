import React from 'react';
import Image from 'next/image';
import avatar1 from '@/assets/landing-page-12/images/AvatarFeedback.svg';
import avatar2 from '@/assets/landing-page-12/images/Avatar2Feedback.svg';
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
    <div className='py-40 px-4'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-20'>
          Supporting over 1 million
          <br />
          developers and designers
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-white rounded-lg border border-slate-200 shadow-sm md:h-36 p-6 flex flex-col'>
              <div className='flex items-center justify-between mb-2'>
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
                    <p className='text-gray-500 text-sm'>{testimonial.username}</p>
                  </div>
                </div>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g clipPath='url(#clip0_1344_1308)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M20.965 7.32927C20.2901 7.62154 19.5763 7.81422 18.846 7.90127C19.6124 7.44994 20.1887 6.73568 20.468 5.89127C19.7392 6.30858 18.9471 6.60381 18.123 6.76527C17.776 6.40035 17.3582 6.11005 16.8952 5.91215C16.4321 5.71424 15.9336 5.61288 15.43 5.61427C13.392 5.61427 11.74 7.24027 11.74 9.24427C11.74 9.53227 11.774 9.80827 11.835 10.0743C10.3737 10.0074 8.94237 9.6361 7.6328 8.98415C6.32323 8.33221 5.16423 7.41398 4.23 6.28827C3.91 6.82127 3.73 7.44127 3.73 8.11527C3.73 9.37827 4.383 10.4873 5.371 11.1393C4.78632 11.1209 4.21419 10.965 3.701 10.6843V10.7293C3.701 12.4903 4.971 13.9593 6.66 14.2933C6.118 14.436 5.55114 14.4572 5 14.3553C5.24313 15.082 5.70614 15.7152 6.32495 16.1672C6.94375 16.6192 7.68776 16.8677 8.454 16.8783C7.1425 17.8888 5.53265 18.4354 3.877 18.4323C3.585 18.4323 3.293 18.4153 3 18.3823C4.69729 19.4506 6.66245 20.0165 8.668 20.0143C15.458 20.0143 19.166 14.4803 19.166 9.69027C19.166 9.53527 19.166 9.38027 19.156 9.22527C19.8784 8.71379 20.503 8.07667 21 7.34427L20.965 7.32927Z'
                      fill='black'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1344_1308'>
                      <rect width='24' height='24' fill='white' transform='translate(0 0.814453)' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className='text-gray-600 '>{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
