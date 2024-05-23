import { Notion, Grammarly, Intercom, Unsplash, Descript } from '@/assets/landing-page-6/icons';
import Image from 'next/image';
export default async function FeaturedOn() {
  const imageSrc = [Unsplash, Notion, Intercom, Descript, Grammarly];
  const content = 'More than 25,000 teams use Builderkit';
  return (
    <div className='flex justify-center flex-col items-center md:text-lg text-base md:gap-8 gap-4 md:py-20 py-16'>
      <span className=' font-medium text-center text-stone-400'>{content}</span>
      <div className='flex justify-center md:gap-10 gap-5 flex-wrap'>
        {imageSrc.map((src, index) => {
          return <Image key={index} src={src} width={125} height={125} alt='logo' />;
        })}
      </div>
    </div>
  );
}
