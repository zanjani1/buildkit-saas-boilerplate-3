'use client';
import React, { useState, ReactNode } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQItem {
  title: string;
  content: string;
}

const faqData: FAQItem[] = [
  {
    title: 'What is buildekit?',
    content: 'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days',
  },
  {
    title: 'What do i get exactly?',
    content: 'Content for this question would go here.',
  },
  {
    title: 'Who is builder kit for?',
    content: 'Content for this question would go here.',
  },
  {
    title: 'Is it a website template?',
    content: 'Content for this question would go here.',
  },
];

interface CustomAccordionTriggerProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
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
        <div className='size-6 bg-[#F2F2F2] rounded-[8px] p-1 gap-3'>
          {isOpen ? (
            <FiMinus className='size-4 shrink-0 transition-transform text-[#3E3E3E]' />
          ) : (
            <FiPlus className='size-4 shrink-0 transition-transform text-[#3E3E3E]' />
          )}
        </div>
      </div>
    </AccordionTrigger>
  );
};

const Faq: React.FC = () => {
  const leftColumnData = faqData;
  const rightColumnData = faqData;

  const renderAccordion = (data: FAQItem[]) => (
    <Accordion type='single' collapsible className='space-y-4'>
      {data.map((item, index) => (
        <AccordionItem key={index} value={item.title} className='border-t border-gray-200 border-b-0'>
          <CustomAccordionTrigger className='w-full py-4 text-base font-medium'>
            {item.title}
          </CustomAccordionTrigger>
          <AccordionContent className='text-[#727272] pb-4 md:w-[500px] text-base tracking-tight'>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <div id='faq' className='w-full max-w-6xl mx-auto px-4 py-32'>
      <h2 className='text-3xl md:text-5xl font-medium text-slate-950 mb-14 text-center tracking-tight'>
        Frequently asked questions
      </h2>
      <div className='flex flex-col md:flex-row gap-14'>
        <div className='flex-1'>{renderAccordion(leftColumnData)}</div>
        <div className='flex-1'>{renderAccordion(rightColumnData)}</div>
      </div>
    </div>
  );
};

export default Faq;
