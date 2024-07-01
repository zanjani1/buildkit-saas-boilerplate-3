'use client';

import { Discount } from '@/assets/landing-page-6/images';
import Image from 'next/image';
import tick from '@/assets/landing-page-6/icons/tick-circle.svg';
import cross from '@/assets/landing-page-6/icons/close-circle.svg';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import free from '@/assets/landing-page-6/icons/free.svg';
import pro from '@/assets/landing-page-6/icons/pro.svg';
import ultimate from '@/assets/landing-page-6/icons/ultimate.svg';

const pricingDetails = [
  {
    icon: free,
    title: 'Free',
    price: '$0',
    description: 'A free plan grants you access to some cool features of Spend.In.',
    features: [
      { feature: 'NextJS Boilerplate', available: true },
      { feature: 'AI Modules', available: true },
      { feature: '5 Demo Apps', available: true },
      { feature: 'GAuth & Magic Link', available: false },
      { feature: 'Stripe & Lemon Squeezy Payments', available: false },
      { feature: 'Privacy Policy & ToS', available: false },
      { feature: 'Supabase', available: false },
      { feature: 'SEO', available: false },
      { feature: 'Email Integration', available: false },
      { feature: 'App Admin Dashboard', available: false },
    ],
  },
  {
    icon: pro,
    title: 'Pro',
    price: '$149',
    description: 'For professional only! Start arranging your expenses with our best templates.',
    features: [
      { feature: 'NextJS Boilerplate', available: true },
      { feature: 'AI Modules', available: true },
      { feature: '5 Demo Apps', available: true },
      { feature: 'GAuth & Magic Link', available: true },
      { feature: 'Stripe & Lemon Squeezy Payments', available: true },
      { feature: 'Privacy Policy & ToS', available: true },
      { feature: 'Supabase', available: false },
      { feature: 'SEO', available: false },
      { feature: 'Email Integration', available: false },
      { feature: 'App Admin Dashboard', available: false },
    ],
  },
  {
    icon: ultimate,
    title: 'Ultimate',
    price: '$199',
    description: 'If you a finance manager at big company, this plan is a perfect match.',
    features: [
      { feature: 'NextJS Boilerplate', available: true },
      { feature: 'AI Modules', available: true },
      { feature: '5 Demo Apps', available: true },
      { feature: 'GAuth & Magic Link', available: true },
      { feature: 'Stripe & Lemon Squeezy Payments', available: true },
      { feature: 'Privacy Policy & ToS', available: true },
      { feature: 'Supabase', available: true },
      { feature: 'Email Integration', available: true },
      { feature: 'SEO', available: true },
      { feature: 'App Admin Dashboard', available: true },
      { feature: 'App Admin Advanced API Set Up on Digital Ocean', available: true },
      { feature: 'Advanced Features', available: true },
      { feature: 'Discord Community', available: true },
    ],
  },
];

export default function Pricing() {
  const [checked, setChecked] = useState(false);

  return (
    <div
      id='pricing'
      className='md:px-32 flex flex-col gap-12 justify-center items-center text-center px-8 my-40'>
      <div className='flex flex-col gap-4'>
        <p className='md:text-4xl font-medium text-2xl'>Ready to Get Started?</p>
        <p className='text-stone-500'>Choose a plan that suits your business</p>
      </div>

      <div className='flex flex-col'>
        <div className='flex font-medium gap-4 md:text-xl text-lg items-center'>
          <span>Monthly</span>
          <ToggleSwitch isToggled={checked} handleToggle={() => setChecked(!checked)} />
          <span>Yearly</span>
        </div>
        <div className='ml-auto flex'>
          <Image src={Discount} width={150} height={150} alt='discount' />
        </div>
      </div>

      <div className='flex gap-3 md:mx-2 flex-col md:flex-row'>
        {pricingDetails.map((plans, index) => {
          return (
            <div
              key={index}
              className='flex flex-col gap-7 border border-stone-200 rounded-lg md:p-8 p-4  justify-start items-start h-fit max-w-96 '>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                  <Image src={plans.icon} width={35} height={40} alt='icon'></Image>
                  <h3 className='text-3xl font-medium max-md:text-xl'>{plans.title}</h3>
                </div>
                <span className='text-stone-500 text-sm'>Perfect plan to get started</span>
              </div>

              <div className='flex items-center'>
                <span className='md:text-4xl font-semibold text-2xl'>
                  {!checked ? plans.price : '$' + Math.round(Number(plans.price.substring(1)) * 12 * 0.35)}
                </span>
                <span className='text-stone-500'>{checked ? '/yearly' : '/month'}</span>
              </div>

              <div className='text-stone-500 text-start text-sm md:text-base'>{plans.description}</div>

              <div className='flex flex-col gap-5 '>
                {plans.features.map((feat) => {
                  return (
                    <div key={feat.feature} className='flex gap-2 text-start'>
                      <Image src={feat.available ? tick : cross} width={20} height={20} alt='icon'></Image>
                      <span className={feat.available ? 'text-stone-500' : ''}>{feat.feature}</span>
                    </div>
                  );
                })}
              </div>
              <div className='w-full'>
                <Button className='bg-[#009429] hover:bg-[#009429] text-sm text-white w-full h-12 rounded-lg'>
                  Get Started
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
