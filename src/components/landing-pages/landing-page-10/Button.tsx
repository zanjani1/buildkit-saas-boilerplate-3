import { cn } from '@/utils/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  fill?: boolean;
  size?: string;
  rounded?: boolean;
  className?: string;
}

function Button({ children, fill, size, rounded, className }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex hover:opacity-90 rounded-lg items-center shadow w-fit gap-2.5 text-sm',
        {
          'text-black bg-white ': fill,
          'text-white bg-[#343854]': !fill,
          'px-2.5 h-8': size === 'sm',
          'px-6 h-11': size == 'md',
          'rounded-3xl': rounded,
        },
        className
      )}>
      {children}
    </button>
  );
}

export default Button;
