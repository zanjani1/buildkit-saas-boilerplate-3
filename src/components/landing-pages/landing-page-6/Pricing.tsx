/* eslint-disable tailwindcss/no-contradicting-classname */
import Image from 'next/image';
import Tick from '@/assets/landing-page-6/icons/Tick.svg';
import Button from './Button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

const heading = 'Pricing Plans to Suit Your Needs';
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
        <div className='items-center flex flex-col gap-7'>
          <div className='items-center flex flex-col gap-4'>
            <span className='text-[#227BFF] font-semibold text-sm'>Pricing</span>
            <h1 className='md:text-4xl text-2xl text-center max-w-[560px] font-medium'>{heading}</h1>
          </div>

          <span className='text-stone-400 text-center'>Start making smarter decisions,Choose a plan</span>
        </div>
        <div className='flex gap-4 md:flex-row flex-col'>
          <div className='border border-[#2B2F45] rounded-lg flex gap-12 px-1 py-8 items-center md:flex-row flex-col w-full bg-[#161823]'>
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
                    className={clsx('flex gap-2 items-start', {
                      'text-stone-600': !feat.available,
                    })}>
                    <Image
                      src={Tick}
                      alt='tick'
                      width={20}
                      height={20}
                      className={clsx({ 'opacity-25': !feat.available })}
                    />
                    <span className={clsx('font-medium leading-6 -mt-0.5')}>{feat.feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='border border-[#2B2F45] rounded-lg flex gap-12 px-4 py-8 items-center md:flex-row flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0085FF29] from-10% to-[#1A1A1A29] w-full '>
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
                  <div key={feat.feature} className={clsx('flex gap-2 items-start')}>
                    <Image src={Tick} alt='tick' width={20} height={20} />
                    <span className={clsx('font-medium leading-6 -mt-0.5')}>{feat.feature}</span>
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
