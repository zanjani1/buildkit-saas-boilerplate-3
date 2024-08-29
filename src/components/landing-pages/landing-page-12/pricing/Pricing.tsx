'use client';

import React, { FC, useState } from 'react';
import { cn } from '@/utils/utils';
import PricingPlan, { TypeBillingCycle } from './Plan';

const billingCycles: TypeBillingCycle[] = ['monthly', 'annual'];

const Pricing: FC = () => {
  const [billingCycle, setBillingCycle] = useState(billingCycles[0]);

  return (
    <div id='pricing' className='max-w-6xl mx-auto px-4 mt-60'>
      <h2 className='text-3xl md:text-4xl font-medium text-center mb-4 tracking-tight'>Pricing Plans</h2>
      <p className='text-center text-gray-600 font-light mb-14'>
        Sign up for free and get 50 min of transcription free to try out the app
      </p>

      <div className='w-fit mx-auto bg-gray-50 rounded-2xl p-1 border border-[#E4E4E4] mb-10'>
        {billingCycles.map((cycle) => {
          const isActive = billingCycle === cycle;
          const cycleText = cycle === 'monthly' ? 'Monthly' : 'Annual';

          return (
            <button
              key={cycle}
              onClick={() => setBillingCycle(cycle)}
              className={cn(
                'px-4 py-1.5 rounded-xl',
                isActive ? 'bg-white border border-[#E4E4E4] font-medium text-[#211143]' : 'text-[#53466E]'
              )}>
              {cycleText}
              {cycle === 'annual' && <span className='text-[#0F6FFF] text-xs font-bold ml-1'>-20%</span>}
            </button>
          );
        })}
      </div>

      <PricingPlan billingCycle={billingCycle} />
    </div>
  );
};

export default Pricing;
