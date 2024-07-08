import { Notion, Grammarly, Intercom, Unsplash, Descript } from '@/assets/landing-page-6/images';
import Image from 'next/image';

const imageSrc = [Unsplash, Notion, Intercom, Descript, Grammarly];

export default async function FeaturedOn() {
  return (
    <div
      id='testimonials'
      className='flex justify-center flex-col items-center text-2xl md:gap-16 md:my-40 my-20 gap-8'>
      <p className=' font-semibold text-center text-lg md:text-2xl'>More than 25,000 teams use Builderkit</p>

      <div className='flex justify-center gap-5 md:gap-20'>
        {imageSrc.map((src, index) => (
          <Image key={index} src={src} width={125} height={125} alt='logo' />
        ))}
      </div>
    </div>
  );
}
