import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/utils';

const buttonVariants = cva(
  'items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-t from-[#0F6FFF] to-[#0F6FFFE5] hover:bg-[#262626]/70 gap-2 items-center justify-center text-center rounded-[8px] text-sm text-white',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent',
        secondary: 'bg-secondary text-white shadow-sm hover:bg-secondary/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground bg-white gap-2',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 py-3 px-8',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
