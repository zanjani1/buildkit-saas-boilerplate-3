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

export default function Faq() {
  return (
    <div className='flex justify-center px-6 bg-[#F6FFF8]'>
      <div id='faq' className='grid lg:grid-cols-[1fr_2fr] md:py-28 md:gap-20 gap-10 py-10 max-w-5xl'>
        <div className='flex flex-col gap-4 items-center mt-2'>
          <h1 className='md:text-4xl tracking-[-2px] text-lp9-secondary text-2xl sm:text-3xl'>
            Frequently asked questions
          </h1>
          <p className='text-gray-500 leading-6 mt-1 lg:text-start text-center'>
            Don't worry, we got you. Here are some answers for your questions.
          </p>
        </div>
        <div className='max-w-[700px] leading-8 items-center'>
          <Accordion type='single' collapsible className='w-full'>
            {accordionItems.map((item) => (
              <AccordionItem key={item.value} className='my-2 border-none' value={item.value}>
                <AccordionTrigger className='text-start text-lp9-secondary  text-md font-medium md:px-6 leading-relaxed'>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className='text-gray-500 md:px-6 leading-loose'>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
