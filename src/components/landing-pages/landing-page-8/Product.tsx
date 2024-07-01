// Features component to display the services provided by the application in the landing page.

import ServiceImageIcon1 from '@/assets/landing-page-8/icons/DesingerIcon';

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

export default async function Product() {
  return (
    <div id='product' className='max-w-7xl mx-auto px-4 my-28'>
      <div className='flex flex-col justify-center items-center text-center'>
        <p className='max-w-md leading-10 text-lp9-secondary tracking-[-1.5px] text-3xl sm:text-4xl'>
          Explore the power of AI apps generation
        </p>
        <p className='max-w-[642px] text-lg text-gray-500 leading-8 mt-7'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of
          Effort and Use our robust Deployable code.
        </p>
      </div>

      <div className='grid grid-cols-1 mt-14 mx-auto gap-2 md:grid-cols-2 xl:grid-cols-3'>
        {cardContent.map((item, index) => (
          <div key={index} className='rounded-2xl w-full md:max-w-md mx-auto p-4'>
            <div className='flex justify-center md:mb-6 h-fit rounded-xl bg-[#F1F9F380]'>
              <item.icon />
            </div>

            <p className='text-2xl font-medium text-lp9-secondary md:mt-0 sm:-mt-8 tracking-tight leading-8'>
              {item.title}
              <span className='text-lp9-primary'> {item.colorText}</span>
            </p>
            <p className='leading-7 text-[16px] text-gray-500 mt-4'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
