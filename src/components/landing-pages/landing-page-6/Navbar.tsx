import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HiBars3 } from 'react-icons/hi2';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Button from './Button';
const navOptions = [
  {
    label: 'Features',
    url: '/#features',
  },
  {
    label: 'Product',
    url: '/#product',
  },
  {
    label: 'Pricing',
    url: '/#pricing',
  },
  {
    label: 'FAQ',
    url: '/#faq',
  },
];

export default function Navbar() {
  return (
    <div className='flex md:max-w-2xl  justify-between pt-2 pb-4 border-b border-[#222222] w-full items-center md:px-0 px-4 '>
      <Image src='/lp6-logo.svg' width={100} height={30} alt='logo' className='h-8 w-32' />
      <div>
        <div className='md:flex gap-4 hidden items-center'>
          {navOptions.map((opt) => {
            return (
              <Link
                href={opt.url}
                key={opt.label}
                className='px-1 py-2.5 text-base leading-6 font-medium hover:underline'>
                {opt.label}
              </Link>
            );
          })}
          <Button fill={false} size='sm' rounded={true}>
            <span>Sign in</span>
            <ArrowRightIcon />
          </Button>
        </div>

        <Sheet>
          <SheetTrigger className='block md:hidden'>
            <HiBars3 />
          </SheetTrigger>
          <SheetContent side='top' className='bg-[#141414] text-white border-black'>
            <div className='space-y-6'>
              <ul className='gap-6'>
                {navOptions.map((item, index) => (
                  <li key={index} className='text-sm font-medium py-2'>
                    <Link href={item.url} className=' scroll-smooth'>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button fill={false} size='sm'>
                <span>Sign in</span>
                <ArrowRightIcon className='font-bold' />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
