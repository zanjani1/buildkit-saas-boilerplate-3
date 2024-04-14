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
