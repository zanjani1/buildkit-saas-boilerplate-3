import Image from 'next/image';
import features from '@/assets/landing-page-6/images/feature.svg';

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

export default async function Features() {
  return (
    <div id='features' className='flex justify-center'>
      <div className='md:max-w-[1030px] max-w-80 flex flex-col md:py-32 py-24 items-center md:gap-24 gap-16'>
        <div className='flex flex-col items-center gap-7 justify-between text-center'>
          <div className='flex flex-col gap-4'>
            <span className='font-medium text-sm text-[#227AFF]'>What can you do with builder kit?</span>
            <h1 className='md:text-4xl text-2xl font-semibold max-w-lg flex flex-col gap-2'>
              <span>Explore the power of</span>
              <span>AI apps generation Workflow</span>
            </h1>
          </div>

          <span className='text-[#A8A8A8] leading-6 max-w-[628px] md:text-lg'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </span>
        </div>

        <div className='flex gap-4 flex-col md:flex-row '>
          {cardDetails.map((card) => (
            <div
              key={card.title}
              className='md:rounded-3xl rounded-lg flex flex-col md:flex md:gap-8 gap-4 border border-[#2B2F45] p-4 bg-[#161823]'>
              <Image src={card.url} alt={card.title} width={400} height={400} className='rounded-lg' />
              <div className='gap-1.5 flex flex-col'>
                <h2 className='font-semibold md:text-xl text-lg'>{card.title}</h2>
                <span className='text-[#A8A8A8] leading-7'>{card.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
