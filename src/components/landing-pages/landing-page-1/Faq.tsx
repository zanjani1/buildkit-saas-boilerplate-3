// Faq in the landing page is a section that provides answers to frequently asked questions.

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const accordionItems = [
  {
    value: '1',
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: '2',
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: '3',
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
];

export default async function Faq() {
  return (
    <div id='faq' className='bg-waves bg-[#EDF6FF] mx-auto py-20'>
      <div className='max-w-xl mx-auto p-4'>
        <div className='flex flex-col items-center justify-center'>
          <div className='space-y-7 max-w-lg'>
            <p className='text-center text-4xl leading-snug'>Need Help?</p>
            <p className='text-secondary text-center text-xl font-light leading-8'>
              Don't worry, we got you. Here are some answers for your questions.
            </p>
          </div>
        </div>
        <Accordion type='single' collapsible className='w-full'>
          {accordionItems.map((item, index) => (
            <AccordionItem key={index} className='my-5 bg-white rounded-xl' value={item.value}>
              <AccordionTrigger className='text-start font-medium px-6 leading-relaxed'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='text-secondary/65 border-t px-6 pt-3 leading-loose'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
