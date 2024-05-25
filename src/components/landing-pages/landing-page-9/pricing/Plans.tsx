// This component renders the pricing plans for different subscription tiers.
// It utilizes the <RadioGroup> from HeadlessUI to toggle between 'monthly' and 'annually' payment frequencies.
// Tiers data is mapped to display each plan with its respective price, features, and a call-to-action.

'use client';

import ArrowRightMd from '@/assets/landing-page-9/icons/ArrowRightMd';
import TickIcon from '@/assets/landing-page-9/icons/TickIcon';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/utils';

const tiers = [
  {
    name: 'Pro',
    id: 'pro',
    sellingPrice: { monthly: '$149' },
    description: 'A pro plan grants you access to some cool features of builderkit.',
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
    description: 'An ultimate plan grants you access to some cool features of builderkit',
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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mt-20'>
        {tiers.map((tier) => (
          // Card for each plan with its respective details and pricing.
          <div
            key={tier.id}
            className={cn(
              'w-full h-fit md:max-w-sm bg-[#1F2E270D] shadow-sm gap-2 text-lp9-secondary rounded-md p-3 sm:p-6 mx-auto mt-3',
              tier.id === 'ultimate' && 'bg-[#E8F2EC]'
            )}>
            <div className='w-full mt-6'>
              <p className='text-lg font-semibold'>{tier.name.toUpperCase()}</p>

              <p className='font-medium mt-2 mb-8 text-4xl'>
                <span>{tier.sellingPrice.monthly}</span>
                <span className='text-[#9CA3AF]'>/mo</span>
              </p>
              <p className='text-sm md:text-base font-light'>{tier.description}</p>
            </div>
            <ul role='list' className='space-y-2 md:space-y-4 mt-8'>
              {tier.features.map((feature) => (
                <li key={feature} className='leading-relaxed flex gap-3 items-center text-sm md:text-base'>
                  <TickIcon /> <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA button for the specific plan. */}
            <Button
              size={'lg'}
              className={cn(
                'gap-2.5 w-full mt-16 py-6 px-8 font-semibold',
                tier.id === 'pro'
                  ? 'bg-lp9-primary hover:bg-lp9-primary/95'
                  : 'bg-white hover:text-lp9-primary hover:bg-white border border-[#E5E7EB] text-[#030712]'
              )}>
              Get Now{' '}
              <span className={cn(tier.id !== 'pro' && 'invert')}>
                <ArrowRightMd />{' '}
              </span>
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
