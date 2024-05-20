// This component renders the pricing plans for different subscription tiers.
// It utilizes the <RadioGroup> from HeadlessUI to toggle between 'monthly' and 'annually' payment frequencies.
// Tiers data is mapped to display each plan with its respective price, features, and a call-to-action.

'use client';

import { RadioGroup } from '@headlessui/react';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { cn } from '@/utils/utils';
import { TypeSubscriptionInterval, TypeSubscriptionPlan } from '@/types/types';
import ButtonPayment from './ButtonPayment';
import SeparatorOr from '@/components/ui/separator-or';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const frequencies = [
  { value: 'monthly', label: 'Billed Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Billed Annually', priceSuffix: '/year' },
];

const tiers = [
  {
    name: 'Trial',
    id: 'trial',
    description: '50% Off on Annual Plans',
    actualPrice: { monthly: '', annually: '' },
    sellingPrice: { monthly: '', annually: '' },
    features: [
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    ],
  },
  {
    name: 'Standard',
    id: 'standard',
    description: '50% Off on Annual Plans',
    actualPrice: { monthly: '', annually: '$150' },
    sellingPrice: { monthly: '$15', annually: '$75' },
    features: [
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    ],
  },
  {
    name: 'Premium',
    id: 'premium',
    description: '50% Off on Annual Plans',
    actualPrice: { monthly: '', annually: '$300' },
    sellingPrice: { monthly: '$50', annually: '$150' },
    features: [
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    ],
  },
];

// Each plan might have different components rendered based on its type (e.g., Trial vs. Standard vs. Premium).
// It uses internal state to manage the selected frequency of payments (monthly/annually).
// This component dynamically renders plan details and pricing based on the selected frequency.
export default function Plans() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <>
      {/* <RadioGroup> is used here to allow the user to choose between monthly or annual billing. */}
      {/* It affects the display of prices and billing cycles dynamically based on the selection. */}
      <div className='flex justify-center mb-8'>
        <RadioGroup
          value={frequency}
          onChange={setFrequency}
          className='grid grid-cols-2 bg-white gap-x-1 rounded-full p-1 text-center text-[10px] md:text-xs leading-5 ring-1 ring-inset ring-gray-200'>
          <RadioGroup.Label className='sr-only'>Payment frequency</RadioGroup.Label>
          {frequencies.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option}
              className={({ checked }) =>
                cn(checked && 'bg-primary text-white', 'cursor-pointer rounded-full px-2 py-1 md:py-2')
              }>
              {option.label}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>

      <div className='flex flex-col md:flex-row items-start justify-center gap-10'>
        {tiers.map((tier) => (
          // Card for each plan with its respective details and pricing.
          <div
            key={tier.id}
            className='md:w-1/4 flex flex-col items-center justify-center gap-6 md:gap-10 p-6'>
            <Badge className='bg-primary/10 text-primary shadow-none uppercase'>{tier.name}</Badge>
            <div className='text-center'>
              <div className='mb-4'>
                {tier.id === 'trial' ? (
                  <p className='text-5xl'>Free</p>
                ) : (
                  <div className='flex items-end gap-1'>
                    <p className='text-2xl font-semibold line-through text-black/50 decoration-black/70 decoration-2 px-0.5'>
                      {(tier.actualPrice as any)[frequency.value]}
                    </p>
                    <p className='text-5xl font-semibold tracking-tight'>
                      {(tier.sellingPrice as any)[frequency.value]}
                    </p>
                    <p className='text-sm font-medium leading-loose'>{frequency.priceSuffix}</p>
                  </div>
                )}
              </div>
              <p className='text-sm opacity-60'>{tier.description}</p>
            </div>
            <ul role='list' className='h-20 space-y-2 text-sm opacity-60'>
              {tier.features.map((feature) => (
                <li key={feature} className='text-center leading-relaxed'>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA button for the specific plan. */}
            {tier.id === 'trial' ? (
              <Link href='/admin-dashboard' className='w-full'>
                <Button size='lg' className='w-full'>
                  Get Started
                </Button>
              </Link>
            ) : (
              <div>
                <ButtonPayment
                  provider='stripe'
                  tier={tier.id as TypeSubscriptionPlan}
                  frequency={frequency.value as TypeSubscriptionInterval}
                />
                <SeparatorOr />
                <ButtonPayment
                  provider='lemonSqueezy'
                  tier={tier.id as TypeSubscriptionPlan}
                  frequency={frequency.value as TypeSubscriptionInterval}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
