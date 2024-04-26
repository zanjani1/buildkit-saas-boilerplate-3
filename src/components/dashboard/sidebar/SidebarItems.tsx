// This is the SidebarItems component that displays the sidebar items in the dashboard.

'use client';

import { FC } from 'react';
import Link from 'next/link';
import { LuLayoutDashboard } from 'react-icons/lu';
import { LuSettings } from 'react-icons/lu';
import { RiAdminLine } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/utils';
import { User } from '@supabase/supabase-js';

interface SidebarItemsProps {
  user: User | null;
}

// Define the sidebar items
export const sidebarItems = (user: any) =>
  [
    user && {
      icon: RiAdminLine,
      label: 'Admin Dashboard',
      url: '/admin-dashboard',
    },
    {
      icon: LuLayoutDashboard,
      label: 'Sample Dashboard',
      url: '/sample-dashboard',
    },
    {
      icon: LuSettings,
      label: 'Account Setting',
      url: '/account',
    },
  ].filter(Boolean);

const SidebarItems: FC<SidebarItemsProps> = ({ user }) => {
  const pathname = usePathname();

  // Define the items for the sidebar
  const items = sidebarItems(user);

  return (
    <div className='w-full flex flex-col gap-2'>
      {items.map((item, index) => {
        // Determine if the current item is active based on the pathname
        const isActive = pathname === item.url;

        return (
          <Link
            key={index}
            href={item.url}
            className={cn(
              'w-full flex items-center gap-2 h-9 text-secondary text-sm px-3 transition-all hover:bg-[#F1F6FF] hover:text-primary rounded-md',
              isActive && 'text-primary bg-[#F1F6FF]'
            )}>
            {item.icon && (
              <item.icon size={16} className={cn('hover:text-primary', isActive && 'text-primary')} />
            )}
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarItems;
