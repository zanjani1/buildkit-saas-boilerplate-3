// Product component of landing page

import StarIcon from '@/assets/landing-page-5/icons/StarIcon';

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
    <section id='product' className='py-16 md:py-24'>
      <div className='container max-w-6xl mx-auto px-4'>
        <div className='text-center space-y-6 mb-16'>
          <p className='text-3xl sm:text-5xl font-semibold leading-tight'>
            <span className='text-lp2-primary'>Essentially</span>, everything you need to ship your first AI
            App
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {cardContent.map((item, index) => (
            <div key={index} className='rounded-3xl shadow border border-[#E5E7EB] p-6'>
              <item.icon />
              <p className='text-2xl font-semibold mt-6 mb-4'>{item.title}</p>
              <p className='text-lp2-secondary'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
