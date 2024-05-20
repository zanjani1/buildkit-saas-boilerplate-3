// This is the Pricing component of the landing page.

import Plans from './Plans';

export default async function Pricing() {
  return (
    <div id='pricing' className='max-w-6xl mx-auto px-4 py-28'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-4xl mb-7 leading-snug'>Pricing</p>
        <p className='md:w-1/2 text-lg text-secondary font-light text-center mb-16'>
          With lots of unique blocks, you can easily build a page without coding. Build your next landing
          page.
        </p>

        <Plans />
      </div>
    </div>
  );
}
