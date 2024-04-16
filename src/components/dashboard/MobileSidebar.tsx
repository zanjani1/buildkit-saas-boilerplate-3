import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { BiMenu } from 'react-icons/bi';
import Sidebar from './sidebar/Sidebar';
import Logo from '../Logo';

const MobileSidebar = () => {
  return (
    <div className='p-4 h-full flex items-center justify-between shadhow-sm'>
      <Logo />
      <Sheet>
        <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition'>
          <BiMenu size={20} />
        </SheetTrigger>
        <SheetContent side='left' className='p-0'>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
