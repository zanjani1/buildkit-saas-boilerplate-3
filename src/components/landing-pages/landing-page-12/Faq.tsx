'use client';

import React, { ComponentPropsWithoutRef, FC, ReactNode, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
  {
    title: 'What is builderkit?',
    content: 'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days.',
  },
  {
    title: 'What do I get exactly?',
    content: 'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days.',
  },
  {
    title: 'Who is builderkit for?',
    content: 'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days.',
  },
  {
    title: 'Is it a website template?',
    content: 'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days.',
  },
];

interface CustomAccordionTriggerProps extends ComponentPropsWithoutRef<typeof AccordionTrigger> {
  children: ReactNode;
}
const CustomAccordionTrigger: FC<CustomAccordionTriggerProps> = ({ children, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionTrigger
      className={`group ${className} [&>svg]:hidden`}
      {...props}
      onClick={() => setIsOpen(!isOpen)}>
      <div className='flex justify-between w-full items-center'>
        {children}
        <div className='size-6 bg-[#F2F2F2] rounded-[8px] p-1 gap-3'>
          {isOpen ? (
            <FiMinus className='size-4 shrink-0 transition-transform text-[#0B3721]' />
          ) : (
            <FiPlus className='size-4 shrink-0 transition-transform text-[#0B3721]' />
          )}
        </div>
      </div>
    </AccordionTrigger>
  );
};

const FAQ = () => {
  return (
    <div id='faq' className='w-11/12 md:w-1/2 mx-auto text-center mt-60'>
      <div className='space-y-12'>
        <div className='space-y-6'>
          <h2 className='text-2xl md:text-4xl font-medium text-slate-950 tracking-tight'>
            Frequently asked questions
          </h2>
          <p className='text-[#53535C] text-center font-light'>
            Don't worry, we got you. Here are some answers for your questions.
          </p>
        </div>

        <Accordion type='single' collapsible className='space-y-2'>
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={item.title}
              className='w-full bg-[#FAFAFA] rounded-2xl shadow-none border-none'>
              <CustomAccordionTrigger className='w-full px-3 md:px-6 md:h-16 text-base font-medium'>
                {item.title}
              </CustomAccordionTrigger>
              <AccordionContent className='text-[#727272] text-start pb-5 px-3 md:px-6'>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
