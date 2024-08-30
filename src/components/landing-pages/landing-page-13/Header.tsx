import { ArrowRightIcon } from '@radix-ui/react-icons';

export default function Headers() {
  return (
    <div className='w-full bg-indigo-600 text-white text-center text-xs md:text-sm tracking-tight py-3'>
      <span>Summer Sale: Get flat 10% off on any pack of builderkit.</span>
      <ArrowRightIcon fontSize={16} strokeWidth={1.5} className='ml-3 inline' />
    </div>
  );
}
