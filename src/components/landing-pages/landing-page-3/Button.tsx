import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className='flex md:px-6 gap-2 bg-primary-[#26AB75] hover:opacity-90 px-3 md:h-12 text-xs md:text-base text-white rounded-lg items-center shadow h-8'>
      {children}
    </button>
  );
}
