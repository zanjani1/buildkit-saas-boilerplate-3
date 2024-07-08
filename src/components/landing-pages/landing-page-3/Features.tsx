import Image from 'next/image';
import { features } from '@/assets/landing-page-3/images';

const cardDetails = [
  {
    title: 'Build your AI apps Fast',
    content: 'Builderkit takes care of everything, get your production-ready app within hours.',
    url: features,
  },
  {
    title: 'Build your AI apps Fast',
    content: 'Builderkit takes care of everything, get your production-ready app within hours.',
    url: features,
  },
  {
    title: 'Build your AI apps Fast',
    content: 'Builderkit takes care of everything, get your production-ready app within hours.',
    url: features,
  },
];

export default async function Features() {
  return (
    <div id='features' className='flex justify-center'>
      <div className='md:max-w-6xl max-w-80 flex flex-col md:my-56 my-24 items-center gap-24'>
        <div className='flex flex-col items-center gap-7 justify-between text-center'>
          <p className='md:text-4xl text-2xl font-medium max-w-lg flex flex-col gap-2'>
            <span>Explore the power of</span>
            <span>AI apps generation Workflow</span>
          </p>
          <span className='text-stone-400 leading-6 max-w-2xl'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </span>
        </div>

        <div className='flex gap-4 flex-col md:flex-row '>
          {cardDetails.map((card) => {
            return (
              <div
                key={card.title}
                className='rounded-2xl flex flex-col md:flex md:gap-8 gap-4 border border-[#171717] md:pt-8 md:pb-4 pb-2 pt-4 md:px-4 px-2'>
                <div className='gap-4 flex flex-col text-center'>
                  <p className='font-medium md:text-2xl text-xl'>{card.title}</p>
                  <span className='text-stone-400 text-sm'>{card.content}</span>
                </div>

                <Image src={card.url} alt={card.title} width={400} height={400} className='rounded-xl' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
