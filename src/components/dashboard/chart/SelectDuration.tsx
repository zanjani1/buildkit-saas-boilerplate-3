// SelectDuration component provides a UI for selecting a data filter duration or a specific date range for the Chart component.
// It dynamically updates the parent component's state based on user selection.

import { cn } from '@/utils/utils';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from '@radix-ui/react-icons';
import { DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import { TypeSelectDurationInput } from './Chart';

// List of options for the duration selector.
const durationOptions = [
  { value: 'today', label: 'Today' },
  { value: 'lastMonth', label: 'Last Month' },
  { value: 'last6Months', label: 'Last 6 Months' },
];

// Define Props interface for SelectDuration component
interface SelectDurationProps {
  selectedValue?: string;
  selectedDateRange?: DateRange;
  onSelect: (value: TypeSelectDurationInput) => void;
}

// SelectDuration component
const SelectDuration: React.FC<SelectDurationProps> = ({ selectedValue, selectedDateRange, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(selectedValue);

  useEffect(() => {
    setSelectedOption(selectedValue);
  }, [selectedValue]);

  const handleOptionChange = (optionValue: string) => {
    setSelectedOption(optionValue);
    // Logic to toggle between selected option and undefined
    const selectedValue = optionValue != selectedOption ? optionValue : undefined;
    onSelect({ duration: selectedValue });
  };

  return (
    <div className='block md:flex items-center gap-2 my-6'>
      {/* Tabs to select between different duration options */}
      <div className='flex'>
        {durationOptions.map((option, index) => (
          <button
            key={option.value}
            className={cn(
              'min-w-fit w-full md:w-[147px] text-sm px-4 py-2 md:py-1.5',
              selectedOption === option.value
                ? 'bg-[#1463FF] text-white'
                : 'bg-white text-[#363A4E] border border-[#E4E6EA]',
              index === 0 && 'rounded-l-md',
              index === durationOptions.length - 1 && 'rounded-r-md'
            )}
            onClick={() => handleOptionChange(option.value)}>
            {option.label}
          </button>
        ))}
      </div>

      {/* Calendar to select date range */}
      <div className={cn('grid gap-2 mt-2 md:mt-0')}>
        <Popover>
          {/* View the selected value or placeholder */}
          <PopoverTrigger asChild>
            <Button
              id='date'
              variant='outline'
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
                <span>Select Date</span>
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent className='w-auto p-0' align='start'>
            <Calendar
              initialFocus
              mode='range'
              defaultMonth={selectedDateRange?.from}
              selected={selectedDateRange}
              onSelect={(dateRange) => onSelect({ dateRange })}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default SelectDuration;
