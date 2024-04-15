import React from 'react';
import { DataTable } from '@/components/dashboard/table/Datatable';
import Chart from '@/components/dashboard/chart/Chart';
import { columns } from '@/components/dashboard/table/Column';
import { Divider } from '@tremor/react';
import { sampleTableData } from './sample-table-data';
import { sampleChartData } from './sample-chart-data';

const Dashboard = async () => {
  const data = sampleTableData;

  return (
    <div className='p-4 md:p-8 w-full'>
      <p className='text-2xl font-medium mb-10'>Dashboard</p>

      <Chart sampleChartData={sampleChartData(50)} />
      <Divider>Table</Divider>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Dashboard;
