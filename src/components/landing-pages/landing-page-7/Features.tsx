import Image from 'next/image';
import features from '@/assets/landing-page-7/images/features.svg';

const cardDetails = [
  {
    title: 'Build your AI apps Fast',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    url: features,
  },
  {
    title: 'Build your AI apps Fast',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    url: features,
  },
  {
    title: 'Build your AI apps Fast',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    url: features,
  },
];

export default function Features() {
  return (
    <div id='features' className='container mx-auto max-w-6xl px-4 py-24 md:py-32'>
      <div className='text-center mb-16 md:mb-24'>
        <p className='text-2xl md:text-4xl font-medium mb-7'>
          Explore the power of
          <br />
          AI apps generation <span className='text-blue-600'>Workflow</span>
        </p>
        <p className='text-gray-600 md:text-lg max-w-2xl mx-auto'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of
          Effort and Use our robust Deployable code.
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-8'>
        {cardDetails.map((card) => (
          <div key={card.title} className='flex flex-col items-center'>
            <Image
              src={card.url}
              alt={card.title}
              width={400}
              height={400}
              className='bg-gray-100 rounded mb-6'
            />
            <h2 className='font-medium text-xl md:text-2xl mb-4'>{card.title}</h2>
            <p className='text-gray-600 text-center'>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
