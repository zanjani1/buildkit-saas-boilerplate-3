// Item for the mobile sidebar. This component is being used in the "MobileSidebar.tsx" file.

'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/utils';
import { SheetClose } from '@/components/ui/sheet';
import { sidebarItems } from './SidebarItems';
import { User } from '@supabase/supabase-js';

interface MobileSidebarItemsProps {
  user: User | null;
}

const MobileSidebarItems: FC<MobileSidebarItemsProps> = ({ user }) => {
  const pathname = usePathname();

  // Define the items for the sidebar
  const items = sidebarItems(user);

  return (
    <div className='w-full flex flex-col gap-2'>
      {items.map((item, index) => {
        // Determine if the current item is active
        const isActive = pathname === item.url;

        return (
          <SheetClose asChild key={index}>
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
          </SheetClose>
        );
      })}
    </div>
  );
};

export default MobileSidebarItems;
