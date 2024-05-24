// This is the Pricing component of the landing page.

import Plans from '@/components/landing-pages/landing-page-2/pricing/Plans';

export default async function Pricing() {
  return (
    <div id='pricing' className='max-w-6xl mx-auto px-4 md:py-28 py-14'>
      <div className='flex flex-col items-center justify-center'>
        <h4 className='font-semibold max-w-xl text-5xl max-sm:text-3xl text-center'>
          <span className='text-lp2-primary'> Pricing</span> plan
        </h4>
        <Plans />
      </div>
    </div>
  );
}
