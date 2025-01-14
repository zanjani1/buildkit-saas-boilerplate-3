// Sidebar component used in the dashboard layout to display the sidebar with the logo, sidebar items, and sign-out button.

import { FC } from 'react';
import SidebarItems from './SidebarItems';
import Logo from '../../Logo';
import ButtonSignout from './ButtonSignout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getUser } from '@/utils/get-user';
import { supabaseServerClient } from '@/utils/supabase/server';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = async () => {
  const user = await getUser();
  
  // Fetch user role server-side
  let isAdmin = false;
  if (user) {
    const supabase = supabaseServerClient();
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.id)
      .single();
    
    console.log('User role check:', { userData, userError });
    isAdmin = !userError && userData?.role === 'admin';
  }

  return (
    <div className='h-screen flex flex-col justify-between items-start border-r px-4 py-8'>
      <div className='w-full flex flex-col gap-8'>
        <div className='px-3'>
          <Logo />
        </div>

        <SidebarItems user={user} isAdmin={isAdmin} />
      </div>

      <div className='w-full flex flex-col gap-4'>
        {user ? (
          <ButtonSignout />
        ) : (
          <Link href='/login' className='w-full'>
            <Button variant='outline' className='w-full text-primary border-primary'>
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
