import { Toggle, Discount } from '@/assets/landing-page-3/images';
import Image from 'next/image';
import pricingDetails from './PricingConstants';
import tick from '@/assets/landing-page-3/icons/tick-circle.svg';
import cross from '@/assets/landing-page-3/icons/close-circle.svg';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';

export default async function Pricing() {
  const heading = 'Ready to Get Started?';
  const content = 'Choose a plan that suits your business';
  return (
    <div className='px-32 flex flex-col gap-12 justify-center items-center text-center max-md:px-8 my-40'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-4xl font-medium max-md:text-2xl'>{heading}</h1>
        <span className='text-stone-500'>{content}</span>
      </div>

      <div className='flex flex-col'>
        <div className='flex font-medium gap-4 text-xl max-md:text-lg'>
          <span>Monthly</span>
          <Image src={Toggle} width={100} height={50} alt='toggle' className='w-12 h-6'></Image>
          <span>Yearly</span>
        </div>
        <div className='ml-auto flex'>
          <Image src={Discount} width={150} height={150} alt='discount'></Image>
        </div>
      </div>

      <div className='flex gap-3 md:mx-2 max-md:flex-col '>
        {pricingDetails.map((plans, index) => {
          return (
            <div
              key={index}
              className='flex flex-col gap-7 border border-stone-200 rounded-lg md:p-8 p-4  justify-start items-start h-fit max-w-96 shadow-md'>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                  <Image src={plans.icon} width={35} height={40} alt='icon'></Image>
                  <h3 className='text-3xl font-medium max-md:text-xl'>{plans.title}</h3>
                </div>
                <span className='text-stone-500 text-sm'>Perfect plan to get started</span>
              </div>

              <div className='flex items-center'>
                <span className='text-4xl font-semibold max-md:text-2xl'>{plans.price}</span>
                <span className='text-stone-500'>/month</span>
              </div>

              <div className='text-stone-500 text-start max-md:text-sm'>{plans.description}</div>

              <div className='flex flex-col gap-5 '>
                {plans.features.map((feat) => {
                  return (
                    <div key={feat.feature} className='flex gap-3 text-start'>
                      <Image src={feat.available ? tick : cross} width={20} height={20} alt='icon'></Image>
                      <span className={clsx('font-medium md:text-lg', { 'text-slate-400': !feat.available })}>
                        {feat.feature}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className='w-full'>
                <Button className='bg-[#009429] hover:bg-[#009429] text-sm text-white size-full'>
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
