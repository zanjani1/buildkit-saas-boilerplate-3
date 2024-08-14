import { Notion, Grammarly, Intercom, Unsplash, Descript } from '@/assets/landing-page-12/icons';
import Image from 'next/image';

const imageSrc = [
  { src: Unsplash, alt: 'Unsplash' },
  { src: Notion, alt: 'Notion' },
  { src: Intercom, alt: 'Intercom' },
  { src: Descript, alt: 'Descript' },
  { src: Grammarly, alt: 'Grammarly' },
];

export default function FeaturedOn() {
  return (
    <div className='max-w-6xl mx-auto flex flex-col justify-center gap-10 text-base md:text-lg px-4 md:px-0 mt-28'>
      <p className='text-center text-slate-950 text-lg font-medium'>More than 25,000 teams use Builderkit</p>

      <div className='flex flex-wrap justify-center gap-5 md:gap-12'>
        {imageSrc.map(({ src, alt }, index) => (
          <Image
            key={index}
            src={src}
            width={132}
            height={12}
            alt={`${alt} logo`}
            className='object-contain'
          />
        ))}
      </div>
    </div>
  );
}
