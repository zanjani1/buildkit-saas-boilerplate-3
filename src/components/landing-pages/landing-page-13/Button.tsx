import React from 'react';
import { cn } from '@/utils/utils';

const sizeClasses = {
  sm: 'px-6 h-10 w-44 font-medium',
  md: 'px-6 h-11',
  semi: 'w-full h-9 rounded-[32px] py-2 px-3 gap-20 text-sm',
  default: 'py-3 px-4 h-[41px] text-sm gap-2 leading-4 mx-auto',
  lg: 'w-auto text-sm h-12 rounded-3xl py-3 px-6 gap-2',
};

const variantClasses = {
  fill: 'text-black bg-white font-semibold',
  default: 'text-white bg-[#0C0E1E]',
  secondary: 'text-[#0C0E1E] border-[#EAEAEA] border rounded-3xl ',
  tertiary: 'bg-[#3C50E0] text-white rounded-3xl border border-indigo-500 ',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'fill', size = 'md', className, ...props }) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-full w-fit text-sm',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
