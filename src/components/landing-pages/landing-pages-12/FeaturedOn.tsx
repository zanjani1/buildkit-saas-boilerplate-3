import { Notion, Grammarly, Intercom, Unsplash, Descript } from '@/assets/landing-page-12/icons';
import Image from 'next/image';
export default async function FeaturedOn() {
  const imageSrc = [Unsplash, Notion, Intercom, Descript, Grammarly];

  return (
    <div className='flex justify-center flex-col items-center md:text-lg text-base md:gap-10 gap-4 md:mt-32 mt-6 py-12 px-4 md:px-0 md:h-24'>
      <p className='text-center text-slate-950 md:text-lg leading-5 font-semibold '>
        More than 25,000 teams use Builderkit
      </p>

      <div className='flex justify-center md:gap-10 gap-5 flex-wrap md:max-h-8'>
        {imageSrc.map((src, index) => {
          return <Image key={index} src={src} width={132} height={132} alt='logo' />;
        })}
      </div>
    </div>
  );
}
