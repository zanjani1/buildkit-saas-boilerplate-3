import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SideBar from './SideBar';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition'>
        <HamburgerMenuIcon />
        <SheetContent side='left' className='p-0'>
          <SideBar />
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  );
};

export default MobileSidebar;
