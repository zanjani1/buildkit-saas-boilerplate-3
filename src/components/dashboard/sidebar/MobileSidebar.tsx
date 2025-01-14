// Mobile sidebar component used in the dashboard layout to display the sidebar with the logo, sidebar items, and sign-out button.

import { FC } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Logo from '../../Logo';
import MobileSidebarItems from './MobileSidebarItems';
import ButtonSignout from './ButtonSignout';
import Link from 'next/link';
import { getUser } from '@/utils/get-user';
import { supabaseServerClient } from '@/utils/supabase/server';

interface MobileSidebarProps {}

const MobileSidebar: FC<MobileSidebarProps> = async () => {
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
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='lg:hidden'>
          <Menu className='h-4 w-4' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <div className='h-full flex flex-col justify-between items-start p-6'>
          <div className='w-full flex flex-col gap-8'>
            <Logo />
            <MobileSidebarItems user={user} isAdmin={isAdmin} />
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
