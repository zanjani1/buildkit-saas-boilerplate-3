// This component renders the pricing plans for different subscription tiers.
// It utilizes the <RadioGroup> from HeadlessUI to toggle between 'monthly' and 'annually' payment frequencies.
// Tiers data is mapped to display each plan with its respective price, features, and a call-to-action.

'use client';

import BoldRightIcon from '@/assets/landing-page-2/icons/BoldRightIcon';
import OrangeArrowIcon from '@/assets/landing-page-2/icons/OrangeArrowIcon';
import { cn } from '@/utils/utils';

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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-16'>
        {tiers.map((tier) => (
          // Card for each plan with its respective details and pricing.
          <div
            key={tier.id}
            className='w-full h-fit md:max-w-sm border-[#171717] bg-[#0D0D0D] shadow-sm text-white rounded-2xl p-4 sm:p-6 mx-auto mt-3'>
            <div className='text-center w-full mt-4'>
              {tier.name === 'Pro' && (
                <div className='w-1/2 h-8 flex items-center justify-center gap-3 rounded-md mx-auto text-xs font-medium text-lp2-primary bg-[#FCF9F712]'>
                  <span className='size-1.5 text-center bg-lp2-primary rounded-full block' /> MOST POPULAR
                </div>
              )}
              <p className='text-lg font-semibold mt-2'>{tier.name.toUpperCase()}</p>

              <p className='font-medium leading-loose text-4xl'>
                <span>{tier.sellingPrice.monthly}</span>
                <span className='text-[#9CA3AF]'>/mo</span>
              </p>
            </div>
            <ul role='list' className='space-y-5 mt-5 '>
              {tier.features.map((feature) => (
                <li key={feature} className='flex items-start leading-relaxed gap-3 font-medium'>
                  <OrangeArrowIcon /> <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA button for the specific plan. */}
            <button
              className={cn(
                'w-full h-12 md:h-14 flex items-center justify-center gap-2 rounded-full mt-12 text-sm',
                tier.name === 'Pro'
                  ? 'bg-gradient-to-t from-lp2-primary to-lp2-primary/80 hover:bg-lp2-primary hover:text-white text-white'
                  : 'bg-[#262626] hover:bg-[#262626]/90'
              )}>
              Get Now <BoldRightIcon />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
