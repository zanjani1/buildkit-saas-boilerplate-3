// This is the Footer component of the landing page.

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '../../Logo';
import { getUser } from '@/utils/get-user';

// Array of objects representing footer navigation items
const footerItems = [
  {
    label: 'About',
    url: '',
  },
  {
    label: 'Contact',
    url: '',
  },
  {
    label: 'Blog',
    url: '',
  },
  {
    label: 'Story',
    url: '',
  },
  {
    label: 'Company',
    url: '',
  },
  {
    label: 'Product',
    url: '',
  },
  {
    label: 'Careers',
    url: '',
  },
  {
    label: 'Press',
    url: '',
  },
  {
    label: 'Terms of Service',
    url: '',
  },
  {
    label: 'Privacy Policy',
    url: '',
  },
];

export default async function Footer() {
  // Fetch current user; await ensures the user data is loaded before rendering
  const user = await getUser();

  return (
    <footer className='bg-[#161C2D] text-white'>
      <div className='max-w-6xl mx-auto px-4 py-16'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
          <p className='md:w-1/2 text-3xl md:text-4xl font-medium leading-normal md:leading-normal'>
            Get your AI apps built with blazing speed.
          </p>
          <Link href={user ? '/admin-dashboard' : '/login'}>
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
            <p>lorem ipsum dolor sit amet lorem ipsum dolor sit maet lorem ipsum dlor sit amet.</p>
          </div>

          <div className='text-muted-foreground grid grid-rows-4 grid-cols-3 grid-flow-col gap-x-10 gap-y-6'>
            {footerItems.map((item, index) => (
              <Link key={index} href={item.url} className='hover:underline'>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className='font-medium'>All rights reserved.</p>
      </div>
    </footer>
  );
}
