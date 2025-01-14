// Item for the mobile sidebar. This component is being used in the "MobileSidebar.tsx" file.

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import { sidebarItems } from './SidebarItems';

interface MobileSidebarItemsProps {
  user: User | null;
  isAdmin: boolean;
}

export default function MobileSidebarItems({ user, isAdmin }: MobileSidebarItemsProps) {
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
