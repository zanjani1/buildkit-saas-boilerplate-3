import { PersonIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

const heading = 'Join the waitlist for the best Saas AI toolkit';

interface colorScheme {
  bg: string;
  primary: string;
  secondary: string;
  dark: boolean;
}

interface WaitlistProps {
  colorScheme: colorScheme;
}

export default async function Waitlist({ colorScheme }: WaitlistProps) {
  return (
    <div
      style={{ backgroundColor: colorScheme.bg }}
      className={clsx(`flex justify-center h-screen`, {
        'text-black': !colorScheme.dark,
        'text-white': colorScheme.dark,
      })}>
      <div className='flex flex-col items-center md:py-24 py-10 max-w-xl w-full'>
        <div className='flex gap-1 items-center'>
          <Image src='/waitlist-logo.svg' width={50} height={50} alt='Waitlist Logo' className='size-8' />
          <Image
            src='/waitlist-text.svg'
            width={200}
            height={50}
            alt='Waitlist Text'
            className={clsx('w-24 h-6', { invert: colorScheme.dark })}
          />
        </div>
        <h1 className='mt-8 md:text-[40px] md:leading-[56px] text-2xl text-center'>{heading}</h1>

        <div className='flex flex-col gap-2 md:w-[400px] w-80 mt-[88px] '>
          <div
            style={{ backgroundColor: colorScheme.primary }}
            className={clsx('flex border border-[#FFFFFF1A] rounded-lg h-12 px-4 items-center gap-2')}>
            <PersonIcon />
            <input
              type='text'
              placeholder='Name'
              className='bg-transparent w-full outline-none text-[#FFFFFF1A] caret-stone-300'
            />
          </div>

          <div
            style={{ backgroundColor: colorScheme.primary }}
            className='flex border border-[#FFFFFF1A] rounded-lg h-12 px-4 items-center gap-2 '>
            <MdOutlineEmail />
            <input
              type='email'
              placeholder='Email'
              className='bg-transparent w-full outline-none text-[#FFFFFF1A] caret-stone-300'
            />
          </div>

          <button
            style={{ backgroundColor: colorScheme.secondary }}
            className='rounded-lg h-12 text-white text-sm font-medium flex items-center justify-center'>
            Continue
          </button>
        </div>

        <div className='flex flex-col items-center max-w-80 gap-4 md:mt-72 mt-36'>
          <div className='flex gap-6'>
            <FaTwitter className='size-6 cursor-pointer' />
            <FaLinkedin className='size-6 cursor-pointer' />
            <FaGithub className='size-6 cursor-pointer' />
          </div>

          <span className='text-sm text-stone-500'>© Copyrights 1811 Labs | All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}
