import { FC } from 'react';
import TickIconBlue from '@/assets/landing-page-12/icons/TickIconBlue';
import { BsArrowRightShort } from 'react-icons/bs';
import { cn } from '@/utils/utils';

export type TypeBillingCycle = 'monthly' | 'annual';

interface PricingPlanProps {
  billingCycle: TypeBillingCycle;
}

const plans = [
  {
    name: 'Starter',
    price: { monthly: '$19', annual: '$190' },
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
  },
  {
    name: 'Pro',
    price: { monthly: '$25', annual: '$250' },
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
  },
];

const PricingPlan: FC<PricingPlanProps> = ({ billingCycle }) => {
  return (
    <div className='grid md:grid-cols-2 gap-5 max-w-xl md:max-h-[539px] mx-auto items-end justify-center'>
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            'rounded-2xl py-6 px-5 border border-neutral-200',
            plan.isPopular ? 'shadow-[0px_-8px_0px_0px_#0f6fff]' : 'h-fit shadow-[0px_-8px_0px_0px_#f8f9fa]'
          )}>
          {plan.isPopular && (
            <div className='bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded mb-4 inline-block'>
              MOST POPULAR
            </div>
          )}

          <h3 className='tracking-tight font-medium mb-4'>{plan.name}</h3>

          <div className='text-3xl md:text-[44px] font-medium mb-6 text-[#211143] flex items-end'>
            {plan.price[billingCycle]}
            <span className='text-[#ABABAB] text-sm font-normal ml-2'>
              {billingCycle === 'annual' ? '/year' : '/month'}
            </span>
          </div>

          <button
            className={cn(
              'w-full rounded-[20px] mb-4 text-sm font-medium tracking-tight flex justify-center items-center',
              plan.isPopular
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-indigo-950 font-bold border border-[#E4E4E4]',
              'py-2.5 px-4'
            )}>
            {plan.buttonText}
            {plan.isPopular && <BsArrowRightShort size={22} className='ml-1' />}
          </button>

          <div className='border border-dashed text-neutral-200 my-6' />

          <p className='text-sm text-zinc-500 mb-4 tracking-tight'>
            {plan.isPopular ? 'The pro plan includes' : 'Free plan includes'}
          </p>

          <ul className='space-y-3'>
            {plan.features.map((feature, index) => (
              <li key={index} className='flex items-center text-sm text-[#211143]'>
                <TickIconBlue />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingPlan;
