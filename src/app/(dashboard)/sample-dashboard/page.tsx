// This component serves as the main Dashboard page, displaying both chart and table data.
// It imports and uses multiple components to render a chart, a divider, and a data table.

import React from 'react';

// Import UI components and data from the relative path or package.
import { TableDashboard } from '@/components/dashboard/sample-dashboard/table/TableDashboard';
import Chart from '@/components/dashboard/sample-dashboard/Chart';
import { columns } from '@/components/dashboard/sample-dashboard/table/Column';
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
      <TableDashboard columns={columns} data={data} />
    </div>
  );
};

export default Dashboard;
