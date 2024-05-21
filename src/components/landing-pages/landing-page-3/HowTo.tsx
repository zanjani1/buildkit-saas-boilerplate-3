import { howTo } from '@/assets/landing-page-3/images';
import Image from 'next/image';
export default async function HowTo() {
  const heading = 'Revolutionize your workflow';
  const content =
    'Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.';
  const headingCard = 'Build your AI apps fast';
  const contentCard =
    'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.';
  return (
    <div className='flex flex-col px-32 max-md:px-8 my-40'>
      <div className='flex flex-col gap-6 items-center '>
        <h1 className='text-4xl max-md:text-xl font-medium'>{heading}</h1>
        <span className='text-stone-500 max-md:text-sm max-w-2xl text-center text-balance '>{content}</span>
      </div>
      <div className='flex gap-4 max-md:gap-2 max-md:flex-col'>
        {[0, 1, 2].map((i) => {
          return (
            <div className='flex flex-col gap-6 max-md:gap-3' key={i}>
              <Image src={howTo} width={500} height={500} alt='how-to' className='w-full'></Image>
              <div className='flex flex-col gap-3'>
                <h3 className='font-medium text-2xl max-md:text-xl'>{headingCard}</h3>
                <span className='text-stone-500  max-md:text-sm'>{contentCard}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
