/* eslint-disable tailwindcss/no-contradicting-classname */
import Image from 'next/image';
import Tick from '@/assets/landing-page-4/icons/tick.svg';
import Button from './Button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { cn } from '@/utils/utils';

const features = [
  { feature: 'NextJS Boilerplate', available: true },
  { feature: 'AI Modules', available: true },
  { feature: '5 Demo Apps', available: true },
  { feature: 'GAuth & Magic Link', available: false },
  { feature: 'Stripe & Lemon Squeezy Payments', available: false },
  { feature: 'Privacy Policy & ToS', available: false },
];

export default function Pricing() {
  return (
    <div id='pricing' className='flex justify-center md:py-20 py-10'>
      <div className='flex flex-col gap-20 md:max-w-6xl max-w-80 items-center'>
        <h1 className='md:text-4xl text-2xl text-center max-w-[560px] font-medium'>
          Start making smarter decisions, Choose a plan
        </h1>
        <div className='flex gap-4 md:flex-row flex-col'>
          <div className='border border-[#171717] rounded-lg flex gap-12 px-1 py-8 items-center md:flex-row flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#69FFF61A] from-10% to-black w-full'>
            <div className='flex flex-col gap-6 items-center flex-1'>
              <div className='flex flex-col gap-2'>
                <h3 className='font-semibold text-center'>PRO</h3>
                <div className='font-semibold text-[40px] leading-[50px]'>
                  <span className=''>$149</span>
                  <span className='text-stone-400'>/mo</span>
                </div>
              </div>
              <Button fill={false} size='md'>
                Buy Now <ArrowRightIcon />
              </Button>
            </div>

            <div className='flex flex-col gap-4 max-w-72 flex-1'>
              {features.map((feat) => {
                return (
                  <div
                    key={feat.feature}
                    className={cn('flex gap-2 items-start', {
                      'text-stone-400': !feat.available,
                    })}>
                    <Image
                      src={Tick}
                      alt='tick'
                      width={20}
                      height={20}
                      className={cn({ 'opacity-70': !feat.available })}
                    />
                    <span className={cn('font-medium leading-6 -mt-0.5')}>{feat.feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='border border-[#171717] rounded-lg flex gap-12 px-4 py-8 items-center md:flex-row flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF2BAA29] from-10% to-black w-full '>
            <div className='flex flex-col gap-6 items-center flex-1'>
              <div className='flex flex-col gap-2'>
                <h3 className='font-semibold text-center'>PRO</h3>
                <div className='font-semibold text-[40px] leading-[50px]'>
                  <span className=''>$149</span>
                  <span className='text-stone-400'>/mo</span>
                </div>
              </div>
              <Button fill={true} size='md'>
                Buy Now <ArrowRightIcon />
              </Button>
            </div>

            <div className='flex flex-col gap-4 max-w-72 flex-1'>
              {features.map((feat) => {
                return (
                  <div key={feat.feature} className={cn('flex gap-2 items-start')}>
                    <Image src={Tick} alt='tick' width={20} height={20} />
                    <span className={cn('font-medium leading-6 -mt-0.5')}>{feat.feature}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
