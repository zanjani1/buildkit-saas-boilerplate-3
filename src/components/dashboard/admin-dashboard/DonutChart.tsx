'use client';
import { cn } from '@/utils/utils';
import { Card, DonutChart, List, ListItem } from '@tremor/react';
import { FC } from 'react';

// Define the type for the data passed to ApiUsageChart component
interface ApiUsageChartType {
  chartData: {
    name: string;
    'Total API Requests': number;
    Rejected: number;
    Successful: number;
  }[];
}

// Define colors for each category
const categoryColors: { [key: string]: string } = {
  'Control Net': 'blue',
  'Stable Diffusion': 'green',
  Deepgram: 'purple',
  OpenAI: 'yellow',
  Astria: 'pink',
  Other: 'gray',
};

// Function to format numbers with commas
const numberFormatter = (number: number | bigint) => {
  return Intl.NumberFormat('us').format(number).toString();
};

// Function to categorize API usage based on tools
const getCategoryForTool = (tool: string): string[] => {
  switch (tool) {
    case 'Interior Designs':
      return ['Control Net'];
    case 'Image Generations':
    case 'QR Code Generations':
      return ['Stable Diffusion'];
    case 'Voice Transcriptions':
      return ['Deepgram', 'OpenAI'];
    case 'Content Creations':
      return ['OpenAI'];
    case 'Headshot Models':
      return ['Astria'];
    default:
      return ['Other'];
  }
};

// Define the component for the API Usage Chart
const ApiUsageChart: FC<ApiUsageChartType> = ({ chartData }) => {
  // Categorize API usage data
  const categorizedData = chartData.reduce(
    (acc, item) => {
      const categories = getCategoryForTool(item.name);
      categories.forEach((category) => {
        if (!acc[category]) {
          acc[category] = {
            name: category,
            'Total API Requests': 0,
            color: categoryColors[category],
          };
        }
        // Double API requests for 'Voice Transcriptions' when distributing
        const apiRequests =
          item.name === 'Voice Transcriptions' ? item['Total API Requests'] : item['Total API Requests'];
        acc[category]['Total API Requests'] += apiRequests;
      });
      return acc;
    },
    {} as {
      [key: string]: {
        name: string;
        'Total API Requests': number;
        color: string;
      };
    }
  );

  // Convert categorized data to array
  const categorizedChartData = Object.values(categorizedData);

  return (
    <div className='rounded-xl bg-slate-50/40 p-1.5 ring-1 ring-inset ring-input mt-10 w-full lg:w-1/2'>
      <Card className='md:flex gap-10 z-10 rounded-lg p-4'>
        <div>
          <h3 className='text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
            Total API Usage by Category
          </h3>
          {/* Donut Chart Component */}
          <DonutChart
            className='mt-8'
            data={categorizedChartData.map((item) => ({
              name: item.name,
              amount: item['Total API Requests'],
            }))}
            colors={categorizedChartData.map((item) => item.color)}
            category='amount'
            index='name'
            valueFormatter={numberFormatter}
            showTooltip={false}
          />
        </div>
        <div>
          {/* API Requests List */}
          <p className='mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content'>
            <span>Category</span>
            <span>API Requests</span>
          </p>
          <List className='mt-2'>
            {categorizedChartData.map((item) => (
              <ListItem key={item.name} className='space-x-6'>
                <div className='flex items-center space-x-2.5 truncate'>
                  {/* Category Indicator */}
                  <span
                    className={cn('h-2.5 w-2.5 shrink-0 rounded-sm', `bg-${item.color}-500`)}
                    aria-hidden={true}
                  />
                  {/* Category Name */}
                  <span className='truncate dark:text-dark-tremor-content-emphasis'>{item.name}</span>
                </div>
                {/* API Requests Count */}
                <div className='flex items-center space-x-2'>
                  <span className='font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                    {item['Total API Requests']}
                  </span>
                </div>
              </ListItem>
            ))}
          </List>
        </div>
      </Card>
    </div>
  );
};

export default ApiUsageChart;
