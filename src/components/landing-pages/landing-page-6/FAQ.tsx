import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const heading = 'Frequently asked questions';
const content = "Don't worry, we got you. Here are some answers for your questions.";

const accordion = [
  {
    title: 'What is buildekit?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
  {
    title: 'What do i get exactly?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
  {
    title: 'Who is builder kit for?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
  {
    title: 'Is it a website template?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
];

export default function FAQ() {
  return (
    <div className='flex justify-center '>
      <div id='faq' className='flex flex-col md:flex-row md:py-20 md:gap-20 gap-10 py-10 max-w-5xl'>
        <div className='flex flex-col gap-6 items-center mt-2'>
          <h1 className='md:text-3xl font-medium text-2xl'>{heading}</h1>
          <p className='text-stone-400 px-10 md:px-0 '>{content}</p>
        </div>
        <div className='flex flex-col leading-8 ] items-center'>
          {accordion.map((item, index) => {
            return (
              <Accordion type='single' collapsible key={index}>
                <AccordionItem
                  value={item.title}
                  className=' md:w-[669px] w-80  border-[#2B2F45] border-b h-16'>
                  <AccordionTrigger className='font-medium text-base flex justify-between w-full md:mx-6 mx-3'>
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className='text-stone-400 md:text-base p-2'>
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
}
