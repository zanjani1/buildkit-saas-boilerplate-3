// This component renders the pricing plans for different subscription tiers.
// It utilizes the <RadioGroup> from HeadlessUI to toggle between 'monthly' and 'annually' payment frequencies.
// Tiers data is mapped to display each plan with its respective price, features, and a call-to-action.

'use client';
import BoldRightIcon from '@/assets/landing-page-2/icons/BoldRightIcon';
import OrangeArrowIcon from '@/assets/landing-page-2/icons/OrangeArrowIcon';
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
      <div className='flex flex-col w-full lg:flex-row items-start justify-between gap-10 mt-16'>
        {tiers.map((tier) => (
          // Card for each plan with its respective details and pricing.
          <div
            key={tier.id}
            className='w-full max-w-[23rem] bg-gradient-to-b shadow-sm from-white via-[rgba(249, 249, 250, 0.80)] to-transparent border md:p-6 pt-12 p-2 pb-6 rounded-2xl flex mx-auto flex-col mt-6'>
            <div className='text-center w-full'>
              {tier.name === 'Pro' && (
                <p className='flex gap-3 pb-2 text-center w-full text-sm font-medium text-lp2-primary justify-center items-center'>
                  {' '}
                  <span className='size-1.5 text-center bg-lp2-primary rounded-full block' /> MOST POPULAR
                </p>
              )}
              <p className='text-lg font-semibold'>{tier.name.toUpperCase()}</p>

              <p className='font-medium leading-loose text-4xl'>
                <span>{tier.sellingPrice.monthly}</span>
                <span className='text-[#9CA3AF]'>/mo</span>
              </p>
            </div>
            <ul role='list' className='space-y-2 mt-5'>
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className=' leading-relaxed grid pb-3 grid-cols-[auto,1fr] gap-3 font-medium items-center'>
                  <OrangeArrowIcon /> <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA button for the specific plan. */}

            <Button
              variant={'ghost'}
              className={`mt-12 border w-full ${tier.name === 'Pro' && 'bg-gradient-to-t from-lp2-primary to-lp2-primary/80 flex py-2 hover:bg-lp2-primary hover:text-white text-white flex-1'}`}>
              Get Now{' '}
              {tier.name === 'Pro' ? (
                <span className='ml-2'>
                  <BoldRightIcon />
                </span>
              ) : (
                <ArrowRightIcon className='ml-4' />
              )}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
