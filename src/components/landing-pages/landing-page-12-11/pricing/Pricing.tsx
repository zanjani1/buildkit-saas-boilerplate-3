'use client';
import React, { useState } from 'react';
import { cn } from '@/utils/utils';
import { ArrowRightIcon } from '@radix-ui/react-icons';

type Plan = {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
  isStarter: boolean;
};

const monthlyPlans: Plan[] = [
  {
    name: 'Starter',
    price: '$19',
    features: [
      'NextJS Boilerplate',
      'AI Modules',
      '5 Demo Apps',
      'GAuth & Magic Link',
      'Stripe & Lemon Squeezy Payments',
      'Privacy Policy & ToS',
    ],
    buttonText: 'Upgrade to PRO',
    isPopular: false,
    isStarter: true,
  },
  {
    name: 'Pro',
    price: '$25',
    features: [
      'NextJS Boilerplate',
      'AI Modules',
      '5 Demo Apps',
      'GAuth & Magic Link',
      'Stripe & Lemon Squeezy Payments',
      'Supabase',
      'Privacy Policy & ToS',
    ],
    buttonText: 'Upgrade to PRO',
    isPopular: true,
    isStarter: false,
  },
];

const annualPlans: Plan[] = [
  {
    name: 'Starter',
    price: '$190',
    features: [
      'NextJS Boilerplate',
      'AI Modules',
      '5 Demo Apps',
      'GAuth & Magic Link',
      'Stripe & Lemon Squeezy Payments',
      'Privacy Policy & ToS',
      'Annual Discount',
    ],
    buttonText: 'Upgrade to PRO',
    isPopular: false,
    isStarter: true,
  },
  {
    name: 'Pro',
    price: '$250',
    features: [
      'NextJS Boilerplate',
      'AI Modules',
      '5 Demo Apps',
      'GAuth & Magic Link',
      'Stripe & Lemon Squeezy Payments',
      'Supabase',
      'Privacy Policy & ToS',
      'Priority Support',
      'Annual Discount',
    ],
    buttonText: 'Upgrade to PRO',
    isPopular: true,
    isStarter: false,
  },
];

type PricingPlanProps = {
  plan: Plan;
};

const PricingPlan: React.FC<PricingPlanProps> = ({ plan }) => (
  <div
    className={cn(
      'rounded-2xl py-6 px-5 gap-4 border border-neutral-200 md:w-[272px] h-full font-medium',
      plan.isPopular && 'custom-blue',
      plan.isStarter && 'custom-white'
    )}>
    {plan.isPopular && (
      <div className='bg-blue-50 text-blue-600 text-xs font-bold px-2 rounded-sm mb-4 inline-block'>
        MOST POPULAR
      </div>
    )}
    <h3 className='tracking-tight font-medium mb-4'>{plan.name}</h3>
    <div className='text-3xl md:text-[44px] font-medium mb-6 text-[#211143] flex items-end'>
      {plan.price}
      <span className='text-[#ABABAB] text-sm font-normal ml-2'>/month</span>
    </div>
    <button
      className={cn(
        'w-full py-2 rounded-[20px] mb-4 text-sm font-medium items-center tracking-tight flex justify-center',
        plan.isPopular
          ? 'bg-blue-500 text-white py-2.5 px-4 gap-3 font-semibold'
          : 'bg-gray-100 text-indigo-950 py-2.5 px-4 gap-3 font-semibold border border-[#ABABAB]'
      )}>
      <div className='flex gap-3 items-center'>
        {plan.buttonText}
        {plan.isPopular && <ArrowRightIcon />}
      </div>
    </button>
    <div className='border border-dashed text-neutral-200 my-6'></div>
    <p className='text-sm text-zinc-500 mb-4'>
      {plan.isPopular ? 'The pro plan includes' : 'Free plan includes'}
    </p>
    <ul className='space-y-3'>
      {plan.features.map((feature, index) => (
        <li key={index} className='flex items-center text-sm font-semibold text-[#211143]'>
          <svg
            className='size-4 mr-2 text-violet-500'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path d='M5 13l4 4L19 7'></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const currentPlans = isAnnual ? annualPlans : monthlyPlans;

  return (
    <div className='max-w-6xl mx-auto px-4 py-14 md:py-24'>
      <h2 className='text-3xl md:text-4xl font-semibold text-center mb-4 tracking-tight'>Pricing Plans</h2>
      <p className='text-center text-gray-600 font-normal text-[15px]'>
        Sign up for free and get 50 min of transcription free to try out the app
      </p>
      <div className='flex justify-center pt-14 pb-10'>
        <div className='bg-gray-100 rounded-2xl p-1 gap-1 flex border border-[#E4E4E4]'>
          <button
            onClick={() => setIsAnnual(false)}
            className={cn(
              'px-4 py-2 font-medium rounded-xl transition-colors duration-300',
              !isAnnual ? 'bg-white border border-[#E4E4E4]' : 'text-[#53466E]'
            )}>
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={cn(
              'px-4 py-2 font-medium rounded-xl transition-colors duration-300',
              isAnnual ? 'bg-white border border-[#E4E4E4]' : 'text-[#53466E]'
            )}>
            Annual <span className='text-[#0F6FFF] text-xs font-bold'>-20%</span>
          </button>
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-5 max-w-xl md:max-h-[539px] mx-auto justify-center'>
        <div className='flex flex-col justify-end mt-8 md:mt-[72px]'>
          <PricingPlan key={1} plan={currentPlans[0]} />
        </div>
        <div className='flex flex-col justify-between'>
          <PricingPlan key={0} plan={currentPlans[1]} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
