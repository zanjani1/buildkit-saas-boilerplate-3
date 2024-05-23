import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const heading = 'Need Help?';
const content = "Don't worry, we got you. Here are some answers for your questions.";

const accordion = [
  {
    title: 'What is buildekit?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
  {
    title: 'lorem ipsum dolor sit amet?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
  {
    title: 'lorem ipsum dolor sit amet?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
  {
    title: 'lorem ipsum dolor sit amet?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
  {
    title: 'lorem ipsum dolor sit amet?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
  {
    title: 'lorem ipsum dolor sit amet?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
];

export default function Help() {
  return (
    <div id='faq' className='flex flex-col items-center md:py-20 md:gap-20 gap-10 py-10'>
      <div className='flex flex-col gap-6 items-center justify-around'>
        <h1 className='md:text-4xl font-medium text-2xl'>{heading}</h1>
        <p className='text-stone-500 px-10 md:px-0 text-center'>{content}</p>
      </div>
      <div className='flex flex-col gap-4 items-start leading-8 '>
        {accordion.map((item, index) => {
          return (
            <Accordion type='single' collapsible key={index}>
              <AccordionItem value={item.title} className=' md:w-[640px] w-80 border-b-0'>
                <AccordionTrigger className='font-medium text-base'>{item.title}</AccordionTrigger>
                <AccordionContent className='text-stone-500 text-sm bg-[#F4FFF5] border-t border-t-[#F1F1F1] p-2'>
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
