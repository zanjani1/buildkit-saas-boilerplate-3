// This component is a custom button that handles form submission states.
// It displays a loading indicator when the form is being processed.
// The loading color can be customized through the 'loaderColor' prop.

'use client';

import { useFormStatus } from 'react-dom';
import { ReactNode, type ComponentProps } from 'react';
import { BarLoader } from 'react-spinners';
import { Button, ButtonProps } from '@/components/ui/button';
import { LuLoader } from 'react-icons/lu';

type Props = ComponentProps<'button'> &
  ButtonProps & {
    isCircleLoader?: ReactNode;
    loaderColor?: string;
  };

export function SubmitButton({ isCircleLoader, loaderColor, children, ...props }: Props) {
  const { pending, action } = useFormStatus();

  // Checks if the form is pending and the action matches the form action
  const isPending = pending && action === props.formAction;

  return (
    <Button {...props} type='submit' aria-disabled={pending}>
      {isPending ? (
        isCircleLoader ? (
          <LuLoader className='animate-[spin_3s_linear_infinite]' size={16} />
        ) : (
          <BarLoader height={1} color={loaderColor ?? 'white'} />
        )
      ) : (
        children
      )}
    </Button>
  );
}
