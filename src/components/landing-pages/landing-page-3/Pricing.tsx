import Image from 'next/image';
import Tick from '@/assets/landing-page-3/icons/tick.svg';
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

const pricingPlans = [
  {
    type: 'FREE',
    price: '$49',
    frequency: '/mo',
    buttonFilled: false,
    gradientFrom: 'from-[#69FFF61A]',
  },
  {
    type: 'PRO',
    price: '$149',
    frequency: '/mo',
    buttonFilled: true,
    gradientFrom: 'from-[#FF2BAA29]',
  },
];

export default function Pricing() {
  return (
    <div id='pricing' className='flex justify-center md:my-56 my-24'>
      <div className='flex flex-col gap-20 md:max-w-6xl max-w-80 items-center'>
        <p className='md:text-4xl text-2xl text-center max-w-[560px] font-medium'>
          Start making smarter decisions, Choose a plan
        </p>
        <div className='flex gap-4 md:flex-row flex-col'>
          {pricingPlans.map(({ type, gradientFrom, price, buttonFilled, frequency }) => (
            <div
              key={type}
              className={cn(
                'border border-[#171717] rounded-lg flex gap-12 px-4 py-8 items-center md:flex-row flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] to-black w-full',
                gradientFrom
              )}>
              <div className='flex flex-col gap-6 items-center flex-1'>
                <div className='flex flex-col gap-2'>
                  <h3 className='font-semibold text-center'>{type}</h3>
                  <div className='font-semibold text-[40px] leading-[50px]'>
                    <span>{price}</span>
                    <span className='text-stone-400'>{frequency}</span>
                  </div>
                </div>
                <Button fill={buttonFilled} size='md'>
                  Buy Now <ArrowRightIcon />
                </Button>
              </div>
              <div className='flex flex-col gap-4 max-w-72 flex-1'>
                {features.map((feat) => (
                  <div
                    key={feat.feature}
                    className={cn('flex gap-2 items-start', { 'text-stone-400': !feat.available })}>
                    <Image
                      src={Tick}
                      alt='tick'
                      width={20}
                      height={20}
                      className={cn({ 'opacity-70': !feat.available })}
                    />
                    <span className='font-medium leading-6'>{feat.feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
