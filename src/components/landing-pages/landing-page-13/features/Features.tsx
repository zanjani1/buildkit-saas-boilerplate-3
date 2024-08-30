import Image from 'next/image';
import { bottomFeatures, CardData, topFeatures } from './content';
import { cn } from '@/utils/utils';
import { FC } from 'react';

interface FeaturesCardProps {
  cards: CardData[];
  cols: number;
}

const FeaturesCard: FC<FeaturesCardProps> = ({ cards, cols }) => (
  <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-4 mb-4', `lg:grid-cols-${cols}`)}>
    {cards.map(({ title, content, url }, index) => (
      <div
        key={index}
        className='p-8 rounded-[32px] border border-[#EDEDED] space-y-2 shadow-[0px_0px_6.8px_5px_#f7f6f640]'>
        <Image src={url} alt={title} width={400} height={400} className='mx-auto' />
        <h3 className='text-xl font-medium mb-2 tracking-tight text-neutral-700'>{title}</h3>
        <p className='font-light text-zinc-500 md:leading-8'>{content}</p>
      </div>
    ))}
  </div>
);

const Features = () => {
  return (
    <div id='features' className='max-w-7xl mx-auto px-4 py-28'>
      <div className='text-center mb-20'>
        <h2 className='text-4xl md:text-5xl font-medium mb-4 text-[#3E3E3E] md:leading-[58px] tracking-tight'>
          Explore the power of
          <br />
          AI apps generation
        </h2>
      </div>

      <FeaturesCard cards={topFeatures} cols={2} />
      <FeaturesCard cards={bottomFeatures} cols={3} />
    </div>
  );
};

export default Features;
