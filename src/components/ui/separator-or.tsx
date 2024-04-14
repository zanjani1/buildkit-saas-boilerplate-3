import { FC } from 'react';

interface SeparatorOrProps {}

const SeparatorOr: FC<SeparatorOrProps> = () => {
  return (
    <>
      <div className='flex items-center gap-1'>
        <hr className='w-full' />
        or
        <hr className='w-full' />
      </div>
    </>
  );
};

export default SeparatorOr;
