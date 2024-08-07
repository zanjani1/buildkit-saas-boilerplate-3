import Image from 'next/image';
import features from '@/assets/landing-page-12/images/feature.svg';

const cardDetails = [
  {
    title: 'Build your AI apps Fast',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    url: features,
  },
  {
    title: 'Build your AI apps Fast',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    url: features,
  },
  {
    title: 'Build your AI apps Fast',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    url: features,
  },
];

export default function Features2() {
  return (
    <div id='features' className='flex justify-center max-w-7xl mx-auto '>
      <div className='flex flex-col md:py-40 py-16 items-center md:gap-20 gap-10'>
        <div className='flex flex-col gap-7 items-center max-md:max-w-80'>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='font-medium text-2xl md:text-4xl max-w-xl text-zinc-900 text-center'>
              Essentially, everything you need to ship your first AI App
            </h1>
          </div>

          <p className='text-base md:max-w-[642px] text-zinc-950/60 text-center'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within <br /> days. Save
            Hours of Effort and Use our robust Deployable code.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {cardDetails.map((card, index) => (
            <div key={index} className='flex flex-col md:w-96 max-h-[435px] gap-6 md:px-0 px-4'>
              <div className='flex justify-center md:max-w-96 md:max-h-72 rounded-3xl bg-zinc-100 gap-3 py-4'>
                <div className=''>
                  <Image src={card.url} alt={card.title} width={171} height={253.28} className='rounded-lg' />
                </div>
              </div>
              <div className='flex flex-col gap-3 max-w-96 max-h-32'>
                <span className='font-semibold text-xl tracking-tight text-center text-zinc-900'>
                  {card.title}
                </span>
                <div className='max-w-96 max-h-20 gap-3 flex justify-center items-center'>
                  <span className='font-normal text-zinc-950/60 text-base leading-7 text-center '>
                    {card.content}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
