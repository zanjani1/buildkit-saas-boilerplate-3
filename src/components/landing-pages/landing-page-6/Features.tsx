import Image from 'next/image';
import features from '@/assets/landing-page-6/images/feature.svg';

const content =
  'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of Effort and Use our robust Deployable code.';

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
      <div className='md:max-w-6xl max-w-80 flex flex-col md:py-32 py-24 items-center md:gap-24 gap-16'>
        <div className='flex flex-col items-center gap-7 justify-between text-center '>
          <div className='flex flex-col gap-4'>
            <span className='font-semibold text-sm text-[#227AFF]'>What can you do with builder kit?</span>
            <h1 className='md:text-4xl text-2xl font-medium max-w-lg flex flex-col gap-2'>
              <span>Explore the power of</span>
              <span>AI apps generation Workflow</span>
            </h1>
          </div>

          <span className='text-stone-400 leading-6 max-w-[628px]'>{content}</span>
        </div>

        <div className='flex gap-4 flex-col md:flex-row '>
          {cardDetails.map((card) => {
            return (
              <div
                key={card.title}
                className='md:rounded-2xl rounded-lg flex flex-col md:flex md:gap-8 gap-4 border border-[#2B2F45] md:pb-8 md:pt-4 pt-2 pb-4 md:px-4 px-2 bg-[#161823]'>
                <Image src={card.url} alt={card.title} width={400} height={400} className='rounded-xl' />
                <div className='gap-4 flex flex-col text-center'>
                  <h2 className='font-medium md:text-2xl text-xl'>{card.title}</h2>
                  <span className='text-stone-400 text-sm'>{card.content}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
