import { User } from '@supabase/supabase-js';
import Navbar from './Navbar';
import { Button } from '../ui/button';
import Image from 'next/image';
import HeroImage from '../../assets/images/hero.png';
import Link from 'next/link';

export default async function Hero({ user }: { user: User | null }) {
  return (
    <div className='bg-waves bg-[#EDF6FF]'>
      <div className='max-w-6xl mx-auto'>
        <div>
          <Navbar user={user} />
        </div>
        <div className='block md:flex py-5 md:py-14 px-4'>
          <div className='space-y-6 w-full md:w-1/2'>
            <p className='text-[#1463FF] text-[13px] not-italic font-bold leading-[normal] tracking-[1.625px] uppercase'>
              Let’s shift your Apps faster
            </p>
            <p className='text-[#161C2D] text-[60px] not-italic font-normal leading-[65px]'>
              Shift AI apps like a pro.
            </p>
            <p className='text-[rgba(22,_28,_45,_0.70)] text-[19px] not-italic font-normal leading-[32px]'>
              With lots of unique blocks, you can easily build a page without coding. Build your next AI
              website within few minutes.
            </p>
            <Link href={user ? '/dashboard' : '/login'} className='hidden md:block'>
              <Button className='px-8 py-5'>Get Started</Button>
            </Link>
          </div>
          <div className='w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0'>
            <Image src={HeroImage} width={500} height={500} alt='hero' />
          </div>
        </div>
      </div>
    </div>
  );
}
