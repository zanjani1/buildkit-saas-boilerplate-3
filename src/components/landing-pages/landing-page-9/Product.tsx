// Products component to display the services provided by the application in the landing page.

import ServiceImageIcon1 from '@/assets/landing-page-9/icons/DesignerIcon';

const cardContent = [
  {
    image: ServiceImageIcon1,
    title: 'Build your AI apps Fast',
    description:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
  },
  {
    image: ServiceImageIcon1,
    title: 'Build your AI apps Fast',
    description:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
  },
  {
    image: ServiceImageIcon1,
    title: 'Build your AI apps Fast',
    description:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
  },
];

const Products = () => {
  return (
    <div id='product' className='max-w-7xl mx-auto  px-4 py-20'>
      <div className='text-center mb-16'>
        <p className='text-lp7-primary text-sm font-semibold mb-4'>What can you do with builder kit?</p>
        <p className='font-medium max-w-xl leading-9 text-lp7-secondary tracking-[-1.68px] text-3xl sm:text-[32px] mx-auto'>
          Explore the power of AI apps generation
        </p>
        <p className='max-w-xl text-lp7-sub leading-7 mt-2 mx-auto'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of
          Effort and Use our robust Deployable code.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {cardContent.map((item, index) => (
          <div
            key={index}
            className='rounded-2xl w-full md:max-w-md mx-auto bg-[#FCFCFC] border border-[#EDEDED] p-4'>
            <div className='flex justify-center md:mb-5 h-fit rounded-xl border border-[#F1F1F1] mb-4'>
              <item.image />
            </div>
            <p className='text-xl text-lp7-secondary font-semibold mb-3'>{item.title}</p>
            <p className='text-[#757679] leading-7'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
