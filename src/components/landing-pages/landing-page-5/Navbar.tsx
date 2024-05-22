'use client';
import Link from 'next/link';
import { HiBars3 } from 'react-icons/hi2';
import { RiCloseFill } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import LogoIcon from '@/assets/landing-page-5/icons/LogoIcon';
import { useEffect, useState } from 'react';

const navbarRoutes = [
  { label: 'Features', url: '/#features' },
  { label: 'Product', url: '/#product' },
  { label: 'Pricing', url: '/#pricing' },
  { label: 'FAQ', url: '/#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='max-w-2xl mx-auto pt-5 transition-all'>
      <div
        className={`w-full flex flex-col justify-between items-center border-[#222222] rounded-full bg-gradient-to-t from-[#202020] to-[#121212] px-2 transition-all duration-300 ease-in-out ${
          isOpen ? 'h-64 rounded-xl justify-center' : 'h-12'
        }`}>
        <div className='w-full flex justify-between items-center '>
          <Link href='/'>
            <LogoIcon />
          </Link>

          <ul className='hidden md:flex items-center gap-6'>
            {navbarRoutes.map((item, index) => (
              <li key={index} className='text-sm font-medium text-white'>
                <Link href={item.url} className='hover:underline'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href={'/login'} className='hidden md:block'>
            <Button className=' text-white rounded-full bg-[#262626] hover:bg-[#262626]/70'>Sign in</Button>
          </Link>

          <div className='block md:hidden'>
            {isOpen ? (
              <RiCloseFill
                className='text-white size-10 mr-3 cursor-pointer'
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
            ) : (
              <HiBars3
                className='text-white size-10 mr-3 cursor-pointer'
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
            )}
          </div>
        </div>

        <ul
          className={`w-full flex flex-col justify-center space-y-5 ${
            isOpen ? 'opacity-100 mb-20' : 'opacity-0'
          } transition-opacity duration-300 ease-in-out`}>
          {navbarRoutes.map((item, index) => (
            <li
              key={index}
              className='text-sm mx-auto font-medium text-white py-2'
              onClick={() => {
                setIsOpen(!isOpen);
              }}>
              <Link href={item.url} className='hover:underline block px-4'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
