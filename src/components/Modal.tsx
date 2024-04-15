import { FC, ReactNode } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button, ButtonProps, buttonVariants } from './ui/button';
import { cn } from '@/utils/utils';

interface ModalProps extends ButtonProps {
  title: string;
  children: ReactNode;
  className?: string;
  labelModalButton?: string;
  labelActionButton?: string;
  includeCancelButton?: boolean;
  handleAction?: () => void;
}

const Modal: FC<ModalProps> = ({
  title,
  children,
  className,
  labelModalButton,
  labelActionButton,
  includeCancelButton = true,
  handleAction,
  ...props
}) => {
  return (
    <Dialog>
      <DialogTrigger className={buttonVariants({ ...props })}>
        {labelModalButton ?? 'Open Modal'}
      </DialogTrigger>

      <DialogContent className={cn('w-11/12 rounded-lg', className)}>
        <DialogHeader className='h-10 border-b mb-2'>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <DialogDescription className='mb-4'>{children}</DialogDescription>

        <DialogFooter>
          <Button onClick={handleAction} className='sm:w-1/2'>
            {labelActionButton ?? 'Continue'}
          </Button>
          {includeCancelButton && (
            <DialogClose className='sm:w-1/2'>
              <Button variant='outline' className='w-full'>
                Cancel
              </Button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
