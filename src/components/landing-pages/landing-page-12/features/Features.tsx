'use client';

import { motion } from 'framer-motion';
import FeaturesCard, { CardProps } from './FeaturesCard';
import featureImage from '@/assets/landing-page-11/images/feature.svg';

const projects: CardProps[] = [
  {
    title: 'Build your AI Apps Fast',
    description:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    imageSrc: featureImage,
  },
  {
    title: 'Build your AI Apps Fast',
    description:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    imageSrc: featureImage,
  },
  {
    title: 'Build your AI Apps Fast',
    description:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    imageSrc: featureImage,
  },
];

export default function Features() {
  return (
    <motion.main className='max-w-7xl flex flex-col items-center p-4 mt-44 mx-auto' id='features'>
      <header className='text-center mb-10'>
        <p className='text-3xl md:text-4xl font-medium md:leading-[44px] tracking-tight mx-auto mb-7'>
          Explore the power of
          <br />
          AI apps generation
          <span className='text-[#0F6FFF]'> Workflow</span>
        </p>

        <p className='text-zinc-600 leading-8 font-light'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days.
          <br />
          Save hours of effort and use our robust deployable code.
        </p>
      </header>

      <div className='w-full flex flex-col gap-10'>
        {projects.map((project, index) => (
          <FeaturesCard key={index} {...project} />
        ))}
      </div>
    </motion.main>
  );
}
