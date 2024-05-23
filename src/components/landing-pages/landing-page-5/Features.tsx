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
    <div id='features' className='max-w-6xl mx-auto p-4 space-y-20 my-48'>
      <div className='flex flex-col items-center justify-center'>
        <div className='space-y-7 max-w-3xl text-center'>
          <p className='text-4xl max-w-xl mx-auto leading-10 text-white font-medium'>
            Explore the power of AI apps generation
            <span className='text-lp5-primary'> Workflow</span>
          </p>

          <p className='text-lp5-secondary lg:px-8 font-medium max-w-2xl md:leading-8 tracking-wide'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 '>
        {cardContent.map((item, index) => (
          <div key={index} className='rounded-2xl p-4 text-center bg-[#0D0D0D]'>
            <p className='text-2xl font-medium text-white/80 mt-8'>{item.title}</p>
            <p className='font-medium leading-6 mt-2 text-center text-lp5-secondary'>{item.description}</p>
            <div className='flex justify-center mt-8 -mb-9'>
              <item.icon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
