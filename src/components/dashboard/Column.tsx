'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/button';
import { LuArrowUpDown } from 'react-icons/lu';
import { IoIosMore } from 'react-icons/io';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Modal from '../Modal';

export type TableType = {
  id: string;
  status: 'pending' | 'processing' | 'success' | 'failed';
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
          <LuArrowUpDown className='ml-2 h-4 w-4' />
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
              : value === 'processing'
                ? 'bg-blue-100 text-blue-800'
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
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IoIosMore />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <div className='w-full '>
              <Modal
                title='Delete Item'
                labelModalButton='Delete'
                labelActionButton='Delete'
                styleModalButton={{
                  variant: 'link',
                  className: 'text-red-500 hover:no-underline',
                }}
                actionButtonVariant='destructive'>
                <p>Are you sure you want to delete this item?</p>
              </Modal>
              <Modal
                title='Edit Item'
                labelModalButton='Edit'
                labelActionButton='Edit'
                styleModalButton={{
                  variant: 'link',
                  className: 'hover:no-underline',
                }}>
                <p>Are you sure you want to Edit this item?</p>
              </Modal>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
