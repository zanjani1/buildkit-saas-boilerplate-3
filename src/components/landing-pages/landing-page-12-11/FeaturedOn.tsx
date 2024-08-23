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
    <div className='max-w-6xl mx-auto flex flex-col justify-center md:gap-8 gap-4 text-base md:text-lg px-4 md:px-0 md:py-28 py-20'>
      <p className='text-center text-slate-950 text-lg font-medium'>More than 25,000 teams use Builderkit</p>

      <div className='flex flex-wrap justify-center gap-5 md:gap-10'>
        {imageSrc.map(({ src, alt }, index) => (
          <Image key={index} src={src} width={112} height={112} alt={`${alt} logo`} />
        ))}
      </div>
    </div>
  );
}
