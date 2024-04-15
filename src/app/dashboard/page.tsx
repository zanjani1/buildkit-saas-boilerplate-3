import React from 'react';
import { DataTable } from '@/components/dashboard/Datatable';
import Chart from '@/components/dashboard/Chart';
import { TableType, columns } from '@/components/dashboard/Column';
import { Divider } from '@tremor/react';

const Dashboard = async () => {
  const data = await getData();

  return (
    <div className='p-4 md:p-8 w-full'>
      <p className='text-[#363A4E] text-2xl font-semibold mb-10'>Dashboard</p>
      <Chart />
      <Divider>Table</Divider>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Dashboard;

async function getData(): Promise<TableType[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      status: 'pending',
      email: 'm@example.com',
      name: 'John Doe',
      date: '2022-10-01',
      message: 'Payment for the month of October',
    },
    {
      id: '728ed52f',
      status: 'success',
      email: 'm@example.com',
      name: 'John Doe',
      date: '2021-10-01',
      message: 'Payment for the month of October',
    },
    {
      id: '728ed52f',
      status: 'processing',
      email: 'm@example.com',
      name: 'John Doe',
      date: '2021-10-01',
      message: 'Payment for the month of October',
    },
    {
      id: '728ed52f',
      status: 'failed',
      email: 'm@example.com',
      name: 'John Doe',
      date: '2021-10-01',
      message: 'Payment for the month of October',
    },
    {
      id: '728ed52f',
      status: 'pending',
      email: 'm@example.com',
      name: 'John Doe',
      date: '2021-10-01',
      message: 'Payment for the month of October',
    },
    {
      id: '728ed52f',
      status: 'success',
      email: 'm@example.com',
      name: 'John Doe',
      date: '2021-10-01',
      message: 'Payment for the month of October',
    },
    {
      id: '728ed52f',
      status: 'processing',
      email: 'm@example.com',
      name: 'John Doe',
      date: '2021-10-01',
      message: 'Payment for the month of October',
    },
    {
      id: '728ed52f',
      status: 'failed',
      email: 'm@example.com',
      name: 'John Doe',
      date: '2021-10-01',
      message: 'Payment for the month of October',
    },
    {
      id: '728ed52f',
      status: 'pending',
      email: 'm@example.com',
      name: 'John Doe',
      date: '2021-10-01',
      message: 'Payment for the month of October',
    },
    {
      id: '728ed52f',
      status: 'success',
      email: 'm@example.com',
      name: 'John Doe',
      date: '2021-10-01',
      message: 'Payment for the month of October',
    },
    {
      id: '728ed52f',
      status: 'processing',
      email: 'm@example.com',
      name: 'John Doe',
      date: '2021-10-01',
      message: 'Payment for the month of October',
    },
    {
      id: '728ed52f',
      status: 'failed',
      email: 'm@example.com',
      name: 'John Doe',
      date: '2021-10-01',
      message: 'Payment for the month of October',
    },
  ];
}
