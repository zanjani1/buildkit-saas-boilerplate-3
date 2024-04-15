import { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { Button } from '../ui/button';
import Logo from '../Logo';

const footerItems = [
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
  {
    label: 'Blog',
    url: '/blog',
  },
  {
    label: 'Story',
    url: '/story',
  },
  {
    label: 'Company',
    url: '/company',
  },
  {
    label: 'Product',
    url: '/product',
  },
  {
    label: 'Press',
    url: '/press',
  },
  {
    label: 'More',
    url: '/more',
  },
  {
    label: 'Press',
    url: '/press',
  },
  {
    label: 'Careers',
    url: '/careers',
  },
  {
    label: 'Discord',
    url: '/discord',
  },
];

export default async function Footer({ user }: { user: User | null }) {
  return (
    <div className='bg-[#161C2D] text-white'>
      <div className='max-w-6xl mx-auto px-4 py-16'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
          <p className='md:w-1/2 text-3xl md:text-4xl font-medium leading-normal md:leading-normal'>
            Get your AI apps built with blazing speed.
          </p>
          <Link href={user ? '/dashboard' : '/login'}>
            <Button size='lg' className='rounded-full bg-white hover:bg-white/90 text-black'>
              {user ? 'Try Now' : 'Login'}
              <span className='ml-2'>&rarr;</span>
            </Button>
          </Link>
        </div>

        <hr className='opacity-10 my-16' />

        <div className='flex flex-col md:flex-row justify-between gap-10 mb-8'>
          <div className='md:w-1/4 flex flex-col gap-8'>
            <Logo />
            <p className='text-lg'>
              lorem ipsum dolor sit amet lorem ipsum dolor sit maet lorem ipsum dlor sit amet.
            </p>
          </div>

          <div className='text-muted-foreground grid grid-rows-4 grid-cols-3 grid-flow-col gap-x-16 gap-y-6'>
            {footerItems.map((item, index) => (
              <Link key={index} href={item.url} className='hover:underline'>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className='font-medium'>All rights reserved.</p>
      </div>
    </div>
  );
}
