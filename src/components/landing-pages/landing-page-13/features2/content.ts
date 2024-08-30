import features from '@/assets/landing-page-13/images/features2.svg';

interface CardDetail {
  title: string;
  content: string;
  url: string;
}

export const featureNames = ['Modular NextJs Boilerplate', 'Database', 'AI Modules', 'Authentication'];

export const featureDetails: Record<string, CardDetail> = {
  'Modular NextJs Boilerplate': {
    title: 'Build your AI apps Fast',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours. Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of Effort and Use our robust Deployable code.',
    url: features,
  },
  Database: {
    title: 'Build your AI apps Fast with Database',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours. Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of Effort and Use our robust Deployable code.',
    url: features,
  },
  'AI Modules': {
    title: 'Build your AI apps Fast with AI Modules',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours. Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of Effort and Use our robust Deployable code.',
    url: features,
  },
  Authentication: {
    title: 'Build your AI apps Fast with Authentication',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours. Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of Effort and Use our robust Deployable code.',
    url: features,
  },
};
