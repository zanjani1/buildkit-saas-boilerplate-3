import Image from 'next/image';
import Button from './Button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import footer from '@/assets/landing-page-12/images/footer.svg';

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
    <div className='bg-zinc-50 px-4 md:px-0 pt-12 md:pt-20 mt-24 md:mt-32 border-t border-[#DEDEDE]'>
      <div className='max-w-6xl mx-auto space-y-10 sm:space-y-20'>
        <div className='flex flex-col md:flex-row justify-between md:gap-40 gap-10'>
          <div className='md:w-1/2 space-y-8'>
            <Image src='/lp12-logo.svg' alt='logo' width={124} height={124} className='w-32' />

            <p className='text-[#3E3E3E] font-normal max-w-[480px] leading-7 tracking-tight'>
              Highly modular NextJS AI Boilerplate that allows you to ship an AI App super fast
            </p>

            <Button variant='tertiary' size='md'>
              Try now for free
              <ArrowRightIcon className='ml-2' />
            </Button>
          </div>

          <div className='flex flex-1 flex-col md:flex-row gap-10 md:gap-6'>
            <div className='space-y-4 w-1/3'>
              <p className='text-[10px] text-[#303850] opacity-50 tracking-tight font-medium'>ALL</p>
              <div className='space-y-4 text-[#3E3E3E] '>
                {all.map((item) => (
                  <Link href={item.link} key={item.label} className='block'>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className='space-y-4 w-1/3'>
              <p className='text-[10px] text-[#303850] opacity-50 tracking-tight font-medium '>INFO</p>
              <div className='space-y-4 text-[#3E3E3E]'>
                {info.map((item) => (
                  <Link href={item.link} key={item.label} className='block'>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className='space-y-4 w-1/3'>
              <p className='text-[10px] text-[#303850] opacity-50 tracking-tight font-medium'>CONTACTS</p>
              <div className='space-y-4 text-[#3E3E3E] text-sm '>
                {contact.map((item) => {
                  return item.link ? (
                    <Link href={item.link} key={item.label} className='block'>
                      {item.label}
                    </Link>
                  ) : (
                    <p className='text-sm text-[#3E3E3E]' key={item.label}>
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
