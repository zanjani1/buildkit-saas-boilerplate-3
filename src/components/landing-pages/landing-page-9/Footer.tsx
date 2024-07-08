import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowRightMd from '@/assets/landing-page-9/icons/ArrowRightMd';
import { Button } from './Button';

const footerLinks = {
  all: [
    { label: 'About', link: '' },
    { label: 'Company', link: '' },
    { label: 'Careers', link: '' },
    { label: 'Newsletter', link: '' },
  ],
  info: [
    { label: 'Features', link: '' },
    { label: 'Product', link: '' },
    { label: 'Pricing', link: '' },
    { label: 'FAQs', link: '' },
  ],
};

const FooterLinkSection = ({ title, links }: { title: string; links: { label: string; link: string }[] }) => (
  <div className='flex flex-col gap-4'>
    <p className='text-xs text-stone-400 uppercase'>{title}</p>
    <ul className='flex flex-col gap-3'>
      {links.map((item) => (
        <li key={item.label}>
          <Link href={item.link} className='hover:text-lp7-primary transition-colors'>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className='bg-[#FCFCFC] border-t border-[#DEDEDE]'>
      <div className='max-w-5xl mx-auto px-5 py-12 md:py-16'>
        <div className='flex flex-col md:flex-row justify-between gap-12 md:gap-20 mb-12 md:mb-24'>
          <div className='flex flex-col gap-6 md:w-2/5'>
            <Link href='https://www.builderkit.ai' className='w-fit'>
              <Image src='/lp7-logo.svg' width={140} height={40} alt='BuilderKit Logo' />
            </Link>
            <p className='text-lp7-secondary font-medium leading-7 max-w-md'>
              Unleash Your Creative Potential by Turning What You Consume into Engaging Content Ideas
            </p>
            <Button className='flex items-center gap-2 shadow-xl w-fit h-10 px-4'>
              Get Started
              <ArrowRightMd />
            </Button>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 w-full max-w-lg'>
            <FooterLinkSection title='All' links={footerLinks.all} />
            <FooterLinkSection title='Info' links={footerLinks.info} />

            <div className='flex flex-col gap-4'>
              <p className='text-xs text-stone-400 uppercase'>Contacts</p>
              <Link
                href='mailto:vatsal1811@gmail.com'
                className='text-lp7-secondary hover:text-lp7-primary transition-colors'>
                vatsal1811@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <p className='text-stone-600 text-xs'>&copy; 2024 — 1811 Labs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
