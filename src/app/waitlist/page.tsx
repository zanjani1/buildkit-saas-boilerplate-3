// This is the Waitlist page component. It uses the SelectTheme component to allow users to switch between dark and light themes.

'use client';

import { SelectTheme } from '@/components/SelectTheme';
import { useTheme } from 'next-themes';
import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Waitlist = () => {
  // Currently the default theme is "dark". You can change it to "light" from "app/waitlist/layout.tsx".
  const { theme } = useTheme();

  return (
    <div className='bg-[#FFFEF8] dark:bg-[#031614]'>
      <div className='max-w-7xl mx-auto relative h-screen'>
        <div className='flex flex-col justify-between h-full'>
          <div>
            <div className='flex justify-end p-4'>
              <SelectTheme />
            </div>

            <div className='hidden md:flex items-center gap-20 max-w-7xl relative justify-center p-4'>
              <div
                className='font-bold text-[130px] lg:text-[190px] xl:text-[250px] text-transparent leading-normal bg-transparent text-strock '
                style={{
                  WebkitTextStrokeColor: theme === 'dark' ? '#1d4531' : '#cccbc6',
                }}>
                20 <span className='text-[72px]'>.</span>
              </div>
              <div
                className='font-bold text-[130px] lg:text-[190px]  xl:text-[250px] text-transparent leading-normal bg-transparent text-strock'
                style={{
                  WebkitTextStrokeColor: theme === 'dark' ? '#1d4531' : '#cccbc6',
                }}>
                13<span className='text-[72px]'>.</span>
              </div>
              <div
                className='font-bold text-[130px] lg:text-[190px] xl:text-[250px] text-transparent leading-normal bg-transparent text-strock'
                style={{
                  WebkitTextStrokeColor: theme === 'dark' ? '#1d4531' : '#cccbc6',
                }}>
                26<span className='text-[72px]'>.</span>
              </div>
            </div>
            <div className='text-[#26AB75] text-4xl md:text-5xl lg:text-[72px] mt-20 md:mt-0 font-bold md:absolute md:top-52 md:left-40 lg:top-[17rem] lg:left-28, xl:top-[20.5rem] xl:left-36 p-4'>
              We are <br /> Coming Soon.
            </div>

            <div className='mt-32 md:mt-10 flex flex-col items-end justify-end p-4'>
              <div className='w-full md:w-[400px]'>
                <p className='font-bold text-xl mb-2'>Join the Waitlist</p>
                <div className='relative inline-flex w-full md:w-[400px]'>
                  <input
                    type='text'
                    placeholder='Email'
                    className='py-3 px-6 rounded-full border border-gray-300 focus:outline-none focus:border-[#26AB75] w-full md:w-[400px] bg-white text-black'
                    style={{ verticalAlign: 'top' }}
                  />
                  <button
                    type='button'
                    className='absolute top-0 right-0 bg-[#26AB75] text-white py-3 px-6 rounded-r-full font-bold'
                    style={{ marginTop: '1px' }}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <footer className='space-y-10 my-10 md:mt-0'>
            <div className='flex items-center justify-center gap-6 '>
              <FaFacebookF className='size-6 cursor-pointer' />
              <FaTwitter className='size-6 cursor-pointer' />
              <RiInstagramFill className='size-6 cursor-pointer' />
              <FaLinkedin className='size-6 cursor-pointer' />
              <FaGithub className='size-6 cursor-pointer' />
            </div>
            <p className='text-[#828282] text-center '>© Copyrights 1811 Labs | All Rights Reserved</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
