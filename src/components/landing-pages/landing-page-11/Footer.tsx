import Image from 'next/image';
import Button from './Button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import footer from '@/assets/landing-page-11/images/copyright.svg';

const all = [
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

const info = [
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
    label: "FAQ's",
    link: '#faq',
  },
];

const contact = [
  {
    label: 'vatsal1811@gmail.com',
    link: 'mailto:vatsal1811@gmail.com',
  },
  { label: 'India' },
];

export default function Footer() {
  return (
    <div className='bg-neutral-900 px-4 md:px-0 pt-12 md:pt-20 mt-24 md:mt-32'>
      <div className='max-w-6xl mx-auto space-y-10 sm:space-y-20'>
        <div className='flex flex-col md:flex-row justify-between md:gap-20 gap-10'>
          <div className='md:w-2/5 space-y-6'>
            <Image src='/lp6-logo.svg' alt='logo' width={100} height={100} className='w-32' />

            <p className='text-neutral-400'>
              Unleash Your Creative Potential by Turning What You Consume into Engaging Content Ideas
            </p>

            <Button variant='fill' size='md'>
              Get Started
              <ArrowRightIcon className='ml-2' />
            </Button>
          </div>

          <div className='flex flex-1 flex-col md:flex-row gap-10 md:gap-6'>
            <div className='space-y-4 w-1/3'>
              <p className='text-[10px] text-white'>ALL</p>
              <div className='space-y-4 text-neutral-400'>
                {all.map((item) => (
                  <Link href={item.link} key={item.label} className='block'>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className='space-y-4 w-1/3'>
              <p className='text-[10px] text-white'>INFO</p>
              <div className='space-y-4 text-neutral-400'>
                {info.map((item) => (
                  <Link href={item.link} key={item.label} className='block'>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className='space-y-4 w-1/3'>
              <p className='text-[10px] text-white'>CONTACTS</p>
              <div className='space-y-4 text-neutral-400 text-sm'>
                {contact.map((item) => {
                  return item.link ? (
                    <Link href={item.link} key={item.label} className='block'>
                      {item.label}
                    </Link>
                  ) : (
                    <p className='text-sm font-medium text-[#A8A8A8]' key={item.label}>
                      {item.label}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Image src={footer} alt='logo' width={1169} height={291} />
      </div>
    </div>
  );
}
