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

export default function Faq() {
  return (
    <div className='flex justify-center md:px-6 px-2'>
      <div id='faq' className='grid lg:grid-cols-[1fr_2fr] md:py-20 md:gap-20 gap-10 py-10 max-w-5xl'>
        <div className='flex flex-col gap-4 items-center mt-2'>
          <h1 className='md:text-3xl text-lp7-secondary font-medium text-2xl'>Frequently asked questions</h1>
          <p className='text-lp7-sub px-3 md:px-0 lg:text-start text-center'>
            Don't worry, we got you. Here are some answers for your questions.
          </p>
        </div>
        <div className='max-w-[700px] leading-8 items-center'>
          <Accordion type='single' collapsible className='w-full'>
            {accordionItems.map((item) => (
              <AccordionItem key={item.value} className='my-2 px-0 border-[#F2F2F2]' value={item.value}>
                <AccordionTrigger className='text-start text-lp7-secondary font-medium px-6 leading-relaxed'>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className='text-lp7-sub px-6 pt-0 leading-loose'>
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
