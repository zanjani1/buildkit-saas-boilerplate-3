// This snippet demonstrates the use of a ButtonSignout component to sign out a user from the application.
// The ButtonSignout component is used in the dashboard sidebar to allow users to sign out of the application.
// You can use the ButtonSignout component to create sign-out buttons anywhere in your application.

'use client';

import { FC } from 'react';
import { supabaseBrowserClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/utils';
import { FaArrowRightLong } from 'react-icons/fa6';

interface ButtonSignoutProps {
  className?: string;
}

const ButtonSignout: FC<ButtonSignoutProps> = ({ className }) => {
  const supabase = supabaseBrowserClient();

  const router = useRouter();

  return (
    <>
      <Button
        variant='link'
        onClick={async () => {
          // Supabase function to sign out the user
          await supabase.auth.signOut();
          router.refresh();
        }}
        className={cn('text-red-700 space-x-2', className)}>
        <span>Sign Out</span>
        <FaArrowRightLong />
      </Button>
    </>
  );
};

export default ButtonSignout;
