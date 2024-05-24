// Features component to display the services provided by the application in the landing page.

import ServiceImageIcon1 from '@/assets/landing-page-2/icons/DesignerIcon';

const cardContent = [
  {
    icon: ServiceImageIcon1,
    colorText: 'Fast',
    title: 'Build your AI apps',
    description:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
  },
  {
    icon: ServiceImageIcon1,
    colorText: 'Fast',
    title: 'Build your AI apps',
    description:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
  },
  {
    icon: ServiceImageIcon1,
    colorText: 'Fast',
    title: 'Build your AI apps',
    description:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
  },
];

export default async function Features() {
  return (
    <div id='features' className='max-w-6xl mx-auto p-4 space-y-[72px] my-20'>
      <div className='flex flex-col items-center justify-center'>
        <div className='space-y-7 max-w-3xl'>
          <p className='text-center text-[#1C1C1C] max-w-lg mx-auto text-5xl max-sm:text-3xl leading-tight font-semibold'>
            Explore the power of AI apps generation
          </p>
          <p className='text-lp2-secondary leading-[28.8px] max-w-2xl text-center md:text-lg md:leading-8 tracking-wide'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 mx-auto xl:w-full lg:w-[870px] md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {cardContent.map((item, index) => (
          <div
            key={index}
            className='rounded-2xl w-full max-md:text-center md:max-w-[368px] mx-auto space-y-4'>
            <div className='flex justify-center bg-[#FFF7F480] rounded-xl'>
              <item.icon />
            </div>

            <p className='text-[2rem] text-[#1C1C1C] leading-10 pt-2 tracking-[-2px] font-semibold'>
              {item.title} <span className='text-lp2-primary'>{item.colorText}</span>
            </p>

            <p className='leading-7 text-lp2-secondary'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
