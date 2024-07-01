// Product component of landing page

import ChatIcon from '@/assets/landing-page-4/icons/ChatIcon';
import IntegrationIcon from '@/assets/landing-page-4/icons/IntegrationIcon';
import TaskIcon from '@/assets/landing-page-4/icons/TaskIcon';
import UserIcon from '@/assets/landing-page-4/icons/UserIcon';

const items = [
  {
    icon: UserIcon,
    title: 'Expertise & Innovation',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: TaskIcon,
    title: 'Organized tasks',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: ChatIcon,
    title: 'Easy Feedback Sharing',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: IntegrationIcon,
    title: 'Seamless Integration',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
];

export default async function Product() {
  return (
    <div id='product' className='bg-waves bg-[#EDF6FF] mx-auto p-4'>
      <div className='max-w-4xl flex flex-col justify-center items-center mx-auto py-20 space-y-20'>
        <div className='space-y-7 max-w-xl'>
          <p className='text-primary text-xs md:text-sm text-center font-bold leading-normal tracking-widest uppercase'>
            WHY CHOOSE US
          </p>
          <p className='text-center text-3xl md:text-4xl leading-normal md:leading-snug'>
            People choose us because we serve the best for everyone
          </p>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-16'>
          {items.map((item, index) => (
            <div key={index} className='flex items-start'>
              <div className='mr-4'>
                <item.icon />
              </div>
              <div>
                <p className='text-xl font-semibold mb-2'>{item.title}</p>
                <p className='text-secondary/90 leading-relaxed'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
