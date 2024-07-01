import { howTo } from '@/assets/landing-page-6/images';
import Image from 'next/image';

const workflows = [
  {
    heading: 'Build your AI apps fast',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    image: howTo,
  },
  {
    heading: 'Build your AI apps fast',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    image: howTo,
  },
  {
    heading: 'Build your AI apps fast',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    image: howTo,
  },
];

export default async function Features() {
  return (
    <div id='features' className='flex flex-col md:px-32 px-8 my-40 gap-16 items-center'>
      <div className='flex flex-col gap-6 items-center '>
        <p className='md:text-4xl text-xl font-medium'>Revolutionize your workflow</p>
        <p className='text-stone-500 text-sm md:text-base max-w-2xl text-center text-balance '>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of
          Effort and Use our robust Deployable code.
        </p>
      </div>

      <div className='flex md:gap-4 gap-2 flex-col md:flex-row'>
        {workflows.map((item, index) => (
          <div className='flex flex-col md:gap-6 gap-3 max-w-96' key={index}>
            <Image src={item.image} width={500} height={500} alt='how-to' className='w-full' />
            <div className='flex flex-col gap-3'>
              <h3 className='font-medium md:text-2xl text-xl'>{item.heading}</h3>
              <span className='text-stone-500 text-sm md:text-base'>{item.content}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
