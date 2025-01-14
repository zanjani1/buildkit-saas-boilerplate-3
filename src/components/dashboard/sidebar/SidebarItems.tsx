// This is the SidebarItems component that displays the sidebar items in the dashboard.

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiAdminLine, RiDashboardLine, RiUser3Line } from 'react-icons/ri';
import { User } from '@supabase/supabase-js';
import { IconType } from 'react-icons';

interface SidebarItemsProps {
  user: User | null;
  isAdmin: boolean;
}

interface SidebarItem {
  icon: IconType;
  label: string;
  url: string;
}

export function sidebarItems(user: User | null, isAdmin: boolean) {
  return [
    user && {
      icon: RiDashboardLine,
      label: 'Sample Dashboard',
      url: '/sample-dashboard',
    },
    user && {
      icon: RiUser3Line,
      label: 'Account',
      url: '/account',
    },
    isAdmin && {
      icon: RiAdminLine,
      label: 'Admin Dashboard',
      url: '/admin-dashboard',
    },
  ].filter(Boolean) as SidebarItem[];
}

export default function SidebarItems({ user, isAdmin }: SidebarItemsProps) {
  const pathname = usePathname();
  const items = sidebarItems(user, isAdmin);

  return (
    <div className='w-full flex flex-col gap-2'>
      {items.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            pathname === item.url
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-muted'
          }`}
        >
          <item.icon className='w-4 h-4' />
          {item.label}
        </Link>
      ))}
    </div>
  );
}
