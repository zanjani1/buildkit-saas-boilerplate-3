// This is the Pricing component of the landing page.

import Plans from './Plans';

export default async function Pricing() {
  return (
    <section id='pricing' className='py-16 md:py-24'>
      <div className='container max-w-6xl mx-auto px-4'>
        <p className='text-3xl sm:text-5xl font-semibold text-center mb-16'>
          <span className='text-lp2-primary'>Pricing</span> plan
        </p>
        <Plans />
      </div>
    </section>
  );
}
