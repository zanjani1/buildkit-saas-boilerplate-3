// Product component of landing page

import StarICon from '@/assets/landing-page-2/icons/StarICon';

const cardContent = [
  {
    icon: StarICon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: StarICon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: StarICon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: StarICon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: StarICon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: StarICon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
];

export default async function Product() {
  return (
    <div id='product' className=' mx-auto p-4'>
      <div className='max-w-6xl flex flex-col justify-center items-center mx-auto py-20 space-y-20'>
        <div className='space-y-7 max-w-2xl'>
          <p className='font-semibold text-5xl text-center '>
            <span className='text-primary-lp2'>Essentially </span> , everything you need to ship you first AI
            App
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16 '>
          {cardContent.map((item, index) => (
            <div key={index} className='rounded-2xl space-y-8 border border-[#E5E7EB] p-4'>
              <div className='flex '>
                <item.icon />
              </div>
              <div className=''>
                <p className='text-2xl font-semibold'>{item.title}</p>
                <p className='text-[#374151] mt-4'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
