import React from 'react';
import { Card, DonutChart, List, ListItem } from '@tremor/react';
import { FC } from 'react';

// Define the type for the data passed to ApiUsageChart component
interface ApiUsageChartType {
  chartData: {
    name: string;
    'Total API Requests': number;
    Rejected: number;
    Successful: number;
    entries?: { chat_history: any[]; model: string | null }[];
  }[];
}

type TypeCategorizedData = {
  [key: string]: {
    name: string;
    'Total API Requests': number;
    color: string;
  };
};

const categoryColors: { [key: string]: string } = {
  'Control Net': 'blue',
  'Stable Diffusion': 'green',
  Deepgram: 'purple',
  OpenAI: 'yellow',
  Astria: 'pink',
  Other: 'gray',
  Claude: 'orange',
  'Llama 2': 'red',
  Mistral: 'indigo',
};

// Function to categorize API usage based on tools and models
const getCategoryForTool = (tool: string): string[] => {
  // Define mappings of tools to categories
  const toolCategoryMappings: { [key: string]: string[] } = {
    'Interior Designs': ['Control Net'],
    'Image Generations': ['Stable Diffusion'],
    'QR Code Generations': ['Stable Diffusion'],
    'Voice Transcriptions': ['Deepgram', 'OpenAI'],
    'Content Creations': ['OpenAI'],
    'Headshot Models': ['Astria'],
    'Chat With PDF': ['OpenAI'],
    'MultiLLM Chatgpt': ['Claude'],
  };

  // Retrieve categories for the tool
  return toolCategoryMappings[tool] || ['Other'];
};

const ApiUsageChart: FC<ApiUsageChartType> = ({ chartData }) => {
  // Categorize API usage data
  const categorizedData = chartData.reduce((acc, item) => {
    const totalRequests = item['Total API Requests'];
    const categories = getCategoryForTool(item.name);

    categories.forEach((category) => {
      if (!acc[category]) {
        acc[category] = {
          name: category,
          'Total API Requests': 0,
          color: categoryColors[category],
        };
      }
      acc[category]['Total API Requests'] += totalRequests;
    });
    return acc;
  }, {} as TypeCategorizedData);

  // Convert categorized data to array
  const categorizedChartData = Object.values(categorizedData);

  return (
    <div className='rounded-xl bg-slate-50/40 p-1.5 ring-1 ring-inset ring-input mt-8 w-full lg:w-1/2'>
      <Card className='rounded-lg p-4 h-full'>
        <h3 className='text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
          API Usage
        </h3>
        <div className='block md:flex items-center justify-center gap-1'>
          <DonutChart
            data={categorizedChartData.map((item) => ({
              name: item.name,
              amount: item['Total API Requests'],
            }))}
            colors={categorizedChartData.map((item) => item.color)}
            category='amount'
            index='name'
            variant='donut'
          />
          <div className='max-h-64 overflow-auto w-full'>
            <p className='flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content'>
              <span>Category</span>
              <span>API Requests</span>
            </p>
            <List className='mt-2'>
              {categorizedChartData.map((item) => (
                <ListItem key={item.name} className='space-x-6'>
                  <div className='flex items-center space-x-2.5 truncate'>
                    <span
                      className={`size-2.5 shrink-0 rounded-sm bg-${item.color}-500`}
                      aria-hidden={true}
                    />
                    <span className='truncate dark:text-dark-tremor-content-emphasis'>{item.name}</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <span className='font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                      {item['Total API Requests']}
                    </span>
                  </div>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ApiUsageChart;
