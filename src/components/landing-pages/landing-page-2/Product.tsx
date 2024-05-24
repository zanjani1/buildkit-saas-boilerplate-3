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
          <p className='font-semibold sm:leading-tight max-w-screen-sm px-2 tracking-tighter text-3xl sm:text-5xl text-center '>
            <span className='text-lp2-primary'>Essentially </span> , everything you need to ship you first AI
            App
          </p>
        </div>

        <div className='grid grid-cols-1 mx-auto xl:w-full lg:w-[870px] md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8'>
          {cardContent.map((item, index) => (
            <div key={index} className='rounded-3xl md:max-w-[360px] shadow border border-[#E5E7EB] p-6'>
              <div>
                <item.icon />
              </div>
              <div>
                <p className='text-2xl leading-7 mt-10 font-semibold tracking-[-2%]'>{item.title}</p>
                <p className='text-lp2-secondary mt-4 pr-2'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
