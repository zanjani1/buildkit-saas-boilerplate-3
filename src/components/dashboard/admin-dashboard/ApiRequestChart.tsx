'use client';

// This file is a component that displays a bar chart of API requests
// It is used in the AdminDashboard component to display the API requests
// The component receives the API requests data as a prop and displays the bar chart
// The bar chart displays the total API requests, rejected requests, and successful requests

import { FC } from 'react';
import { BarChart } from '@tremor/react';

const dataFormatter = (number: number) => Intl.NumberFormat('us').format(number).toString();

interface ChartData {
  chartData: {
    name: string;
    'Total API Requests': number;
    Rejected: number;
    Successful: number;
  }[];
}

const ApiRequestChart: FC<ChartData> = ({ chartData }) => {
  return (
    <>
      <div className='z-10 rounded-xl bg-slate-50/40 p-1.5 ring-1 ring-inset ring-input'>
        <div className='border rounded-lg p-4'>
          <h3 className='text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
            API Requests
          </h3>
          <BarChart
            className='mt-6 h-64'
            data={chartData}
            index='name'
            categories={['Total API Requests', 'Rejected', 'Successful']}
            colors={['blue', 'red', 'green']}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </div>
      </div>
    </>
  );
};

export default ApiRequestChart;
