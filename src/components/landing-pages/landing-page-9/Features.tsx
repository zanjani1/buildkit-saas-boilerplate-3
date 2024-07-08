// Features component of landing page

import LightningIcon from '@/assets/landing-page-9/icons/LightningIcon';

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

export default async function Features() {
  return (
    <div id='features' className='mx-auto px-4 py-20'>
      <div className='max-w-6xl flex flex-col justify-center items-center mx-auto space-y-16 md:space-y-20'>
        <div className='text-center'>
          <p className='text-lp7-primary text-sm font-semibold mb-4'>What can you do with builder kit?</p>
          <p className='font-medium max-w-sm leading-9 text-lp7-secondary tracking-[-1.68px] text-2xl sm:text-[32px]'>
            Essentially, everything you need to ship you first AI App
          </p>
        </div>

        <div className='grid grid-cols-1 mx-auto md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {cardContent.map((item, index) => (
            <div key={index} className='rounded-xl md:max-w-80 bg-[#FAFAFA] p-6'>
              <item.icon />

              <div className='mt-4'>
                <p className='text-[20px] leading-6 text-lp7-secondary font-semibold'>{item.title}</p>
                <p className='text-[#727272] text-sm mt-2'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
