import { ArrowRightIcon } from '@radix-ui/react-icons';
export default function Headers() {
  return (
    <div className='flex bg-neutral-900 w-full text-white gap-3 py-2 px-3 justify-center items-center max-h-11 text-xs md:text-sm '>
      <span className='text-center max-w-[397px]'>
        Summer Sale: Get flat 10% off on any pack of podnotes.
      </span>
      <ArrowRightIcon />
    </div>
  );
}
