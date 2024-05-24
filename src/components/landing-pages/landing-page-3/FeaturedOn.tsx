import { Notion, Grammarly, Intercom, Unsplash, Descript } from '@/assets/landing-page-3/images';
import Image from 'next/image';

export default async function FeaturedOn() {
  const imageSrc = [Unsplash, Notion, Intercom, Descript, Grammarly];
  const content = 'More than 25,000 teams use Builderkit';
  return (
    <div
      id='testimonials'
      className='flex justify-center flex-col items-center text-2xl md:gap-16 md:my-40 my-20 gap-8'>
      <span className=' font-semibold text-center text-lg md:text-2xl'>{content}</span>
      <div className='flex justify-center md:gap-10 flex-wrap gap-5'>
        {imageSrc.map((src, index) => {
          return <Image key={index} src={src} width={125} height={125} alt='logo' />;
        })}
      </div>
    </div>
  );
}
