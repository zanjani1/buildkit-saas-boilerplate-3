// Features component to display the services provided by the application in the landing page.

import ServiceImageIcon1 from '@/assets/landing-page-5/icons/DesingerIcon';

const cardContent = [
  {
    icon: ServiceImageIcon1,
    title: 'Build your AI apps Fast',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: ServiceImageIcon1,
    title: 'Build your AI apps Fast',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: ServiceImageIcon1,
    title: 'Build your AI apps Fast',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
];

export default async function Features() {
  return (
    <div id='features' className='max-w-6xl mx-auto p-4 space-y-20 my-24'>
      <div className='flex flex-col items-center justify-center'>
        <div className='space-y-7 max-w-2xl text-center'>
          <p className='text-4xl text-white font-medium'>
            Explore the power of AI apps generation
            <span className='text-lp5-primary'> Workflow</span>
          </p>
          <p className='text-lp5-secondary text-lg font-normal md:text-xl md:leading-8 tracking-wide'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 '>
        {cardContent.map((item, index) => (
          <div key={index} className='rounded-2xl text-center'>
            <p className='text-2xl font-medium text-white/80'>{item.title}</p>
            <p className='font-normal   text-lp5-secondary'>{item.description}</p>
            <div className='flex justify-center mt-20'>
              <item.icon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
