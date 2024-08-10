// This is the Pricing component of the landing page.

import Plans from './Plans';

export default async function Pricing() {
  return (
    <div id='pricing' className='max-w-6xl mx-auto gap-20 mt-32 px-4'>
      <div className='flex flex-col items-center justify-center gap-20'>
        <div className='space-y-6 md:space-y-8'>
          <p className='font-medium text-slate-950 text-center tracking-tight text-2xl md:text-4xl'>
            Flexible Pricing Plans to Suit Your Needs
          </p>
          <p className='text-zinc-950/60 text-center'>Start making smarter decisions, Choose a plan</p>
        </div>

        <Plans />
      </div>
    </div>
  );
}
