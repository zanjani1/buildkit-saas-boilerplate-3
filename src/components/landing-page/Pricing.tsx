import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export const tiers = [
  {
    name: 'Trial',
    id: 'trial',
    description: 'Recurring Billing',
    price: { monthly: '$5', annually: '$60' },
    offerPrice: { monthly: '$5', annually: '$30' },
    savings: { monthly: '0%', annually: '50%' },
    features: ['2 credit (generation) per month', 'Download designs in PNG & PDF formats'],
  },
  {
    name: 'Standard',
    id: 'standard',
    description: 'Recurring Billing',
    price: { monthly: '$15', annually: '$150' },
    offerPrice: { monthly: '$15', annually: '$75' },
    savings: { monthly: '0%', annually: '50%' },
    features: ['4 credit (generation) per month', 'Download designs in PNG & PDF formats'],
  },
  {
    name: 'Premium',
    id: 'premium',
    description: 'Recurring Billing',
    price: { monthly: '$50', annually: '$600' },
    offerPrice: { monthly: '$50', annually: '$300' },
    savings: { monthly: '0%', annually: '50%' },
    features: [
      '10 credit (generation) per month',
      'Download designs in PNG & PDF formats',
      'Early access to new features',
    ],
  },
];

export default async function Pricing() {
  return (
    <div id='pricing' className='max-w-6xl mx-auto px-4 py-28'>
      <div className='flex flex-col items-center justify-center'>
        <div className='space-y-7 max-w-lg mb-7'>
          <p className=' text-[#161C2D] text-center text-4xl not-italic font-normal leading-[48px] tracking-[-1.2px];'>
            Pricing & Plans
          </p>
          <p className=' text-[rgba(22,28,45,0.70)] text-center text-[19px] not-italic font-normal leading-8 tracking-[-0.18px]'>
            With lots of unique blocks, you can easily build a page without coding. Build your next landing
            page.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {tiers.map((tier) => (
            <div key={tier.id} className='flex flex-col items-center justify-center gap-10 p-6'>
              <Badge className='bg-primary/10 text-primary shadow-none'>{tier.name}</Badge>
              <div className='text-center'>
                <p className='text-3xl md:text-5xl font-semibold mb-4'>{tier.price.monthly}</p>
                <p className='text-base md:text-sm opacity-60'>{tier.description}</p>
              </div>
              <ul role='list' className='h-24 space-y-2 text-sm opacity-60'>
                {tier.features.map((feature) => (
                  <li key={feature} className='text-center'>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={'/'} className='w-full'>
                <Button size='lg' className='w-full'>
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
