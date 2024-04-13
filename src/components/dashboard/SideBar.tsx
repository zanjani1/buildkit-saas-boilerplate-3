'use client';

import React, { FC } from 'react';
import SideBarRoutes from './SideBarRoutes';
import Image from 'next/image';
import { CiGrid42 } from 'react-icons/ci';
import { CiSettings } from 'react-icons/ci';
import { MdHistory } from 'react-icons/md';

const routes = [
  {
    icon: CiGrid42,
    label: 'My Dashboard',
    href: '/dashboard',
  },
  {
    icon: MdHistory,
    label: 'History',
    href: '/dashboard/history',
  },
  {
    icon: CiSettings,
    label: 'Account Setting',
    href: '/dashboard/account',
  },
];

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  return (
    <div className='h-screen flex flex-col overflow-y-auto border bg-white shadow-sm'>
      <div className='p-0 md:p-2 mb-5 mt-2'>
        <div className='flex ml-4 gap-1'>
          <Image src='/logo.svg' alt='clearbiticone' className='' width={22} height={22} />
          <h1 className='tracking-[-0.54px] '>
            <span className='text-[#1463FF] text-2xl font-bold'>GenAI</span>
          </h1>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <SideBarRoutes routes={routes} />
      </div>
    </div>
  );
};

export default SideBar;
