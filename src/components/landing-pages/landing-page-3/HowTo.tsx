import { howTo } from '@/assets/landing-page-3/images';
import Image from 'next/image';

export default async function HowTo() {
  const heading = 'Revolutionize your workflow';
  const content =
    'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of Effort and Use our robust Deployable code.';
  const headingCard = 'Build your AI apps fast';
  const contentCard =
    'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.';
  return (
    <div id='about' className='flex flex-col md:px-32 px-8 my-40 gap-20 items-center'>
      <div className='flex flex-col gap-6 items-center '>
        <h1 className='md:text-4xl text-xl font-medium'>{heading}</h1>
        <span className='text-stone-500 text-sm md:text-base max-w-2xl text-center text-balance '>
          {content}
        </span>
      </div>
      <div className='flex md:gap-4 gap-2 flex-col md:flex-row'>
        {[0, 1, 2].map((i) => {
          return (
            <div className='flex flex-col md:gap-6 gap-3 max-w-96' key={i}>
              <Image src={howTo} width={500} height={500} alt='how-to' className='w-full' />
              <div className='flex flex-col gap-3'>
                <h3 className='font-medium md:text-2xl text-xl'>{headingCard}</h3>
                <span className='text-stone-500 text-sm md:text-base'>{contentCard}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
