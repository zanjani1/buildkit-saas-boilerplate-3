'use client';

import { TickIconBlack, TickIconWhite } from '@/assets/landing-page-11/icons/TickIcon';
import { cn } from '@/utils/utils';
import ArrowBlack from '@/assets/landing-page-11/icons/ArrowBlack';
import ArrowWhite from '@/assets/landing-page-11/icons/ArrowWhite';
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
    <div className='md:w-[71%] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={cn(
            'w-full border-2 border-zinc-100 gap-2 rounded-3xl p-6 self-end',
            tier.id === 'ultimate' && 'bg-stone-900 text-white'
          )}>
          <div className='font-medium mt-6'>
            <p className='text-lg mb-2'>{tier.name.toUpperCase()}</p>
            <p className='mb-8 text-4xl'>
              <span>{tier.sellingPrice.monthly}</span>
              <span className='text-[#9CA3AF]'>/mo</span>
            </p>
            <p className='font-light text-base'>{tier.description}</p>
          </div>

          <ul role='list' className='space-y-4 mt-8'>
            {tier.features.map((feature) => (
              <li key={feature} className='leading-relaxed flex gap-3 text-[15px]'>
                {tier.id === 'pro' ? <TickIconBlack /> : <TickIconWhite />}
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button variant={tier.id === 'pro' ? 'default' : 'fill'} size='lg' className='h-12 mt-16'>
            Get Now {tier.id === 'pro' ? <ArrowWhite /> : <ArrowBlack />}
          </Button>
        </div>
      ))}
    </div>
  );
}
