// This is the MobileSidebar component that displays the sidebar items in the dashboard for mobile devices only.

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getUser } from '@/utils/get-user';
import Logo from '../../Logo';
import ButtonSignout from './ButtonSignout';
import MobileSidebarItems from './MobileSidebarItems';

const MobileSidebar = async () => {
  const user = await getUser();

  return (
    <div className='p-4 h-full flex items-center justify-between shadhow-sm'>
      <Logo />
      <Sheet>
        <SheetTrigger className='md:hidden hover:opacity-75 transition'>
          <BiMenu size={20} />
        </SheetTrigger>
        <SheetContent side='left' className='p-0'>
          <div className='h-screen flex flex-col justify-between items-start border-r px-4 py-8'>
            <div className='w-full flex flex-col gap-8'>
              <div className='px-3'>
                <Logo />
              </div>

              <MobileSidebarItems user={user} />
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
