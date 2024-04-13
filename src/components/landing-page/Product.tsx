import ChatIcon from '@/assets/icons/ChatIcon';
import IntegrationIcon from '@/assets/icons/IntegrationIcon';
import TaskIcon from '@/assets/icons/TaskIcon';
import UserIcon from '@/assets/icons/UserIcon';

const items = [
  {
    icon: UserIcon,
    title: 'Expertise & Innovation',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: TaskIcon,
    title: 'Organized tasks',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: ChatIcon,
    title: 'Easy Feedback Sharing',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: IntegrationIcon,
    title: 'Seamless Integration',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
];

export default async function Product() {
  return (
    <div id='product' className='bg-waves bg-[#EDF6FF] mx-auto p-4'>
      <div className='max-w-4xl flex flex-col justify-center items-center mx-auto py-20 space-y-20'>
        <div className='space-y-7 max-w-xl'>
          <p className='text-[#1463FF] font-bold text-center'>WHY CHOOSE US</p>
          <p className=' text-[#161C2D] text-center text-4xl not-italic font-normal leading-[48px] tracking-[-1.2px];'>
            People choose us because we serve the best for everyone
          </p>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-16'>
          {items.map((item, index) => (
            <div key={index} className='flex items-start'>
              <div className='mr-4'>
                <item.icon />
              </div>
              <div>
                <p className='text-[#161C2D] text-22 font-semibold leading-[32px]'>{item.title}</p>
                <p className='text-[rgba(22,28,45,0.70)] text-17 leading-[29px]'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
