// Faq in the landing page is a section that provides answers to frequently asked questions.

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const accordionItems = [
  {
    value: '1',
    question: 'What is buildekit?',
    answer: 'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days',
  },
  {
    value: '2',
    question: 'What do i get exactly?',
    answer:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
  },
  {
    value: '3',
    question: 'Who is builder kit for?',
    answer: 'Builderkit is for developers who want to build AI apps faster.',
  },
  {
    value: '4',
    question: 'Is it a website template?',
    answer: 'No, Builderkit is a NextJS AI Boilerplate that allows you to ship any AI Apps within days.',
  },
];

export default async function Faq() {
  return (
    <div id='faq' className='mx-auto py-20 md:px-6 px-4'>
      <div className='max-w-3xl mx-auto p-4'>
        <div className='mx-auto mb-10'>
          <p className='text-center text-5xl max-sm:text-3xl leading-snug font-semibold'>FAQ</p>
        </div>

        <Accordion type='single' collapsible className='w-full'>
          {accordionItems.map((item, index) => (
            <AccordionItem key={index} className='p-0' value={item.value}>
              <AccordionTrigger className='font-medium leading-relaxed'>{item.question}</AccordionTrigger>
              <AccordionContent
                className='text-[#171717] p-0 mb-6 leading-5 max-w-md
              '>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
