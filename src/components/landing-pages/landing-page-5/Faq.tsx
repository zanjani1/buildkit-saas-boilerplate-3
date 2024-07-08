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
    <section id='faq' className='py-16 md:py-24'>
      <div className='container max-w-6xl mx-auto px-4'>
        <p className='text-3xl sm:text-5xl font-semibold text-center mb-16'>FAQ</p>
        <div className='max-w-3xl mx-auto'>
          <Accordion type='single' collapsible className='w-full'>
            {accordionItems.map((item, index) => (
              <AccordionItem key={index} value={item.value}>
                <AccordionTrigger className='text-lg font-medium'>{item.question}</AccordionTrigger>
                <AccordionContent className='text-[#171717] mb-4'>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
