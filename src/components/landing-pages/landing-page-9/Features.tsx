// Product component of landing page

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
    <div id='features' className='mx-auto px-4 py-20 md:py-28 bg-[#F6FFF8]'>
      <div className='max-w-6xl flex flex-col justify-center items-center mx-auto space-y-16 md:space-y-20'>
        <div className='text-center'>
          <p className='max-w-[690px] leading-tight text-gray-900 tracking-[-1.5px] text-3xl sm:text-5xl'>
            Essentially, everything you need to ship you first AI App
          </p>
        </div>

        <div className='grid grid-cols-1 mx-auto md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-6'>
          {cardContent.map((item, index) => (
            <div key={index} className='p-6 flex gap-5'>
              <div>
                <item.icon />
              </div>
              <div>
                <p className='text-lg leading-6 text-lp9-primary font-semibold'>{item.title}</p>
                <p className='text-gray-500 leading-6 text-sm mt-2.5'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
