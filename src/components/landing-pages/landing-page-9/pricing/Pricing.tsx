// This is the Pricing component of the landing page.

import Plans from '@/components/landing-pages/landing-page-9/pricing/Plans';

export default async function Pricing() {
  return (
    <div id='pricing' className='max-w-6xl mx-auto px-4 py-16 md:py-28'>
      <div className='flex  flex-col items-center justify-center'>
        <div className='flex flex-col justify-center items-center text-center'>
          <p className='max-w-xl leading-[58px] tracking-[-1.5px] text-3xl sm:text-5xl'>Pricing Plans</p>
          <p className='max-w-xl tracking-tighter text-lg text-[#53535C] mt-4'>
            Start making smarter decisions, <br /> Choose a plan
          </p>
        </div>

        <Plans />
      </div>
    </div>
  );
}
