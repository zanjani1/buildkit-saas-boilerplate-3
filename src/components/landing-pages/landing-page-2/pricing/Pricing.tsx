// This is the Pricing component of the landing page.

import Plans from './Plans';

export default async function Pricing() {
  return (
    <div id='pricing' className='max-w-6xl mx-auto px-4 py-28'>
      <div className='flex  flex-col items-center justify-center'>
        <h4 className='font-semibold max-w-xl leading-[4.2rem] text-5xl max-sm:text-3xl text-center'>
          Start making
          <span className='text-lp2-primary'> smarter</span> decisions,Choose a plan
        </h4>

        <Plans />
      </div>
    </div>
  );
}
