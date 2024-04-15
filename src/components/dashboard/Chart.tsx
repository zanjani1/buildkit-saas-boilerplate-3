'use client';

import React, { useState, useEffect } from 'react';
import { BarChart } from '@tremor/react';
import CustomRadioButton from '../ui/custom-radio-button';
import { CalendarIcon } from '@radix-ui/react-icons';
import { addDays, format, isWithinInterval } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/utils/utils';

interface ChartData {
  date: string;
  price: number;
}

// Generate random data for the chart
const generateChartData = (numDays: number): ChartData[] => {
  const currentDate = new Date();
  const chartData: ChartData[] = [];

  for (let i = 0; i < numDays; i++) {
    const date = new Date();
    date.setDate(currentDate.getDate() - i);

    chartData.push({
      date: date.toISOString().slice(0, 10),
      price: Math.floor(Math.random() * 5000),
    });
  }

  return chartData;
};

const dataFormatter = (number: number) => Intl.NumberFormat('us').format(number).toString();

const Chart = () => {
  const chartData = generateChartData(50);

  const [selectedOption, setSelectedOption] = useState<string | undefined>('lastMonth');
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>(undefined);
  const [filteredData, setFilteredData] = useState<ChartData[]>(chartData);

  useEffect(() => {
    filterData();
  }, [selectedOption, selectedDateRange]);

  const handleRadioChange = (newValue: string | undefined) => {
    setSelectedOption(newValue);
    if (selectedDateRange) {
      setSelectedDateRange(undefined);
    }
  };

  // Filter data based on selected option
  const filterData = () => {
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
      default:
        break;
    }

    if (selectedDateRange && selectedDateRange.from && selectedDateRange.to) {
      setSelectedOption(undefined);
      filtered = filtered.filter((item) =>
        isWithinInterval(new Date(item.date), {
          start: new Date(selectedDateRange.from as Date),
          end: new Date(selectedDateRange.to as Date),
        })
      );
    }

    setFilteredData(filtered);
  };

  return (
    <>
      <div className='block md:flex items-center gap-4 space-y-3 md:space-y-0'>
        <div className='border-l-4 border-blue-700 p-3 md:p-6 rounded-lg border-y border-y-[#E4E6EA] border-r border-r-[#E4E6EA] space-y-3'>
          <p className='text-[#5A607D] text-sm font-medium'>Title of the KPI</p>
          <p className='text-[#ADAEB6] text-lg md:text-2xl font-semibold'>0.0 USD 0.0 USD </p>
        </div>

        <div className='border-l-4 border-blue-700 p-3 md:p-6 rounded-lg border-y border-y-[#E4E6EA] border-r border-r-[#E4E6EA] space-y-3'>
          <p className='text-[#5A607D] text-sm font-medium'>Title of the KPI</p>
          <p className='text-[#ADAEB6] text-lg md:text-2xl font-semibold'>0.0 USD 0.0 USD </p>
        </div>
      </div>

      <div className='block md:flex items-center gap-2  my-6'>
        <CustomRadioButton
          options={[
            { value: 'today', label: 'Today' },
            { value: 'lastMonth', label: 'Last Month' },
            { value: 'last6Months', label: 'Last 6 Months' },
          ]}
          selectedValue={selectedOption}
          onChange={(value) => handleRadioChange(value)}
        />
        <div className={cn('grid gap-2 mt-2 md:mt-0')}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id='date'
                variant={'outline'}
                className={cn(
                  'w-auto justify-start text-left font-normal py-1 min-w-36',
                  !selectedDateRange && 'text-muted-foreground'
                )}>
                <CalendarIcon className='mr-2 size-4' />
                {selectedDateRange?.from ? (
                  selectedDateRange.to ? (
                    <>
                      {format(selectedDateRange.from, 'LLL dd, y')} -{' '}
                      {format(selectedDateRange.to, 'LLL dd, y')}
                    </>
                  ) : (
                    format(selectedDateRange.from, 'LLL dd, y')
                  )
                ) : (
                  <span> Select Date </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                initialFocus
                mode='range'
                defaultMonth={selectedDateRange?.from}
                selected={selectedDateRange}
                onSelect={(newDateRange) => setSelectedDateRange(newDateRange)}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className='z-10 rounded-xl bg-slate-50/40 p-1.5 ring-1 ring-inset ring-slate-200/50'>
        <div className='border rounded-lg p-4 '>
          <p className='text-[#363A4E] text-lg font-semibold leading-7'>Title</p>
          <p className='text-[#5A607D] text-sm font-medium'>Subtitle</p>
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
};

export default Chart;
