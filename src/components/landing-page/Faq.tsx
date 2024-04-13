import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const accordionItems = [
  {
    value: 'item-1',
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-3',
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
            <p className=' text-[#161C2D] text-center text-4xl not-italic font-normal leading-[48px] tracking-[-1.2px];'>
              Need Help?{' '}
            </p>
            <p className=' text-[rgba(22,28,45,0.70)] text-center text-[19px] not-italic font-normal leading-8 tracking-[-0.18px]'>
              Don't worry, we got you. Here are some answers for your questions.
            </p>
          </div>
        </div>
        <Accordion type='single' collapsible className='w-full'>
          {accordionItems.map((item, index) => (
            <AccordionItem key={index} className='my-5 bg-white rounded-xl' value={item.value}>
              <AccordionTrigger className='px-6 text-[#0E0B3D] text-[16px] not-italic font-medium leading-[32px]'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='px-6 text-[#808080] text-[16px] not-italic font-normal leading-[32px]'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
