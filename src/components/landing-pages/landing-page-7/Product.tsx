// Features component to display the services provided by the application in the landing page.

import ServiceImageIcon1 from '@/assets/landing-page-7/icons/DesignerIcon';

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

export default async function Product() {
  return (
    <div id='product' className='max-w-7xl mx-auto  px-4 my-[120px]'>
      <div className='flex flex-col justify-center items-center text-center'>
        <p className='text-lp7-primary text-sm font-semibold mb-4'>What can you do with builder kit?</p>
        <p className='font-medium max-w-xl leading-9 text-lp7-secondary tracking-[-1.68px] text-3xl sm:text-[32px]'>
          Explore the power of AI apps generation
        </p>
        <p className='max-w-xl text-lp7-sub leading-7 mt-2'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of
          Effort and Use our robust Deployable code.
        </p>
      </div>

      <div className='grid grid-cols-1 mt-[72px] mx-auto gap-2 md:grid-cols-2 xl:grid-cols-3'>
        {cardContent.map((item, index) => (
          <div
            key={index}
            className='rounded-2xl w-full md:max-w-md mx-auto bg-[#FCFCFC] border border-[#EDEDED] p-4'>
            <div className='flex justify-center md:mb-5 h-fit rounded-xl border border-[#F1F1F1] mb-4'>
              <item.icon />
            </div>

            <p className='text-[20px] text-lp7-secondary tracking-tight leading-6 font-semibold'>
              {item.title}
            </p>

            <p className='leading-7 text-[#757679] mt-1.5'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
