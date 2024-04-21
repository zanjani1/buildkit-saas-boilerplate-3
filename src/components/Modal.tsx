// This snippet demonstrates the use of a Modal component to display a dialog box with a title, content, and action buttons.
// The Modal component is used in the DropdownMoreActions component to confirm the deletion or editing of an item in this case.
// You can use the Modal component to create custom dialog boxes for various purposes in your application.
// You just need to provide the title, content (can be any react component), and action buttons for the dialog box.

'use client';

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
  styleModalButton?: ButtonProps;
  labelActionButton?: string;
  includeCancelButton?: boolean;
  actionButtonVariant?: ButtonProps['variant'];
  handleAction?: () => void;
}

const Modal: FC<ModalProps> = ({
  title,
  children,
  className,
  labelModalButton,
  styleModalButton,
  labelActionButton,
  includeCancelButton = true,
  actionButtonVariant = 'default',
  handleAction,
}) => {
  const { className: modalButtonClassName, ...modalButtonProps } = styleModalButton ?? {};

  return (
    <Dialog>
      <DialogTrigger className={cn('w-full', buttonVariants(modalButtonProps), modalButtonClassName)}>
        {labelModalButton ?? 'Open Modal'}
      </DialogTrigger>

      <DialogContent className={cn('w-11/12 rounded-lg', className)}>
        <DialogHeader className='h-10 border-b mb-2'>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <DialogDescription className='mb-4'>{children}</DialogDescription>

        <DialogFooter>
          <Button
            onClick={handleAction}
            className={cn('sm:w-1/2', buttonVariants({ variant: actionButtonVariant }))}>
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
