import Image from 'next/image';
import features from '@/assets/landing-page-11/images/feature.svg';

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

export default function Features() {
  return (
    <div id='features' className='max-w-7xl mx-auto mt-32 md:mt-40 px-4'>
      <div className='flex flex-col items-center gap-8'>
        <p className='w-5/6 md:w-1/2 font-medium text-2xl md:text-4xl md:leading-tight text-zinc-900 text-center tracking-tight'>
          Essentially, everything you need to ship your first AI App
        </p>

        <p className='w-5/6 text-sm md:text-base text-zinc-950/60 text-center leading-relaxed'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within <br /> days. Save
          Hours of Effort and Use our robust Deployable code.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-6 mt-10'>
          {cardDetails.map((card, index) => (
            <div key={index} className='flex flex-col gap-2 md:gap-3'>
              <div className='rounded-3xl bg-[#EEEEEE] p-4 mb-3'>
                <Image
                  src={card.url}
                  alt={card.title}
                  width={171}
                  height={253.28}
                  className='rounded-lg mx-auto'
                />
              </div>

              <p className='font-semibold text-lg md:text-xl tracking-tight text-center text-zinc-900 leading-7'>
                {card.title}
              </p>

              <p className='text-zinc-950/60 md:text-base text-sm leading-6 md:leading-7 text-center'>
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
