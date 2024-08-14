import React from 'react';
import { cn } from '@/utils/utils';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

type Plan = {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
  isStarter: boolean;
};

const plans: Plan[] = [
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

type PricingPlanProps = {
  plan: Plan;
};

const PricingPlan: React.FC<PricingPlanProps> = ({ plan }) => (
  <div
    className={cn(
      'rounded-2xl py-6 px-5 gap-4 border border-neutral-200 max-w-72 self-end',
      plan.isPopular && 'custom-blue',
      plan.isStarter && 'custom-white'
    )}>
    {plan.isPopular && (
      <div className='bg-blue-50 text-blue-600 text-xs font-bold px-1 rounded-sm mb-4 inline-block'>
        MOST POPULAR
      </div>
    )}
    <h3 className='tracking-tight font-semibold mb-2'>{plan.name}</h3>
    <div className='text-3xl md:text-5xl font-bold mb-4 text-indigo-950'>
      {plan.price}
      <span className='text-gray-500 text-sm font-normal ml-2'>/month</span>
    </div>
    <button
      className={cn(
        'w-full py-2 rounded-[20px] mb-4 text-sm font-medium items-center tracking-tight flex justify-center',
        plan.isPopular
          ? 'bg-blue-500 text-white py-2.5 px-4 gap-3 font-semibold'
          : 'bg-gray-100 text-indigo-950 py-2.5 px-4 gap-3 font-semibold'
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
    <ul className='space-y-2'>
      {plan.features.map((feature, index) => (
        <li key={index} className='flex items-center text-sm font-medium text-[#211143]'>
          <svg
            className='w-4 h-4 mr-2 text-violet-500'
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
  return (
    <div className='max-w-6xl mx-auto px-4 py-10 md:py-24'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>Pricing Plans</h2>
      <p className='text-center text-gray-600'>
        Sign up for free and get 50 min of transcription free to try out the app
      </p>
      <div className='flex justify-center pt-14 pb-10'>
        <div className='bg-gray-100 rounded-2xl p-1 flex'>
          <button className='bg-white rounded-2xl px-4 py-2 font-medium'>Monthly</button>
          <button className='px-4 py-2 font-medium'>
            Annual <span className='text-blue-500'>-20%</span>
          </button>
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-8 max-w-xl mx-auto justify-center'>
        {plans.map((plan, index) => (
          <PricingPlan key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
