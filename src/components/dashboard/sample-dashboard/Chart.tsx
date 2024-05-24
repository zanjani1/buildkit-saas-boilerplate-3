// This component handles the rendering of a bar chart, including data management and user interaction to filter data based on duration or a specific date range.

'use client';

// Import React hooks, utility functions, and UI components.
import { useState, useEffect } from 'react';
import { BarChart } from '@tremor/react';
import { addDays, format, isWithinInterval } from 'date-fns';
import { DateRange } from 'react-day-picker';
import SelectDuration from './SelectDuration';

// Helper function to format chart data values.
const dataFormatter = (number: number) => Intl.NumberFormat('us').format(number).toString();

// Interfaces to type-check component props and internal state handling.
export interface ChartData {
  date: string;
  price: number;
}

export type TypeSelectDurationInput = {
  duration?: string;
  dateRange?: DateRange;
};

export default function Chart({ sampleChartData }: { sampleChartData: ChartData[] }) {
  const chartData = sampleChartData;

  const [selectedOption, setSelectedOption] = useState<string | undefined>('lastMonth');
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>(undefined);
  const [filteredData, setFilteredData] = useState<ChartData[]>(chartData);

  const handleSelectDuration = ({ duration, dateRange }: TypeSelectDurationInput) => {
    setSelectedOption(duration);
    setSelectedDateRange(dateRange);
  };

  // Effect hook to filter data based on selected time period or specific date range.
  useEffect(() => {
    let filtered = chartData;

    // Switch case to handle filtering logic based on selected time duration.
    switch (selectedOption) {
      case 'today':
        filtered = chartData.filter((item) => item.date === format(new Date(), 'yyyy-MM-dd'));
        break;
      case 'lastMonth': {
        const lastMonth = addDays(new Date(), -30);
        filtered = chartData.filter((item) =>
          isWithinInterval(new Date(item.date), { start: lastMonth, end: new Date() })
        );
        break;
      }
      case 'last6Months': {
        const last6Months = addDays(new Date(), -180);
        filtered = chartData.filter((item) =>
          isWithinInterval(new Date(item.date), { start: last6Months, end: new Date() })
        );
        break;
      }
    }

    // Additional filter for custom date ranges selected through the date picker.
    if (selectedDateRange?.from && selectedDateRange?.to) {
      setSelectedOption(undefined);
      filtered = filtered.filter((item) =>
        isWithinInterval(new Date(item.date), {
          start: new Date(selectedDateRange.from as Date),
          end: new Date(selectedDateRange.to as Date),
        })
      );
    }

    setFilteredData(filtered);
  }, [chartData, selectedOption, selectedDateRange]);

  return (
    <>
      {/* Static UI elements to display key performance indicators. */}
      <div className='block md:flex items-center gap-4 space-y-3 md:space-y-0'>
        <div className='md:w-72 border-l-4 border-l-blue-700 p-3 md:p-6 rounded-lg border-y border-r space-y-3'>
          <p className='text-secondary text-sm font-medium'>Title of the KPI</p>
          <p className='text-secondary/60 text-lg md:text-2xl font-semibold'>0.0 USD</p>
        </div>
        <div className='md:w-72 border-l-4 border-l-blue-700 p-3 md:p-6 rounded-lg border-y border-r space-y-3'>
          <p className='text-secondary text-sm font-medium'>Title of the KPI</p>
          <p className='text-secondary/60 text-lg md:text-2xl font-semibold'>0.0 USD</p>
        </div>
      </div>

      {/* Component to select the duration or date range for the chart data. */}
      <SelectDuration
        selectedValue={selectedOption}
        selectedDateRange={selectedDateRange}
        onSelect={handleSelectDuration}
      />

      {/* Bar chart display section with conditional rendering based on data availability. */}
      <div className='z-10 rounded-xl bg-slate-50/40 p-1.5 ring-1 ring-inset ring-input'>
        <div className='border rounded-lg p-4'>
          <p className='text-lg font-semibold leading-7'>Platform Visitors</p>
          <p className='text-secondary text-sm font-medium'>
            Get a detailed snapshopt for the selected period
          </p>

          <BarChart
            data={filteredData}
            index='date'
            categories={['price']}
            colors={['blue']}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
            tickGap={15}
          />
        </div>
      </div>
    </>
  );
}
