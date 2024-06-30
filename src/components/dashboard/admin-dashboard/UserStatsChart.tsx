'use client';

// This file is a component that displays an area chart of user counts by date
// It is used in the AdminDashboard component to display the user counts by date
// The component receives the list of users as a prop and aggregates the user counts by date to display the chart

import { FC } from 'react';
import { TypeUser } from '@/types/types';
import { AreaChart } from '@tremor/react';
import { format } from 'date-fns';

// Formatter function to convert number to string
const dataFormatter = (number: number | bigint) => number.toString();

// Function to format the date
const formatDate = (date: Date) => format(date, 'do MMMM');

// Define the props type for the component
interface UserStatsChartProps {
  users: TypeUser[];
}

// Functional component to display area chart of user counts by date
const UserStatsChart: FC<UserStatsChartProps> = ({ users }) => {
  // Aggregate user counts by date
  const userCountByDate = users.reduce(
    (acc, user) => {
      const date = formatDate(new Date(user.created_at));
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    },
    {} as { [key: string]: number }
  );

  // Prepare chart data by mapping user counts to chart data format
  const chartData = Object.entries(userCountByDate).map(([date, usersCount]) => ({
    date,
    Users: usersCount,
  }));

  return (
    <div className='rounded-xl bg-slate-50/40 p-1.5 ring-1 ring-inset ring-input mt-8 w-full lg:w-1/2'>
      <div className='rounded-lg p-4 border'>
        <h3 className='text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
          Users Analytics
        </h3>
        <AreaChart
          data={chartData}
          index='date'
          categories={['Users']}
          colors={['indigo']}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
          className='h-64'
          // xAxisLabel='Month of Year'
          // yAxisLabel='Total Users'
        />
      </div>
    </div>
  );
};

export default UserStatsChart;
