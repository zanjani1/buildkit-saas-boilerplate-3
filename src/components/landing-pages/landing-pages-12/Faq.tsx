'use client';
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Plus, Minus } from 'lucide-react';

const accordion = [
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

interface CustomAccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionTrigger> {
  children: React.ReactNode;
}

const CustomAccordionTrigger: React.FC<CustomAccordionTriggerProps> = ({ children, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AccordionTrigger
      className={`group ${className} [&>svg]:hidden`}
      {...props}
      onClick={() => setIsOpen(!isOpen)}>
      <div className='flex justify-between w-full items-center'>
        {children}
        {isOpen ? (
          <div className='size-6 bg-[#F2F2F2] rounded-[8px] p-1 gap-3'>
            <Minus className='size-4 shrink-0 text-muted-foreground transition-transform' />
          </div>
        ) : (
          <div className='size-6 bg-[#F2F2F2] rounded-[8px] p-1 gap-3'>
            <Plus className='size-4 shrink-0 text-muted-foreground transition-transform' />
          </div>
        )}
      </div>
    </AccordionTrigger>
  );
};

export default function Faq() {
  return (
    <div className='flex justify-center'>
      <div id='faq' className='flex flex-col md:py-32 gap-10 py-12 max-w-2xl'>
        <div className='flex flex-col gap-7 items-center'>
          <h1 className='md:text-4xl font-medium text-2xl text-slate-950'>Frequently asked questions</h1>
          <p className='text-zinc-950/60 px-10 md:px-0 leading-7 text-center'>
            Don't worry, we got you. Here are some answers for your questions.
          </p>
        </div>
        <div className='flex flex-col leading-8 items-center gap-2 px-4'>
          {accordion.map((item, index) => (
            <div key={index} className='w-full rounded-2xl'>
              <Accordion type='single' collapsible>
                <AccordionItem
                  value={item.title}
                  className='md:w-[669px] w-full bg-[#FAFAFA] rounded-2xl shadow-none'>
                  <CustomAccordionTrigger className='text-base w-full md:mx-6 mx-3 md:h-16'>
                    {item.title}
                  </CustomAccordionTrigger>
                  <AccordionContent className='text-[#A8A8A8] pb-5 md:px-6 px-3 '>
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
