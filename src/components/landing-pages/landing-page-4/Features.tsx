// Features component to display the services provided by the application in the landing page.

import ServiceImageIcon1 from '@/assets/landing-page-4/icons/ServiceImageIcon1';
import ServiceImageIcon2 from '@/assets/landing-page-4/icons/ServiceImageIcon2';
import ServiceImageIcon3 from '@/assets/landing-page-4/icons/ServiceImageIcon3';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Button } from '@/components/ui/button';

const cardContent = [
  {
    icon: ServiceImageIcon1,
    bgColor: '#68D585',
    title: 'Custom AI Development',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: ServiceImageIcon2,
    bgColor: '#473BF0',
    title: 'AI Integration Services',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: ServiceImageIcon3,
    bgColor: '#F64B4B',
    title: 'AI Powered Sites',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
];

const serviceFeatures = [
  {
    title: '1M+',
    description: 'Customers visit Omega every month to get their service done.',
  },
  {
    title: '92%',
    description: 'Satisfaction rate comes from our awesome customers.',
  },
  {
    title: '4.9/5.0',
    description: 'Average customer ratings we have got all over internet.',
  },
];

export default async function Features() {
  return (
    <div id='features' className='max-w-6xl mx-auto p-4 space-y-20 my-20'>
      <div className='flex flex-col items-center justify-center'>
        <div className='space-y-7 max-w-xl'>
          <p className='text-primary text-xs md:text-sm text-center font-bold leading-normal tracking-widest uppercase'>
            OUR SERVICES
          </p>
          <p className='text-center text-3xl md:text-4xl leading-normal md:leading-snug'>
            We provide great services for our customers based on needs
          </p>
          <p className=' text-secondary/90 text-center text-lg md:text-xl font-light md:leading-8 tracking-wide'>
            With lots of unique blocks, you can easily build a page without coding. Build your next
            consultancy website within few minutes.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
        {cardContent.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bgColor }}
            className='px-8 py-6 rounded-2xl space-y-8'>
            <div className='flex justify-center'>
              <item.icon />
            </div>
            <div className='text-white text-center'>
              <p className='text-2xl font-medium'>{item.title}</p>
              <p className='font-light mt-4'>{item.description}</p>
              <Button variant='link' className='text-white flex items-center gap-2 mx-auto mt-8'>
                Learn more
                <BiRightArrowAlt size={20} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-28'>
        {serviceFeatures.map((item, index) => (
          <div key={index}>
            <p className='text-center text-5xl leading-snug'>{item.title}</p>
            <p className='text-secondary/90 text-center text-lg mt-4'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
