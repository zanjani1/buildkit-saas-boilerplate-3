import PricingPlans from './Plans';

export default async function Pricing() {
  return (
    <div id='pricing' className='max-w-6xl mx-auto gap-20 py-40 px-4'>
      <div className='flex flex-col items-center justify-center gap-20'>
        <div className='space-y-7'>
          <p className='font-medium text-slate-950 text-center tracking-tight text-3xl md:text-5xl md:leading-[60px]'>
            Flexible Pricing Pricing
            <br />
            Plans to Suit Your Needs
          </p>

          <p className='text-zinc-950/60 text-center'>Start making smarter decisions, Choose a plan</p>
        </div>

        <PricingPlans />
      </div>
    </div>
  );
}
