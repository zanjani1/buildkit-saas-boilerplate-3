import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export default function Footer() {
  const heading = 'Get your AI apps built with blazing speed.';
  const content = 'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. ';
  const options = [
    'About',
    'Company',
    'Press',
    'Contact',
    'Product',
    'Careers',
    'Blog',
    'Press',
    'Newsletter',
    'Story',
    'More',
    'More',
  ];
  return (
    <div className=' mt-[208px] py-20 px-32 bg-lp3-footer max-md:px-8 max-mmd:py-5'>
      <div className='flex flex-col gap-16 max-md:gap-8'>
        <div className='flex justify-between'>
          <h1 className='font-medium text-4xl text-white max-w-[613px] max-md:text-2xl'>{heading}</h1>
          <Button className='bg-white hover:bg-white rounded-full flex gap-2 max-md:gap-1 py-4 px-8 leading-6 max-md:px-2 max-md:py-1 text-black font-semibold text-base box-content max-md:text-sm'>
            <span>Get Started</span>
            <ArrowRightIcon></ArrowRightIcon>
          </Button>
        </div>

        <hr className='border opacity-25'></hr>

        <div className='flex justify-between max-md:flex-col max-md:gap-10'>
          <div className='flex flex-col gap-8 max-w-[300px]'>
            <h1 className='font-medium text-2xl leading-6 text-stone-300'>Gen AI</h1>
            <span className='text-stone-400'>{content}</span>
            <p className='font-medium text-white'>All rights reserved</p>
          </div>

          <div className='grid grid-cols-3 gap-x-[140px] gap-y-4 max-md:gap-x-10 text-stone-400 text-sm font-medium '>
            {options.map((option, index) => {
              return (
                <button className='text-start' key={index}>
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
