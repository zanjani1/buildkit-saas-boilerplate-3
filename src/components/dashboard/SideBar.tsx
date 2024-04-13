import { FC } from 'react';
import SidebarItems from './SidebarItems';
import Logo from '../Logo';

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  return (
    <div className='h-screen hidden md:flex flex-col gap-8 border shadow-sm px-4 py-8'>
      <div className='px-3'>
        <Logo />
      </div>

      <SidebarItems />
    </div>
  );
};

export default SideBar;
