import React from 'react';
import { cn } from '@/utils/utils';

const sizeClasses = {
  sm: 'px-6 h-10 w-44 font-medium',
  md: 'px-6 h-11',
  semi: 'w-16 h-10 rounded-[32px] py-1 px-2 gap-20 text-sm',
  lg: 'w-full h-10 rounded-2xl py-3 px-6 gap-2',
};

const variantClasses = {
  fill: 'text-black bg-white',
  default: 'text-white bg-[#0C0E1E]',
  secondary: 'text-[#0C0E1E] bg-neutral-100',
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
