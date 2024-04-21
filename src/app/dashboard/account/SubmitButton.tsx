// This component is a custom button that handles form submission states.
// It displays a loading indicator when the form is being processed.
// The loading color can be customized through the 'loaderColor' prop.

'use client';

import { useFormStatus } from 'react-dom';
import { type ComponentProps } from 'react';

import { BarLoader } from 'react-spinners';
import { Button, ButtonProps } from '@/components/ui/button';

type Props = ComponentProps<'button'> &
  ButtonProps & {
    loaderColor?: string; // Optional prop to customize the loader color
  };

export function SubmitButton({ loaderColor, children, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction; // Determines if the specific form action is pending

  return (
    <Button {...props} type='submit' aria-disabled={pending}>
      {isPending ? <BarLoader height={1} color={loaderColor ?? 'white'} /> : children}
    </Button>
  );
}
