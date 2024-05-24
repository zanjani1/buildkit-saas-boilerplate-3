import { cn } from '@/utils/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  fill?: boolean;
  size?: string;
}

function Button({ children, fill, size }: ButtonProps) {
  return (
    <button
      className={cn('flex hover:opacity-90 rounded-lg items-center shadow w-fit', {
        'text-black bg-white ': fill,
        'text-white bg-[#262626]': !fill,
        'px-2.5 h-8': size === 'sm',
        'px-4 h-11': size == 'md',
        'md:h-11 md:px-5 h-8 px-3 rounded-xl': size == 'lg',
      })}>
      {children}
    </button>
  );
}

export default Button;
