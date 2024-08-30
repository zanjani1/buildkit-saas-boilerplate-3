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
    { label: 'About', link: '#' },
    { label: 'Company', link: '#' },
    { label: 'Careers', link: '#' },
    { label: 'Newsletter', link: '#' },
  ],
  INFO: [
    { label: 'Features', link: '#features' },
    { label: 'Product', link: '#product' },
    { label: 'Pricing', link: '#pricing' },
    { label: "FAQ's", link: '#faq' },
  ],
  CONTACTS: [{ label: 'vatsal1811@gmail.com', link: 'mailto:vatsal1811@gmail.com' }, { label: 'India' }],
};

export default function Footer() {
  return (
    <div className='bg-zinc-50 px-4 pt-12 md:pt-20 mt-32 border-t border-[#DEDEDE]'>
      <div className='max-w-7xl mx-auto space-y-14 md:space-y-28'>
        <div className='flex flex-col md:flex-row gap-10 md:gap-40'>
          <div className='md:w-1/2 space-y-8'>
            <Image src='/lp12-logo.svg' alt='logo' width={124} height={124} className='w-32' />
            <p className='w-3/4 text-[#3E3E3E] leading-7 font-medium'>
              Highly modular NextJS AI Boilerplate that allows you to ship an AI App super fast
            </p>
            <Button variant='tertiary' size='md' className='text-base'>
              Try now for free
              <ArrowRightIcon className='ml-2' />
            </Button>
          </div>

          {/* Footer links */}
          <div className='flex flex-1 flex-col md:flex-row gap-10 md:gap-20'>
            {Object.entries(footerSections).map(([title, links]) => {
              const isContacts = title === 'CONTACTS';
              const textSize = isContacts ? 'text-sm' : 'text-base';

              return (
                <div key={title} className='space-y-4'>
                  <p className='text-[12px] text-[#303850] opacity-50'>{title}</p>
                  <div className='space-y-3 text-[#3E3E3E] font-medium'>
                    {links.map((item) =>
                      item.link ? (
                        <Link href={item.link} key={item.label} className={`block ${textSize}`}>
                          {item.label}
                        </Link>
                      ) : (
                        <p className={`${textSize} text-[#3E3E3E]`} key={item.label}>
                          {item.label}
                        </p>
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Image src={footer} alt='logo' width={1150} height={200} className='mx-auto' />
      </div>
    </div>
  );
}
