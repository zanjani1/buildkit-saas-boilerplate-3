'use client';

import { useState, useEffect } from 'react';
import { BarChart } from '@tremor/react';
import { addDays, format, isWithinInterval } from 'date-fns';
import { DateRange } from 'react-day-picker';
import SelectDuration from './SelectDuration';

const dataFormatter = (number: number) => Intl.NumberFormat('us').format(number).toString();

export interface ChartData {
  date: string;
  price: number;
}

export type TypeSelectDurationInput = {
  duration?: string;
  dateRange?: DateRange;
};

const durationOptions = [
  { value: 'today', label: 'Today' },
  { value: 'lastMonth', label: 'Last Month' },
  { value: 'last6Months', label: 'Last 6 Months' },
];

export default function Chart({ sampleChartData }: { sampleChartData: ChartData[] }) {
  const chartData = sampleChartData;

  const [selectedOption, setSelectedOption] = useState<string | undefined>('lastMonth');
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>(undefined);
  const [filteredData, setFilteredData] = useState<ChartData[]>(chartData);

  const handleSelectDuration = ({ duration, dateRange }: TypeSelectDurationInput) => {
    setSelectedOption(duration);
    setSelectedDateRange(dateRange);
  };

  // Filter data based on selected option
  useEffect(() => {
    let filtered = chartData;

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

      <SelectDuration
        options={durationOptions}
        selectedValue={selectedOption}
        selectedDateRange={selectedDateRange}
        onSelect={handleSelectDuration}
      />

      <div className='z-10 rounded-xl bg-slate-50/40 p-1.5 ring-1 ring-inset ring-input'>
        <div className='border rounded-lg p-4 '>
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
