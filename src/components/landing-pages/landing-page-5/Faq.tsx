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
    <div id='faq' className='mx-auto py-20 px-6'>
      <div className='max-w-3xl mx-auto p-4'>
        <div className='flex flex-col items-center justify-center mb-12'>
          <div className='space-y-7 text-center'>
            <p className=' text-white  text-4xl font-medium'>Frequently asked questions</p>
            <p className='text-lp5-secondary text-lg font-normal md:text-xl md:leading-8 tracking-wide'>
              Seamlessly use your preferred tools for unified work, start to finish. Don't worry, we got you.
              Here are some answers for your questions.
            </p>
          </div>
        </div>
        <Accordion type='single' collapsible className='w-full'>
          {accordionItems.map((item, index) => (
            <AccordionItem key={index} className='my-5 px-0 !border-none' value={item.value}>
              <AccordionTrigger className='text-start text-white font-medium leading-relaxed'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='text-lp5-secondary pt-3 leading-loose'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
