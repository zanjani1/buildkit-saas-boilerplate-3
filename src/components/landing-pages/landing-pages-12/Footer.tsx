import Image from 'next/image';
import Button from './Button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import footer from '@/assets/landing-page-12/images/copyright.svg';

const All = [
  {
    label: 'About',
    link: '',
  },
  {
    label: 'Company',
    link: '',
  },
  {
    label: 'Careers',
    link: '',
  },
  {
    label: 'Newsletter',
    link: '',
  },
];

const Info = [
  {
    label: 'Features',
    link: '#features',
  },
  {
    label: 'Product',
    link: '#product',
  },
  {
    label: 'Pricing',
    link: '#pricing',
  },
  {
    label: 'FAQs',
    link: '#faq',
  },
];

const Contact = [
  {
    label: 'vatsal1811@gmail.com',
    link: 'mailto:vatsal1811@gmail.com',
  },
  {
    label: 'India',
    link: '',
  },
];

export default function Footer() {
  return (
    <div className='px-4 md:px-0 bg-neutral-900 md:pt-0 pt-12'>
      <div className='flex items-center flex-col justify-center px-4 gap-10 sm:gap-20 w-full pt-5 md:pt-20 pb-0 mx-auto'>
        <div className='flex md:flex-row flex-col justify-between md:gap-20 gap-10'>
          <div className='flex flex-col md:gap-6 gap-4 md:w-2/5'>
            <Image src='/lp6-logo.svg' alt='logo' width={100} height={100} className='w-32 h-8' />

            <span className='text-neutral-400 text-start font-medium'>
              Unleash Your Creative Potential by Turning What You Consume into Engaging Content Ideas
            </span>

            <Button bg={true} size='md' rounded={true} className='font-medium'>
              Get Started
              <ArrowRightIcon className='ml-2' />
            </Button>
          </div>

          <div className='flex gap-6 md:flex-1 flex-col md:flex-row'>
            <div className='flex flex-col gap-4 w-1/3'>
              <p className='text-[10px] text-white'>ALL</p>
              <div className='flex flex-col gap-3 text-neutral-400'>
                {All.map((item) => {
                  return (
                    <Link href={item.link} key={item.label}>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className='flex flex-col gap-4 w-1/3'>
              <p className='text-[10px] text-white'>INFO</p>
              <div className='flex flex-col gap-3 text-neutral-400'>
                {Info.map((item) => {
                  return (
                    <Link href={item.link} key={item.label}>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className='flex flex-col gap-4 w-1/3'>
              <p className='text-[10px] text-white'>CONTACTS</p>
              <div className='flex flex-col gap-3 text-neutral-400 text-sm'>
                {Contact.map((item) => {
                  return item.link ? (
                    <Link href={item.link} key={item.label}>
                      {item.label}
                    </Link>
                  ) : (
                    <span className='text-sm tracking-[-0.02em] font-medium text-[#A8A8A8] ' key={item.label}>
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src={footer} alt='logo' width={1169} height={291} />
        </div>
      </div>
    </div>
  );
}
