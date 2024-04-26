// Sidebar component used in the dashboard layout to display the sidebar with the logo, sidebar items, and sign-out button.

import { FC } from 'react';
import SidebarItems from './SidebarItems';
import Logo from '../../Logo';
import ButtonSignout from './ButtonSignout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getUser } from '@/utils/get-user';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = async () => {
  const user = await getUser();

  return (
    <div className='h-screen flex flex-col justify-between items-start border-r px-4 py-8'>
      <div className='w-full flex flex-col gap-8'>
        <div className='px-3'>
          <Logo />
        </div>

        <SidebarItems user={user} />
      </div>

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
  );
};

export default Sidebar;
