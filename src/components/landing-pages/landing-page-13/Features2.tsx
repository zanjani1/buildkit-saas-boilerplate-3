'use client';

import { useState } from 'react';
import Image from 'next/image';
import features from '@/assets/landing-page-13/images/features2.svg';

interface CardDetail {
  title: string;
  content: string;
  url: string;
}

const CARD_DETAILS: Record<string, CardDetail> = {
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

interface ButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, isActive, onClick }) => (
  <button
    className={`px-4 py-3 sm:px-4 sm:py-3 rounded-full text-xs sm:text-sm transition-colors ${
      isActive ? 'bg-zinc-800 text-white font-light' : 'bg-zinc-100 text-[#687076] hover:bg-zinc-200'
    }`}
    onClick={onClick}>
    {label}
  </button>
);

const FeatureContent: React.FC<{ activeFeature: string }> = ({ activeFeature }) => {
  const { title, content, url } = CARD_DETAILS[activeFeature];

  return (
    <div className='flex flex-col md:flex-row gap-6 sm:gap-11'>
      <div className='w-full md:w-[495px] text-center md:text-left'>
        <h3 className='font-semibold text-lg sm:text-xl md:text-4xl tracking-tight text-neutral-700 leading-[48px] mb-3'>
          {title}
        </h3>
        <p className='text-[#8B8B8B] text-sm sm:text-base leading-6 md:leading-8'>{content}</p>
      </div>
      <div className='w-full md:w-[588px] h-auto sm:h-[456px] rounded-3xl gap-3 card-feature flex items-center justify-center'>
        <Image
          src={url}
          alt={title}
          width={255}
          height={378}
          className='rounded-lg mx-auto mt-4 sm:mt-[39.18px] md:my-0 my-5 h-auto'
        />
      </div>
    </div>
  );
};

export default function Features2() {
  const [activeFeature, setActiveFeature] = useState<string>('Modular NextJs Boilerplate');

  return (
    <div id='features2' className='max-w-7xl mx-auto py-16 sm:py-32 px-4'>
      <div className='flex flex-col items-center gap-6 sm:gap-8'>
        <h2 className='w-full sm:w-5/6 md:w-[638px] font-medium text-3xl md:text-5xl md:leading-[60px] text-[#090A18] text-center tracking-tight'>
          Essentially, everything you need to ship your first AI App
        </h2>

        <div className='flex flex-wrap justify-center gap-2 sm:gap-4 mt-4'>
          {Object.keys(CARD_DETAILS).map((feature) => (
            <Button
              key={feature}
              label={feature}
              isActive={activeFeature === feature}
              onClick={() => setActiveFeature(feature)}
            />
          ))}
        </div>

        <div className='mt-4 gap-6 sm:gap-14 bg-stone-50 p-6 sm:p-14 rounded-3xl w-full md:w-[1280px]'>
          <FeatureContent activeFeature={activeFeature} />
        </div>
      </div>
    </div>
  );
}
