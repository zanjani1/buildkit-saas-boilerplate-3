import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import footer from '@/assets/landing-page-12/images/footer.svg';

interface FooterLink {
  label: string;
  link?: string;
}

const footerSections: { [key: string]: FooterLink[] } = {
  ALL: [
    { label: 'About', link: '' },
    { label: 'Company', link: '' },
    { label: 'Careers', link: '' },
    { label: 'Newsletter', link: '' },
  ],
  INFO: [
    { label: 'Features', link: '#features' },
    { label: 'Product', link: '#product' },
    { label: 'Pricing', link: '#pricing' },
    { label: "FAQ's", link: '#faq' },
  ],
  CONTACTS: [{ label: 'vatsal1811@gmail.com', link: 'mailto:vatsal1811@gmail.com' }, { label: 'India' }],
};

const FooterSection: React.FC<{ title: string; links: FooterLink[] }> = ({ title, links }) => (
  <div className='space-y-4 md:w-[184px]'>
    <p className='text-[10px] text-[#303850] opacity-50 tracking-tight font-medium'>{title}</p>
    <div className='space-y-3 text-[#3E3E3E] font-medium'>
      {links.map((item) =>
        item.link ? (
          <Link
            href={item.link}
            key={item.label}
            className={`block ${title === 'CONTACTS' ? 'text-sm' : 'text-base'}`}>
            {item.label}
          </Link>
        ) : (
          <p className={`${title === 'CONTACTS' ? 'text-sm' : 'text-base'} text-[#3E3E3E]`} key={item.label}>
            {item.label}
          </p>
        )
      )}
    </div>
  </div>
);

export default function Footer() {
  return (
    <div className='bg-zinc-50 px-4 md:px-0 pt-12 md:pt-20 mt-24 md:mt-0 border-t border-[#DEDEDE] gap-16'>
      <div className='max-w-7xl mx-auto space-y-16 md:px-14'>
        <div className='flex flex-col md:flex-row md:gap-40 gap-10'>
          <div className='md:w-1/2 space-y-8'>
            <Image src='/lp12-logo.svg' alt='logo' width={124} height={124} className='w-32' />
            <p className='text-[#3E3E3E] font-medium max-w-[443px] leading-7 tracking-tight'>
              Highly modular NextJS AI Boilerplate that allows you to ship an AI App super fast
            </p>
            <Button variant='tertiary' size='md'>
              Try now for free
              <ArrowRightIcon className='ml-2' />
            </Button>
          </div>
          <div className='flex flex-1 flex-col md:flex-row gap-10 md:gap-6'>
            {Object.entries(footerSections).map(([title, links]) => (
              <FooterSection key={title} title={title} links={links} />
            ))}
          </div>
        </div>
        <Image src={footer} alt='logo' width={1069} height={123} className='md:mx-14 md:pt-10' />
      </div>
    </div>
  );
}
