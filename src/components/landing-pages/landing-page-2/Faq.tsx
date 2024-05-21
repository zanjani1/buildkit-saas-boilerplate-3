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
    <div id='faq' className='mx-auto py-20'>
      <div className='max-w-xl mx-auto p-4'>
        <div className='flex flex-col items-center justify-center'>
          <div className='space-y-7 max-w-lg'>
            <p className='text-center text-6xl max-sm:text-3xl leading-snug font-bold'>FAQ</p>
          </div>
        </div>
        <Accordion type='single' collapsible className='w-full'>
          {accordionItems.map((item, index) => (
            <AccordionItem key={index} className='my-5 rounded-xl' value={item.value}>
              <AccordionTrigger className='text-start font-medium px-6 leading-relaxed'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='text-black/80 px-6 pt-3 leading-loose'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
