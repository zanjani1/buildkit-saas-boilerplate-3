'use client';

import { TickIconBlack, TickIconWhite } from '../../../../assets/landing-page-12/icons/TickIcon';
import { cn } from '../../../../utils/utils';
import ArrowBlack from '../../../../assets/landing-page-12/icons/ArrowBlack';
import ArrowWhite from '../../../../assets/landing-page-12/icons/ArrowWhite';
import Button from '../Button';

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

export default function Plans() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={cn(
            'w-full h-fit md:max-w-sm border-2 border-zinc-100 shadow-sm gap-2 text-black rounded-3xl p-6 mx-auto mt-3 self-end',
            tier.id === 'ultimate' && 'bg-stone-900 text-white'
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
                {tier.id === 'pro' ? <TickIconBlack /> : <TickIconWhite />}
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            pro={tier.id === 'pro'}
            ultimate={tier.id === 'ultimate'}
            size='lg'
            className='flex w-full mt-16 py-6 px-8 font-semibold text-center'>
            Get Now {tier.id === 'pro' ? <ArrowWhite /> : <ArrowBlack />}
          </Button>
        </div>
      ))}
    </div>
  );
}
