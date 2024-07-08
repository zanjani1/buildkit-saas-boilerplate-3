// This component is used to display a list of frequently asked questions and their answers.
// This component is typically used in sections like 'Help' or 'Support' to assist users in finding quick answers.
// The FAQ data is expected to be passed as a prop in the form of an array of {question, answer} objects.

'use client';

import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PlusIcon from '@/assets/landing-page-1/PlusIcon';
import MinusIcon from '@/assets/landing-page-1/MinusIcon';
import { cn } from '@/utils/utils';

const accordionData = [
  {
    value: '0',
    question: 'Lorem ipsum dolor sit amet?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    value: '1',
    question: 'Lorem ipsum dolor sit amet?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    value: '2',
    question: 'Lorem ipsum dolor sit amet?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function Faq() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (value: string) => {
    setOpenAccordion(value === openAccordion ? null : value);
  };

  return (
    <div id='faq' className='space-y-16 mt-[200px]'>
      <div className='space-y-5 px-4'>
        <p className='text-center text-3xl md:text-5xl font-medium header-gradient !leading-normal'>
          Need help?
        </p>
        <p className='text-[#C9C9C9] text-center md:text-xl max-w-3xl mx-auto'>
          Don't worry, we got you. Here are some answers for your questions.
        </p>
      </div>
      <div className='max-w-5xl mx-auto'>
        <Accordion type='single' collapsible className='w-full'>
          {accordionData.map((item, index) => (
            <AccordionItem key={index} value={item.value} className='px-5 border-border/30'>
              <AccordionTrigger onClick={() => toggleAccordion(item.value)}>
                <div className='flex items-center gap-4 text-base md:text-lg leading-7 text-white '>
                  {openAccordion === item.value ? <MinusIcon /> : <PlusIcon />} {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent
                className={cn(
                  openAccordion === item.value ? 'max-h-screen' : 'max-h-0',
                  'text-[#808080] text-base ml-11 transition-max-height duration-300 ease-in-out'
                )}>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
