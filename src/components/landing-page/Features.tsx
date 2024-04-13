import ServiceImageIcon1 from '@/assets/icons/ServiceImageIcon1';
import ServiceImageIcon2 from '@/assets/icons/ServiceImageIcon2';
import ServiceImageIcon3 from '@/assets/icons/ServiceImageIcon3';
import Image from 'next/image';
import { BiRightArrowAlt } from 'react-icons/bi';

const cardContent = [
  {
    icon: ServiceImageIcon1,
    bgColor: '#68D585',
    title: 'Custom AI Development',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: ServiceImageIcon2,
    bgColor: '#473BF0',
    title: 'AI Integration Services',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: ServiceImageIcon3,
    bgColor: '#F64B4B',
    title: 'AI Powered Sites',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
];

const serviceFeatures = [
  {
    title: '1M+',
    description: 'Customers visit Omega every month to get their service done.',
  },
  {
    title: '92%',
    description: 'Satisfaction rate comes from our awesome customers.',
  },
  {
    title: '4.9/5.0',
    description: 'Average customer ratings we have got all over internet.',
  },
];

export default async function Features() {
  return (
    <div id='features' className='max-w-6xl mx-auto p-4 space-y-20 my-20 '>
      <div className='flex flex-col items-center justify-center'>
        <div className='space-y-7 max-w-xl'>
          <p className='text-[#1463FF] font-bold text-center'>OUR SERVICES</p>
          <p className=' text-[#161C2D] text-center text-4xl not-italic font-normal leading-[48px] tracking-[-1.2px];'>
            We provide great services for our customers based on needs
          </p>
          <p className=' text-[rgba(22,28,45,0.70)] text-center text-[19px] not-italic font-normal leading-8 tracking-[-0.18px]'>
            With lots of unique blocks, you can easily build a page without coding. Build your next
            consultancy website within few minutes.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
        {cardContent.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bgColor }}
            className='px-8 py-6 rounded-2xl space-y-8'>
            <div className='flex justify-center'>
              <item.icon />
            </div>
            <div>
              <p className='text-white text-center text-[24px] font-medium leading-[34px]'>{item.title}</p>
              <p className='text-[rgba(255,_255,_255,_0.88)] text-center text-[17px] font-normal leading-[142%] mt-4'>
                {item.description}
              </p>
              <div className='text-white flex  py-8 items-center justify-center gap-2 mt-8'>
                Learn more
                <BiRightArrowAlt size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
        {serviceFeatures.map((item, index) => (
          <div key={index} className={` `}>
            <div>
              <p className='text-[#161C2D] text-center text-[48px] font-normal leading-[58px]'>
                {item.title}
              </p>
              <p className='text-[rgba(22,_28,_45,_0.70)] text-center  text-[19px] not-italic font-normal leading-[32px] mt-4'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
