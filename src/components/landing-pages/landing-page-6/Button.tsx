import { cn } from '@/utils/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  fill?: boolean;
  size?: string;
  rounded?: boolean;
}

function Button({ children, fill, size, rounded }: ButtonProps) {
  return (
    <button
      className={cn('flex hover:opacity-90 rounded-lg items-center shadow w-fit gap-2.5', {
        'text-black bg-white ': fill,
        'text-white bg-[#343854]': !fill,
        'px-2.5 h-8': size === 'sm',
        'px-4 h-11': size == 'md',
        'rounded-3xl': rounded,
      })}>
      {children}
    </button>
  );
}

export default Button;
