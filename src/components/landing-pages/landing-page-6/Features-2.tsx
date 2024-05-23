import { Lightning } from '@/assets/landing-page-6/icons';
import Image from 'next/image';

const heading = 'Essentially, everything you need to ship you first AI App ';
const content =
  'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of Effort and Use our robust Deployable code.';

const cardDetails = [
  {
    title: 'Quality apps',
    content: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    title: 'Quality apps',
    content: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    title: 'Quality apps',
    content: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    title: 'Quality apps',
    content: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    title: 'Quality apps',
    content: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    title: 'Quality apps',
    content: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
];

export default async function Features2() {
  return (
    <div className='flex flex-col md:py-32 py-16 items-center md:gap-20 gap-10'>
      <div className='flex flex-col gap-7 items-center max-md:max-w-80'>
        <div className='flex flex-col gap-4 items-center'>
          <span className='font-semibold text-sm text-[#227AFF]'>What can you do with builder kit?</span>
          <h1 className='font-medium md:text-4xl text-2xl max-w-xl text-center'>{heading}</h1>
        </div>

        <span className='md:text-lg md:max-w-[642px] text-stone-400 text-center '>{content}</span>
      </div>

      <div className='flex md:grid grid-cols-3 flex-col md:gap-6 gap-4  flex-wrap'>
        {cardDetails.map((card, index) => {
          return (
            <div
              key={index}
              className='md:rounded-3xl rounded-lg flex flex-col gap-2 bg-[#161823] md:p-6 p-4 w-80 items-start'>
              <div className='flex flex-col gap-4'>
                <Image src={Lightning} width={25} height={25} alt='logo' className='size-8' />
                <h1 className='text-xl font-semibold'>{card.title}</h1>
              </div>

              <p className='text-sm text-stone-400'>{card.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
