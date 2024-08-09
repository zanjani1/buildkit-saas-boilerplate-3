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
  Pro?: boolean;
  className?: string;
}

function Button({ children, fill, bg, size, ghost, rounded, ultimate, pro, Pro, className }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-lg w-fit text-sm',
        {
          'text-black bg-white': fill,
          'text-white bg-[#0C0E1E]': !fill && !ultimate && pro,
          'text-white bg-slate-950': Pro,
          'text-[#0C0E1E] bg-[#F9F9F9] border border-[#EDEDED]': ultimate,
          'text-black bg-neutral-100': bg,
          'hover:bg-accent hover:text-accent-foreground bg-white gap-2': ghost,
          'px-6 h-10 w-44 font-medium': size === 'sm',
          'px-6 h-11': size === 'md',
          'w-16 h-10 rounded-[32px] py-1 px-2 gap-20 tracking-[-4%] text-sm': size === 'semi',
          'w-full h-10 rounded-2xl py-3 px-6 gap-2': size === 'lg',
          'rounded-3xl': rounded,
        },
        className
      )}>
      {children}
    </button>
  );
}

export default Button;
