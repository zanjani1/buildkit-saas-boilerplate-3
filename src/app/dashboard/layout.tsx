import SideBar from '@/components/dashboard/SideBar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <SideBar />
      <div>{children}</div>
    </div>
  );
};

export default layout;
