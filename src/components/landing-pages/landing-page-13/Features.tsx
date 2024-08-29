import Image from 'next/image';
import features from '@/assets/landing-page-13/images/feature.svg';

interface CardData {
  title: string;
  content: string;
  url: string;
}

const cardData: CardData = {
  title: 'Build your AI apps Fast',
  content:
    'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
  url: features,
};

interface FeatureCardProps {
  title: string;
  content: string;
  url: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, content, url }) => (
  <div className='p-8 rounded-[32px] gap-5 border border-[#EDEDED] card-shadow'>
    <Image src={url} alt={title} width={384} height={384} className='mb-5 mx-auto' />
    <h3 className='text-xl font-semibold mb-2 tracking-tight text-neutral-700'>{title}</h3>
    <p className='text-zinc-500 md:leading-8'>{content}</p>
  </div>
);

interface CardGridProps {
  cards: CardData[];
  cols: number;
}

const CardGrid: React.FC<CardGridProps> = ({ cards, cols }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols} gap-4 mb-4`}>
    {cards.map((card, index) => (
      <FeatureCard key={index} title={card.title} content={card.content} url={card.url} />
    ))}
  </div>
);

const Features: React.FC = () => {
  const topRowCards: CardData[] = [cardData, cardData];
  const bottomRowCards: CardData[] = [cardData, cardData, cardData];

  return (
    <section id='features' className='py-28'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-20'>
          <h2 className='md:text-5xl text-4xl font-medium mb-4 text-[#3E3E3E] md:leading-[58px] tracking-tight'>
            Explore the power of
            <br />
            AI apps generation
          </h2>
        </div>
        <div className='md:px-10'>
          <CardGrid cards={topRowCards} cols={2} />
          <CardGrid cards={bottomRowCards} cols={3} />
        </div>
      </div>
    </section>
  );
};

export default Features;
