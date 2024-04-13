import Navbar from '@/components/dashboard/Navbar';
import SideBar from '@/components/dashboard/SideBar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <div className='h-[80px] max-w-7xl md:pl-56 fixed md:hidden inset-y-0 w-full z-50'>
        <Navbar />
      </div>
      <div className='hidden md:flex h-full w-56 flex-col inset-y-0 fixed z-50'>
        <SideBar />
      </div>

      <div className='md:pl-56 h-full'>{children}</div>
    </div>
  );
};

export default layout;
