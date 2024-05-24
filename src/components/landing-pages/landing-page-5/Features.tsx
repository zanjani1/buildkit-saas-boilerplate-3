// Features component to display the services provided by the application in the landing page.

import ServiceImageIcon1 from '@/assets/landing-page-5/icons/DesingerIcon';

const cardContent = [
  {
    icon: ServiceImageIcon1,
    title: 'Build your AI apps Fast',
    description:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
  },
  {
    icon: ServiceImageIcon1,
    title: 'Build your AI apps Fast',
    description:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
  },
  {
    icon: ServiceImageIcon1,
    title: 'Build your AI apps Fast',
    description:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
  },
];

export default async function Features() {
  return (
    <div id='features' className='max-w-7xl mx-auto p-4 space-y-20 md:my-48 my-28'>
      <div className='flex flex-col items-center justify-center'>
        <div className='space-y-7 max-w-3xl text-center'>
          <p className='text-3xl sm:text-4xl tracking-[1.08px] max-w-[560px] mx-auto leading-[44px] text-white font-medium'>
            Explore the power of AI apps generation
            <span className='text-lp5-primary'> Workflow</span>
          </p>
          <p className='text-lp5-secondary text-lg max-sm:text-sm lg:px-8 max-w-2xl md:leading-8 tracking-wide'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 mx-auto xl:w-full lg:w-[870px] lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {cardContent.map((item, index) => (
          <div
            key={index}
            className='rounded-2xl w-full border-[#171717] md:max-w-[416px] max-lg:mx-auto p-4 text-center bg-[#0D0D0D]'>
            <p className='text-2xl font-medium text-white/80 mt-4'>{item.title}</p>
            <p className='leading-6 mb-8 mt-2 text-center text-lp5-secondary'>{item.description}</p>
            <div>
              <item.icon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
