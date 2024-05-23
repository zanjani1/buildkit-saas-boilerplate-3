// This file contains the columns for the table in the dashboard page.

'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { LuArrowUpDown } from 'react-icons/lu';
import DropdownMoreActions from './DropdownMoreActions';

export type TableType = {
  id: string;
  status: 'pending' | 'success' | 'failed';
  email: string;
  name: string;
  date: string;
  message: string;
};

export const columns: ColumnDef<TableType>[] = [
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Date
          <LuArrowUpDown className='ml-2 size-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'message',
    header: 'Message',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const value = row.original.status;
      return (
        <span
          className={`px-2 py-1 rounded-xl text-xs ${
            value === 'pending'
              ? 'bg-yellow-100 text-yellow-800'
              : value === 'success'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
          }`}>
          {value}
        </span>
      );
    },
  },
  {
    header: 'More',
    cell: () => <DropdownMoreActions />, // This is the dropdown menu for more actions
  },
];
