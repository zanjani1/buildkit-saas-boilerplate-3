// This is the Pricing component of the landing page.

import Plans from '@/components/landing-pages/landing-page-5/pricing/Plans';

export default async function Pricing() {
  return (
    <div id='pricing' className='max-w-6xl mx-auto px-4 py-28'>
      <div className='flex  flex-col items-center justify-center'>
        <h4 className='font-semibold text-white max-w-md leading-[44px] text-4xl max-sm:text-3xl text-center'>
          Start making
          <span className='text-lp2-primary'> smarter decisions</span>, Choose a plan
        </h4>

        <Plans />
      </div>
    </div>
  );
}
