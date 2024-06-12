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
const formatDate = (date: Date) => {
  const day = format(date, 'do'); // Day with ordinal suffix
  const month = format(date, 'MMMM'); // Full month name
  return `${day} ${month}`;
};

// Define the props type for the component
type UsersAreaChartType = {
  users: TypeUser[];
};

// Functional component to display area chart of user counts by date
const UsersAreaChart: FC<UsersAreaChartType> = ({ users }) => {
  // Initialize an object to store user counts by date
  const userCountByDate: { [key: string]: number } = {};

  // aggregate user counts by date
  users.forEach((user) => {
    const date = new Date(user.created_at);
    const formattedDate = formatDate(date);
    userCountByDate[formattedDate] = (userCountByDate[formattedDate] || 0) + 1;
  });

  // Prepare chart data by mapping user counts to chart data format
  const chartData = Object.keys(userCountByDate).map((date) => ({
    date,
    Users: userCountByDate[date],
  }));

  return (
    <div className='rounded-xl bg-slate-50/40 p-1.5 ring-1 ring-inset ring-input mt-8 w-full lg:w-1/2'>
      <div className='rounded-lg p-4 border'>
        <h3 className='text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
          Users Created by Date
        </h3>
        <AreaChart
          data={chartData}
          index='date'
          categories={['Users']}
          colors={['indigo']}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
          className='h-60'
        />
      </div>
    </div>
  );
};

export default UsersAreaChart;
