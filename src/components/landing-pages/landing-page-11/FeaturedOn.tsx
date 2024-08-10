import { Notion, Grammarly, Intercom, Unsplash, Descript } from '@/assets/landing-page-11/icons';
import Image from 'next/image';

const imageSrc = [Unsplash, Notion, Intercom, Descript, Grammarly];

export default async function FeaturedOn() {
  return (
    <div className='max-w-6xl mx-auto flex flex-col justify-center gap-10 md:text-lg text-base px-4 md:px-0 mt-28'>
      <p className='text-center text-slate-950 text-lg font-medium'>More than 25,000 teams use Builderkit</p>

      <div className='flex flex-wrap justify-center gap-5 md:gap-12'>
        {imageSrc.map((src, index) => {
          return <Image key={index} src={src} width={112} height={112} alt='logo' />;
        })}
      </div>
    </div>
  );
}
