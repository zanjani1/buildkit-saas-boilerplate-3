import { cn } from '@/utils/utils';
import { PersonIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

interface colorScheme {
  bg: string;
  input: string;
  button: string;
  border?: string;
  dark: boolean;
}

interface WaitlistComponentProps {
  colorScheme: colorScheme;
}

export default async function WaitlistComponent({ colorScheme }: WaitlistComponentProps) {
  return (
    <div
      style={{ backgroundColor: colorScheme.bg }}
      className={clsx(`flex justify-center h-screen`, {
        'text-black': !colorScheme.dark,
        'text-white': colorScheme.dark,
      })}>
      <div className='flex flex-col items-center justify-around max-w-xl w-full'>
        <div className='flex flex-col items-center gap-[88px]'>
          <div className='flex flex-col items-center gap-8'>
            <Image
              src={!colorScheme.dark ? '/waitlist-logo-light.svg' : '/waitlist-logo-dark.svg'}
              width={100}
              height={100}
              alt='logo'
              className=' w-32 h-8'
            />
            <h1 className='md:text-[40px] md:leading-[56px] text-2xl text-center'>
              Join the waitlist for the best SaaS AI toolkit
            </h1>
          </div>

          <div className='flex flex-col gap-2 md:w-[400px] w-80 '>
            <div
              style={{ backgroundColor: colorScheme.input }}
              className={clsx('flex border border-[#FFFFFF1A] rounded-lg h-12 px-4 items-center gap-2')}>
              <PersonIcon />
              <input
                type='text'
                placeholder='Name'
                className={cn('bg-transparent w-full outline-none', !colorScheme.dark && 'text-black')}
              />
            </div>

            <div
              style={{ backgroundColor: colorScheme.input }}
              className='flex border border-[#FFFFFF1A] rounded-lg h-12 px-4 items-center gap-2 '>
              <MdOutlineEmail />
              <input
                type='email'
                placeholder='Email'
                className={cn('bg-transparent w-full outline-none', !colorScheme.dark && 'text-black')}
              />
            </div>

            <button
              style={{ backgroundColor: colorScheme.button, borderColor: colorScheme.border }}
              className='rounded-lg h-12 text-white text-sm font-medium flex items-center justify-center border-2 border-[#FFFFFF1F]'>
              Continue
            </button>
          </div>
        </div>

        <div className='flex flex-col items-center max-w-80 gap-4 '>
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
