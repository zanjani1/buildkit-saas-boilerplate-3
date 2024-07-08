// Product component of landing page

import LightningIcon from '@/assets/landing-page-2/icons/LightningIcon';

const cardContent = [
  {
    icon: LightningIcon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: LightningIcon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: LightningIcon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: LightningIcon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: LightningIcon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: LightningIcon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
];

export default async function Product() {
  return (
    <div id='product' className='mx-auto p-4'>
      <div className='flex flex-col justify-center items-center mx-auto space-y-20'>
        <div className='space-y-7 max-w-4xl text-center'>
          <p className='max-w-xl font-medium mx-auto lg:px-2 text-2xl sm:text-4xl text-white'>
            Essentially, <span className='text-[#BC86FF]'> everything </span> you need to ship you{' '}
            <span className='text-[#BC86FF]'> first AI App</span>
          </p>
          <p className='text-lp5-secondary text-lg max-sm:text-sm max-w-2xl md:leading-8 tracking-wide'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {cardContent.map((item, index) => (
            <div
              key={index}
              className='rounded-2xl md:max-w-64 space-y-2 border bg-[#0D0D0D] border-[#171717] p-4'>
              <div>
                <item.icon />
              </div>
              <div>
                <p className='text-[#F7F7F8] font-medium'>{item.title}</p>
                <p className='text-[#94989E] text-sm mt-2'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
