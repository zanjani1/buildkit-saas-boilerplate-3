import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className='flex px-6 py-4 gap-2 bg-primary-lp3 hover:bg-primary-lp3 hover:opacity-90 max-md:px-3 max-md:py-2 max-md:text-xs text-white rounded-lg items-center shadow'>
      {children}
    </button>
  );
}
