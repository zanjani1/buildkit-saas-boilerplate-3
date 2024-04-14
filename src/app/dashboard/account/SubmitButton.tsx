'use client';

import { useFormStatus } from 'react-dom';
import { type ComponentProps } from 'react';

import { BarLoader } from 'react-spinners';
import { Button, ButtonProps } from '@/components/ui/button';

type Props = ComponentProps<'button'> &
  ButtonProps & {
    loaderColor?: string;
  };

export function SubmitButton({ loaderColor, children, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <Button {...props} type='submit' aria-disabled={pending}>
      {isPending ? <BarLoader height={1} color={loaderColor ?? 'white'} /> : children}
    </Button>
  );
}
