// Features component to display the services provided by the application in the landing page.

import ServiceImageIcon1 from '@/assets/landing-page-5/icons/DesignerIcon';

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
    <section id='features' className='py-16 md:py-24'>
      <div className='container max-w-6xl mx-auto px-4'>
        <div className='text-center space-y-6 mb-16'>
          <p className='text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight'>
            Explore the power of AI apps generation
          </p>
          <p className='text-lp2-secondary md:text-lg leading-relaxed max-w-2xl mx-auto'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {cardContent.map((item, index) => (
            <div key={index} className='rounded-2xl space-y-4'>
              <div className='flex justify-center bg-[#FFF7F480] rounded-xl p-4'>
                <item.icon />
              </div>
              <h3 className='text-2xl font-semibold text-[#1C1C1C] leading-tight'>
                {item.title} <span className='text-lp2-primary'>{item.colorText}</span>
              </h3>
              <p className='text-lp2-secondary leading-relaxed'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
