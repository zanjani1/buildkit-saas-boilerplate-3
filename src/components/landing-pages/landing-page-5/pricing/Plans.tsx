// This component renders the pricing plans for different subscription tiers.
// It utilizes the <RadioGroup> from HeadlessUI to toggle between 'monthly' and 'annually' payment frequencies.
// Tiers data is mapped to display each plan with its respective price, features, and a call-to-action.

'use client';

import OrangeArrowIcon from '@/assets/landing-page-5/icons/OrangeArrowIcon';
import { cn } from '@/utils/utils';
import { FaArrowRightLong } from 'react-icons/fa6';

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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6'>
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className='w-full h-fit shadow-sm bg-gradient-to-b from-white to-neutral-50 border border-[#E5E7EB] p-6 rounded-2xl flex mx-auto flex-col'>
            <div className='text-center space-y-4 w-full mt-4'>
              {tier.name === 'Pro' && (
                <div className='w-1/2 h-7 flex items-center justify-center gap-3 rounded-md mx-auto text-xs font-medium text-lp2-primary bg-[#FCF9F7]'>
                  <span className='size-1.5 text-center bg-lp2-primary rounded-full block' /> MOST POPULAR
                </div>
              )}
              <p className='text-lg font-semibold'>{tier.name.toUpperCase()}</p>

              <p className='font-semibold text-4xl'>
                <span>{tier.sellingPrice.monthly}</span>
                <span className='text-[#9CA3AF]'>/mo</span>
              </p>
            </div>
            <ul role='list' className='space-y-3 mt-6'>
              {tier.features.map((feature) => (
                <li key={feature} className='flex items-start gap-3 font-medium'>
                  <OrangeArrowIcon /> <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA button for the specific plan. */}
            <button
              className={cn(
                'w-full h-12 font-semibold flex items-center justify-center gap-2 mt-12 text-sm',
                tier.name === 'Pro'
                  ? 'bg-gradient-to-t from-lp2-primary to-lp2-primary/80 hover:bg-lp2-primary hover:text-white text-white rounded-xl'
                  : 'bg-gradient-to-b from-white to-gray-100 border border-gray-200 rounded-lg'
              )}>
              Get Now <FaArrowRightLong />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
