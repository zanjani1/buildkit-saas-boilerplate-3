'use client';

import React, { useState, ReactNode, FC } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = {
  left: [
    {
      title: 'What is buildekit?',
      content: 'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days 0',
    },
    {
      title: 'What do i get exactly?',
      content: 'Content for this question would go here. 0',
    },
    {
      title: 'Who is builder kit for?',
      content: 'Content for this question would go here. 1',
    },
    {
      title: 'Is it a website template?',
      content: 'Content for this question would go here. 2',
    },
  ],
  right: [
    {
      title: 'What is the tech stack used for?',
      content: 'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days 1',
    },
    {
      title: 'Is it for non dev as well?',
      content: 'Content for this question would go here. 3',
    },
    {
      title: 'How easy it is for no devs?',
      content: 'Content for this question would go here. 4',
    },
    {
      title: 'Is it refandable?',
      content: 'Content for this question would go here. 5',
    },
  ],
};

interface CustomAccordionTriggerProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}
const CustomAccordionTrigger: FC<CustomAccordionTriggerProps> = ({ children, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionTrigger
      className={`group ${className} [&>svg]:hidden`}
      {...props}
      onClick={() => setIsOpen(!isOpen)}>
      <div className='flex justify-between text-base font-normal w-full items-center'>
        {children}
        <div className='size-6 bg-[#F2F2F2] rounded-lg p-1 gap-3'>
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

const Faq = () => {
  const renderAccordion = (
    data: {
      title: string;
      content: string;
    }[]
  ) => (
    <Accordion type='single' collapsible>
      {data.map((item, index) => (
        <AccordionItem key={index} value={item.title} className='border-t border-gray-100 border-b-0'>
          <CustomAccordionTrigger className='w-full py-5 text-base'>{item.title}</CustomAccordionTrigger>
          <AccordionContent className='text-[#727272] pb-4 md:w-11/12 text-base tracking-tight'>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <div id='faq' className='w-full max-w-6xl mx-auto px-4 mt-32'>
      <h2 className='text-3xl md:text-5xl font-medium text-slate-950 mb-14 text-center tracking-tight'>
        Frequently asked questions
      </h2>

      <div className='flex flex-col md:flex-row gap-14'>
        <div className='flex-1'>{renderAccordion(faqs.left)}</div>
        <div className='flex-1'>{renderAccordion(faqs.right)}</div>
      </div>
    </div>
  );
};

export default Faq;
