import { Notion, Grammarly, Intercom, Unsplash, Descript } from '@/assets/landing-page-3/images';
import Image from 'next/image';
export default async function FeaturedOn() {
  const imageSrc = [Unsplash, Notion, Intercom, Descript, Grammarly];
  const content = 'More than 25,000 teams use Builderkit';
  return (
    <div
      id='testimonials'
      className='flex justify-center flex-col items-center text-2xl gap-16 my-40 max-md:my-20 max-md:gap-8'>
      <span className=' font-semibold text-center max-md:text-lg'>{content}</span>
      <div className='flex justify-center gap-10 max-md:flex-wrap max-md:gap-5'>
        {imageSrc.map((src, index) => {
          return <Image key={index} src={src} width={125} height={125} alt='logo' />;
        })}
      </div>
    </div>
  );
}
