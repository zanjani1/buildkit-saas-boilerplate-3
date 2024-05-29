import React from 'react';
import Sidebar from '@/components/dashboard/sidebar/Sidebar';
import MobileSidebar from '@/components/dashboard/sidebar/MobileSidebar';

// Custom layout for Dashboared Pages including Sidebar and MobileSidebar.
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen flex'>
      <div className='w-72 hidden md:flex flex-col'>
        <Sidebar />
      </div>
      <div className='w-full max-w-7xl overflow-auto px-1'>
        <div className='md:hidden'>
          <MobileSidebar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
