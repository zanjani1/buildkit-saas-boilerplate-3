// This component renders the pricing plans for different subscription tiers.
// It utilizes the <RadioGroup> from HeadlessUI to toggle between 'monthly' and 'annually' payment frequencies.
// Tiers data is mapped to display each plan with its respective price, features, and a call-to-action.

'use client';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const tiers = [
  {
    name: 'Free',
    id: 'free',
    sellingPrice: { monthly: '$0' },
    features: ['NextJS Boilerplate', 'AI Models', '5 Demo Apps'],
  },
  {
    name: 'Pro',
    id: 'pro',
    sellingPrice: { monthly: '$149' },
    features: [
      'NextJS Boilerplate',
      'AI Models',
      '5 Demo Apps',
      'GAuth & Magic Link',
      'Stripe & Lemon Squeezy Payments',
      'Privacy Policy & ToS',
    ],
  },
  {
    name: 'Ultimate',
    id: 'ultimate',
    sellingPrice: { monthly: '$199' },
    features: [
      'NextJS Boilerplate',
      'AI Models',
      '5 Demo Apps',
      'GAuth & Magic Link',
      'Stripe & Lemon Squeezy Payments',
      'Privacy Policy & ToS',
      'Supabase',
      'Email integration',
      'SEO',
      'App Admin Dashboard',
      'Advanced API Set Up on Digital Ocean',
    ],
  },
];

// Each plan might have different components rendered based on its type (e.g., Trial vs. Standard vs. Premium).
// It uses internal state to manage the selected frequency of payments (monthly/annually).
// This component dynamically renders plan details and pricing based on the selected frequency.
export default function Plans() {
  return (
    <>
      <div className='flex flex-col md:flex-row items-start justify-between  gap-10'>
        {tiers.map((tier) => (
          // Card for each plan with its respective details and pricing.
          <div key={tier.id} className='md:w-1/4 flex mx-auto flex-col mt-6 items-center justify-center  p-6'>
            {tier.name === 'Pro' && (
              <p className='flex gap-3  text-sm font-medium text-primary-lp2 justify- items-center'>
                {' '}
                <span className='size-1.5 bg-primary-lp2 rounded-full  block' /> MOST POPULAR
              </p>
            )}
            <p className='text-lg font-semibold'>{tier.name.toUpperCase()}</p>
            <div className='text-center'>
              <div className='flex items-end gap-1'>
                <p className='font-medium leading-loose text-5xl'>
                  <span className=''>{tier.sellingPrice.monthly}</span>
                  <span className='text-[#9CA3AF]'>/mo</span>
                </p>
              </div>
              {/* <p className='text-sm opacity-60'>{tier.description}</p> */}
            </div>
            <ul role='list' className='space-y-2 '>
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className=' leading-relaxed grid grid-cols-[auto,1fr]  gap-3 font-medium items-center '>
                  <ArrowRightIcon className='text-primary-lp2 size-4  w-fit' /> <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA button for the specific plan. */}

            <Button
              variant={'ghost'}
              className={`mt-12 ${tier.name === 'Pro' && 'bg-gradient-to-t from-primary-lp2 to-primary-lp2/80 w-full  text-white flex-1'}`}>
              Get Now <ArrowRightIcon className='ml-4' />
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
