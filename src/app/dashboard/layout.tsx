import React from 'react';
import Sidebar from '@/components/dashboard/sidebar/Sidebar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='w-64 hidden md:block'>
        <Sidebar />
      </div>

      <div className='w-full'>{children}</div>
    </div>
  );
};

export default layout;
