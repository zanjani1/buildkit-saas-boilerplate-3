// Features component to display the services provided by the application in the landing page.

import ServiceImageIcon1 from '@/assets/landing-page-2/icons/DesignerIcon';
// import ServiceImageIcon2 from '@/assets/icons/ServiceImageIcon2';
// import ServiceImageIcon3 from '@/assets/icons/ServiceImageIcon3';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Button } from '../../ui/button';
import Image from 'next/image';

const cardContent = [
  {
    icon: ServiceImageIcon1,
    colorText: 'Fast',
    title: 'Build your AI apps',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: ServiceImageIcon1,
    colorText: 'Fast',
    title: 'Build your AI apps',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: ServiceImageIcon1,
    colorText: 'Fast',
    title: 'Build your AI apps',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
];

export default async function Features() {
  return (
    <div id='features' className='max-w-6xl mx-auto p-4 space-y-20 my-20'>
      <div className='flex flex-col items-center justify-center'>
        <div className='space-y-7 max-w-2xl'>
          <p className='text-center text-3xl md:text-5xl font-semibold leading-normal md:leading-snug'>
            Explore the power of AI apps generation
          </p>
          <p className=' text-secondary/90 text-center text-lg md:text-xl md:leading-8 tracking-wide'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
        {cardContent.map((item, index) => (
          <div key={index} className='rounded-2xl space-y-8'>
            <div className='flex justify-center -mb-10'>
              <item.icon />
            </div>
            <div className='text-center'>
              <p className='text-3xl font-semibold'>
                {item.title} <span className='text-primary-lp2'>{item.colorText}</span>{' '}
              </p>
              <p className='font-light mt-4'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
