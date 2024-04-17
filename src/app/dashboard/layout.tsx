import React from 'react';
import Sidebar from '@/components/dashboard/sidebar/Sidebar';
import MobileSidebar from '@/components/dashboard/MobileSidebar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='h-[80px] md:pl-56 fixed md:hidden inset-y-0 w-full z-50'>
        <MobileSidebar />
      </div>
      <div className='w-64 hidden md:block'>
        <Sidebar />
      </div>

      <div className='w-full h-screen overflow-auto mt-[80px] md:mt-0'>{children}</div>
    </div>
  );
};

export default layout;
