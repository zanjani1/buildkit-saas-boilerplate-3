// Logo Component that redirects users to the homepage.
// It is used across various parts of the application to provide a consistent way to return to the main page.

import config from '@/config';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <>
      <Link href='/'>
        <div className='flex items-center gap-2'>
          {/* Image component is commented out. If you want to display the logo image, uncomment the following line and ensure the image path is correct. */}
          <Image src='/logo.png' className='size-8' width={50} height={50} alt='logo' />
          <p className='text-2xl not-italic font-bold leading-6'>{config.app.name}</p>
        </div>
      </Link>
    </>
  );
}
