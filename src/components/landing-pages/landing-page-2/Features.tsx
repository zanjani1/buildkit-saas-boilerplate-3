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
    <div id='features' className='max-w-6xl mx-auto p-4 space-y-20 my-20'>
      <div className='flex flex-col items-center justify-center'>
        <div className='space-y-7 max-w-3xl'>
          <p className='text-center text-[#1C1C1C] font-inter max-w-lg mx-auto leading-[57px] text-5xl max-sm:text-3xl font-semibold'>
            Explore the power of AI apps generation
          </p>
          <p className='text-lp2-secondary leading-[28.8px] text-center font-medium md:text-xl md:leading-8 tracking-wide'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
        {cardContent.map((item, index) => (
          <div key={index} className='rounded-2xl w-full max-w-[368px] mx-auto space-y-4'>
            <div className='flex justify-center -mb-2'>
              <item.icon />
            </div>

            <p className='text-[2rem] text-[#1C1C1C] tracking-tight leading-10 font-semibold'>
              {item.title} <span className='text-lp2-primary'>{item.colorText}</span>{' '}
            </p>

            <p className='font-semibold leading-7 -mt-2 text-lp2-secondary'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
