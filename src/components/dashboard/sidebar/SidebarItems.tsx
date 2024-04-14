'use client';

import { FC } from 'react';
import Link from 'next/link';
import { LuLayoutDashboard } from 'react-icons/lu';
import { LuSettings } from 'react-icons/lu';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/utils';

interface SidebarItemsProps {}

// Define the items for the sidebar
const sidebarItems = [
  {
    icon: LuLayoutDashboard,
    label: 'My Dashboard',
    url: '/dashboard',
  },
  {
    icon: LuSettings,
    label: 'Account Setting',
    url: '/dashboard/account',
  },
];

const SidebarItems: FC<SidebarItemsProps> = () => {
  const pathname = usePathname();

  return (
    <div className='w-full flex flex-col gap-2'>
      {sidebarItems.map((item, index) => {
        // Determine if the current item is active
        const isActive = pathname === item.url;

        return (
          <Link
            key={index}
            href={item.url}
            className={cn(
              'w-full flex items-center gap-2 h-9 text-secondary text-sm px-3 transition-all hover:bg-[#F1F6FF] hover:text-primary rounded-md',
              isActive && 'text-primary bg-[#F1F6FF]'
            )}>
            <item.icon size={16} className={cn('hover:text-primary', isActive && 'text-primary')} />
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarItems;
