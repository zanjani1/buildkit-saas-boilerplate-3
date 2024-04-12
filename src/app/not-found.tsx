import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/utils/utils';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='w-3/4 md:w-1/3 h-screen flex flex-col items-center justify-center gap-8 md:gap-10 mx-auto'>
      <h1 className='text-7xl md:text-[180px] font-semibold leading-none'>404</h1>
      <h2 className='text-3xl md:text-[52px] text-center leading-none'>Page not found</h2>
      <p className='md:text-xl text-center text-black/60 leading-tight'>
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link
        href='/'
        className={cn(buttonVariants({ variant: 'default' }), 'h-10 md:h-12 px-8 md:px-10 md:text-lg')}>
        Go to Home
      </Link>
    </div>
  );
}
