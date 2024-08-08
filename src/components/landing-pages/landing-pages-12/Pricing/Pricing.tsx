// This is the Pricing component of the landing page.

import Plans from './Plans';

export default async function Pricing() {
  return (
    <div id='pricing' className='max-w-6xl mx-auto px-4 md:py-32 py-12 gap-20'>
      <div className='flex flex-col items-center justify-center gap-10'>
        <div className='flex flex-col justify-center items-center text-center max-w-2xl gap-7'>
          <p className='font-medium max-w-2xl text-slate-950 tracking-tight text-2xl md:text-4xl'>
            Flexible Pricing Plans to Suit Your Needs
          </p>
          <p className='max-w-xl text-zinc-950/60 mt-2'>Start making smarter decisions, Choose a plan</p>
        </div>
        <div className='max-w-3xl'>
          <Plans />
        </div>
      </div>
    </div>
  );
}
