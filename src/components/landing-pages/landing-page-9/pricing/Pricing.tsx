// This is the Pricing component of the landing page.

import Plans from './Plans';

export default async function Pricing() {
  return (
    <div id='pricing' className='max-w-6xl mx-auto px-4 py-20'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col justify-center items-center text-center'>
          <p className='text-lp7-primary text-sm font-semibold mb-5'>Pricing</p>
          <p className='font-medium max-w-xl leading-[38px] text-lp7-secondary tracking-[-1.68px] text-2xl md:text-4xl'>
            Flexible Pricing Plans
          </p>
          <p className='max-w-xl text-lp7-sub mt-2'>Start making smarter decisions</p>
        </div>

        <Plans />
      </div>
    </div>
  );
}
