import { LightningBoltIcon } from '@radix-ui/react-icons';

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

export default function Features2() {
  return (
    <div className='bg-gradient-feat-lp4'>
      <div
        id='product'
        className='flex bg-gradient-to-b from-black from-0% via-transparent to-black to-100% justify-center items-center'>
        <div className='flex flex-col gap-24 md:max-w-6xl max-w-80 items-center'>
          <div className='flex flex-col gap-7 font-medium text-center items-center'>
            <p className='md:max-w-xl md:text-4xl text-2xl'>
              Essentially, everything you need to ship you first AI App
            </p>
            <span className='text-stone-400 md:max-w-2xl md:text-base text-sm'>
              Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
              of Effort and Use our robust Deployable code.
            </span>
          </div>

          <div className='flex gap-4 flex-wrap'>
            {cardDetails.map((card) => {
              return (
                <div
                  key={card.title}
                  className='rounded-lg flex flex-col p-6 gap-5 border border-[#171717] max-w-[366px]'>
                  <LightningBoltIcon className='size-6 text-[#94989E]' />
                  <div className='gap-2 flex flex-col '>
                    <p className='leading-6 font-medium'>{card.title}</p>
                    <span className='text-stone-400 text-sm'>{card.content}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
