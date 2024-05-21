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
    <div id='Help' className='flex flex-col items-center py-20 gap-20 max-md:gap-10 max-md:py-10'>
      <div className='flex flex-col gap-6 items-center justify-around'>
        <h1 className='text-4xl font-medium max-md:text-2xl'>{heading}</h1>
        <p className='text-stone-500 max-md:px-10 text-center'>{content}</p>
      </div>
      <div className='flex flex-col gap-4 items-start leading-8 '>
        {accordion.map((item, index) => {
          return (
            <Accordion type='single' collapsible key={index}>
              <AccordionItem value={item.title} className=' md:w-[640px] w-80 p-2'>
                <AccordionTrigger className='font-medium text-base'>{item.title}</AccordionTrigger>
                <AccordionContent className='text-stone-500 md:text-base'>{item.content}</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
