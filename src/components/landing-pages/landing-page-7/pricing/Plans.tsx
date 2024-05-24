// This component renders the pricing plans for different subscription tiers.
// It utilizes the <RadioGroup> from HeadlessUI to toggle between 'monthly' and 'annually' payment frequencies.
// Tiers data is mapped to display each plan with its respective price, features, and a call-to-action.

'use client';

import TickIcon from '@/assets/landing-page-7/icons/TickIcon';
import { cn } from '@/utils/utils';
import { Button } from '@/components/landing-pages/landing-page-7/Button';
import ArrowBlack from '@/assets/landing-page-7/icons/ArrowBlack';
import ArrowWhite from '@/assets/landing-page-7/icons/ArrowWhite';

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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mt-16'>
        {tiers.map((tier) => (
          // Card for each plan with its respective details and pricing.
          <div
            key={tier.id}
            className={cn(
              'w-full h-fit md:max-w-sm border-[#171717] bg-[#3A556E0D] shadow-sm gap-2 text-[#1C1C1C] rounded-2xl p-3 sm:p-6 mx-auto mt-3',
              tier.id === 'ultimate' && 'bg-[#E5F4FF]'
            )}>
            <div className='w-full mt-6'>
              <p className='text-lg font-semibold'>{tier.name.toUpperCase()}</p>

              <p className='font-medium mt-2 mb-8 text-4xl'>
                <span>{tier.sellingPrice.monthly}</span>
                <span className='text-[#9CA3AF]'>/mo</span>
              </p>
              <p>{tier.description}</p>
            </div>
            <ul role='list' className='space-y-4 mt-8'>
              {tier.features.map((feature) => (
                <li key={feature} className='leading-relaxed flex gap-3 font-medium'>
                  <TickIcon /> <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA button for the specific plan. */}

            <Button
              variant={tier.id === 'pro' ? 'default' : 'ghost'}
              size={'lg'}
              className='flex w-full mt-16 py-6 px-8 font-semibold'>
              Get Now {tier.id === 'pro' ? <ArrowWhite /> : <ArrowBlack />}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
