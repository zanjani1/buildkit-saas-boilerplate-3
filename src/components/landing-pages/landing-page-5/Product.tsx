// Product component of landing page

import LightningIcon from '@/assets/landing-page-5/icons/LightningIcon';

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
    <div id='product' className=' mx-auto p-4'>
      <div className='max-w-6xl flex flex-col justify-center items-center mx-auto py-20 space-y-20'>
        <div className='space-y-7 max-w-2xl text-center'>
          <p className='font-semibold text-4xl text-white '>
            Essentially, <span className='text-[#BC86FF]'> everything </span> you need to ship you{' '}
            <span className='text-[#BC86FF]'> first AI App</span>
          </p>{' '}
          <p className='text-lp5-secondary text-lg font-normal md:text-xl md:leading-8 tracking-wide'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16 '>
          {cardContent.map((item, index) => (
            <div key={index} className='rounded-2xl space-y-2 border border-[#171717] p-4'>
              <div>
                <item.icon />
              </div>
              <div>
                <p className='text-[#F7F7F8] font-semibold'>{item.title}</p>
                <p className='text-[#94989E] text-sm mt-2'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
