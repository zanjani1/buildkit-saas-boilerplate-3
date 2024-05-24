import free from '@/assets/landing-page-3/icons/free.svg';
import pro from '@/assets/landing-page-3/icons/pro.svg';
import ultimate from '@/assets/landing-page-3/icons/ultimate.svg';
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

export default pricingDetails;
