'use client';

import { cn } from '@/utils/utils';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface SideBarItemProps {
  icon: any;
  label: string;
  href: string;
}
const SideBarItem: React.FC<SideBarItemProps> = ({ href, icon: Icon, label }: SideBarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (pathname === '/' && href === '/') || pathname === href;

  const onClick = () => {
    router.push(href);
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'flex items-center cursor-pointer gap-x-2 h-9 text-[#363A4E] text-sm font-[500] pl-3 transition-all hover:bg-[#F1F6FF] hover:text-[#1463FF] mb-2 hover:border-slate-300 mx-2 rounded-md',
        isActive && 'text-[#1463FF]  bg-[#F1F6FF]'
      )}>
      <div className='flex items-center gap-x-2 py-4'>
        <Icon
          size={20}
          className={cn(
            'hover:text-[#1463FF]',
            isActive && 'text-[#1463FF] bg-[#F1F6FF]',
            'hover:text-[#1463FF]'
          )}
        />
        {label}
      </div>
    </div>
  );
};

export default SideBarItem;
