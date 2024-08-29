import { ArrowRightIcon } from '@radix-ui/react-icons';

export default function Headers() {
  return (
    <div className='w-full h-9 md:h-11 bg-indigo-600 text-white gap-3 px-3 flex items-center justify-center text-xs md:text-sm md:leading-7 tracking-tight'>
      <span>Summer Sale: Get flat 10% off on any pack of podnotes.</span>
      <ArrowRightIcon fontSize={16} strokeWidth={1.5} />
    </div>
  );
}
