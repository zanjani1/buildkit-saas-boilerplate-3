import SideBar from '@/components/dashboard/SideBar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='w-64 hidden md:block'>
        <SideBar />
      </div>

      <div className='w-full'>{children}</div>
    </div>
  );
};

export default layout;
