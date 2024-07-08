// Faq in the landing page is a section that provides answers to frequently asked questions.

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const accordionItems = [
  {
    value: '1',
    question: 'What is builderkit?',
    answer: 'Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days',
  },
  {
    value: '2',
    question: 'What do I get exactly?',
    answer:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
  },
  {
    value: '3',
    question: 'Who is builderkit for?',
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
    <div id='faq' className='mx-auto md:mb-48 mb-28 md:px-6'>
      <div className='max-w-3xl mx-auto p-4'>
        <div className='flex flex-col items-center justify-center mb-12'>
          <div className='space-y-7 text-center'>
            <p className=' text-white text-4xl font-medium'>Frequently asked questions</p>
            <p className='text-lp5-secondary text-lg max-sm:text-sm lg:px-8 max-w-3xl md:leading-8 tracking-wide'>
              Seamlessly use your preferred tools for unified work, start to finish. Don't worry, we got you.
              Here are some answers for your questions.
            </p>
          </div>
        </div>
        <Accordion type='single' collapsible className='w-full'>
          {accordionItems.map((item) => (
            <AccordionItem key={item.value} className='my-2 px-0 border-[#171717]' value={item.value}>
              <AccordionTrigger className='text-white font-medium px-6 leading-relaxed'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='text-lp5-secondary px-6 pt-0 leading-loose'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
