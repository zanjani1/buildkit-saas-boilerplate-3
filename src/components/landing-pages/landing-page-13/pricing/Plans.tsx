'use client';

import React from 'react';
import { cn } from '@/utils/utils';
import Button from '../Button';
import { TickIconBlack, TickIconWhite } from '@/assets/landing-page-13/icons/TickIcon';
import ArrowBlack from '@/assets/landing-page-13/icons/ArrowBlack';
import ArrowWhite from '@/assets/landing-page-13/icons/ArrowWhite';

type PricingTier = {
  name: string;
  id: string;
  sellingPrice: { monthly: string };
  description: string;
  features: string[];
};

const tiers: PricingTier[] = [
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

interface PlanFeatureProps {
  feature: string;
  isUltimate: boolean;
}

const PlanFeature: React.FC<PlanFeatureProps> = ({ feature, isUltimate }) => (
  <li className='leading-relaxed flex gap-3 text-[15px]'>
    {isUltimate ? <TickIconWhite /> : <TickIconBlack />}
    <span className={cn('font-medium', isUltimate && 'font-normal')}>{feature}</span>
  </li>
);

interface PricingCardProps {
  tier: PricingTier;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  const isUltimate = tier.id === 'ultimate';

  return (
    <div
      className={cn(
        'w-full border-2 border-zinc-100 gap-2 rounded-3xl p-6 self-end',
        isUltimate && 'pricing-card text-white'
      )}>
      <div className='font-medium mt-6'>
        <p className='text-lg mb-2 font-semibold'>{tier.name.toUpperCase()}</p>
        <p className='mb-8 text-4xl'>
          <span>{tier.sellingPrice.monthly}</span>
          <span className='text-[#9CA3AF]'>/mo</span>
        </p>
        <p className='font-normal leading-7 tracking-tight'>{tier.description}</p>
      </div>

      <ul role='list' className='space-y-4 mt-8'>
        {tier.features.map((feature) => (
          <PlanFeature key={feature} feature={feature} isUltimate={isUltimate} />
        ))}
      </ul>

      <Button variant={isUltimate ? 'fill' : 'tertiary'} size='lg' className='h-12 w-full mt-16'>
        Get Now {isUltimate ? <ArrowBlack /> : <ArrowWhite />}
      </Button>
    </div>
  );
};

const Plans: React.FC = () => (
  <div className='md:w-[71%] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
    {tiers.map((tier) => (
      <PricingCard key={tier.id} tier={tier} />
    ))}
  </div>
);

export default Plans;
