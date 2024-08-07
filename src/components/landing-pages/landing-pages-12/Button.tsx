import { cn } from '@/utils/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  fill?: boolean;
  bg?: boolean;
  size?: string;
  ghost?: boolean;
  rounded?: boolean;
  ultimate?: boolean;
  pro?: boolean;
  className?: string;
}

function Button({ children, fill, bg, size, ghost, rounded, ultimate, pro, className }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-lg shadow w-fit text-sm',
        {
          'text-black bg-white': fill,
          'text-white bg-neutral-900': !fill && !ultimate && pro,
          'text-black bg-white border border-gray-200': ultimate,
          'text-gray-900 bg-neutral-100': bg,
          'hover:bg-accent hover:text-accent-foreground bg-white gap-2': ghost,
          'px-6 h-10 w-44 font-medium': size === 'sm',
          'px-6 h-11': size === 'md',
          'w-16 h-10 rounded-2xl py-1 px-2': size === 'semi',
          'w-full h-14 rounded-2xl py-1 px-2 gap-2': size === 'lg',
          'rounded-3xl': rounded,
        },
        className
      )}>
      {children}
    </button>
  );
}

export default Button;
