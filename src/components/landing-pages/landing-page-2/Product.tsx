// Product component of landing page

import StarIcon from '@/assets/landing-page-2/icons/StarIcon';

const cardContent = [
  {
    icon: StarIcon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: StarIcon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: StarIcon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: StarIcon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: StarIcon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    icon: StarIcon,
    title: 'Quality apps',
    description: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
];

export default async function Product() {
  return (
    <div id='product' className=' mx-auto p-4 mb-12'>
      <div className='max-w-6xl flex flex-col justify-center items-center mx-auto py-20 space-y-20'>
        <div className='space-y-7 max-w-2xl'>
          <p className='font-semibold sm:leading-[54px] max-w-screen-sm px-2 tracking-tighter text-3xl sm:text-5xl text-center '>
            <span className='text-lp2-primary'>Essentially </span> , everything you need to ship you first AI
            App
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
          {cardContent.map((item, index) => (
            <div
              key={index}
              className='rounded-3xl max-w-[360px] shadow-sm space-y-10 border border-[#E5E7EB] p-6'>
              <div className='flex '>
                <item.icon />
              </div>
              <div>
                <p className='text-2xl leading-7 font-semibold'>{item.title}</p>
                <p className='text-lp2-secondary font-medium mt-4 pr-2'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
