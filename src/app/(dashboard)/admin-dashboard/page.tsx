import Chart from '@/components/dashboard/admin-dashboard/Chart';
import ApiUsageChart from '@/components/dashboard/admin-dashboard/DonutChart';
import UsersAreaChart from '@/components/dashboard/admin-dashboard/UsersAreaChart';
import { supabaseAdmin } from '@/utils/supabase/admin';
import React from 'react';

// Define the type of Supabase tables
type SupabaseTable =
  | 'content_creations'
  | 'headshot_generations'
  | 'image_generations'
  | 'interior_designs'
  | 'qr_code_generations'
  | 'voice_transcriptions';

const sampleDashboard = async () => {
  // Function to fetch data from a table and specific field
  async function fetchData(table: SupabaseTable, field: string) {
    try {
      const { data } = await supabaseAdmin
        .from(table)
        .select(field)
        .order('created_at', { ascending: false });

      return data ?? [];
    } catch (error) {
      console.error(`Error fetching data from ${table}:`, error);
      return [];
    }
  }

  // Function to count rejected and successful entries
  function countRejectedAndSuccessful(data: any[], field: string) {
    const rejected = data.filter((item) => !item[field]);
    const successful = data.filter((item) => item[field] && item[field].length > 0);
    return { rejected: rejected.length, successful: successful.length };
  }

  // Function to fetch data and process statistics
  async function fetchDataAndProcessStats(table: string, field: string) {
    const data = await fetchData(table as SupabaseTable, field);
    const totalRequests = data?.length;
    const { rejected, successful } = countRejectedAndSuccessful(data, field);
    return { totalRequests, rejected, successful };
  }

  // Function to fetch statistics
  async function fetchStatistics() {
    const tables = [
      { name: 'Image Generations', table: 'image_generations', field: 'image_urls' },
      { name: 'QR Code Generations', table: 'qr_code_generations', field: 'image_url' },
      { name: 'Voice Transcriptions', table: 'voice_transcriptions', field: 'transcription' },
      { name: 'Interior Designs', table: 'interior_designs', field: 'image_urls' },
      { name: 'Headshot Models', table: 'headshot_generations', field: 'image_urls' },
      { name: 'Content Creations', table: 'content_creations', field: 'results' },
    ];

    const chartData = [];

    for (const { name, table, field } of tables) {
      const { totalRequests, rejected, successful } = await fetchDataAndProcessStats(table, field);
      chartData.push({
        name,
        'Total API Requests': totalRequests,
        Rejected: rejected,
        Successful: successful,
      });
    }

    return chartData;
  }

  // Fetch statistics for the chart
  const chartData = await fetchStatistics();

  //Get all users from the users table
  const { data: users } = await supabaseAdmin
    .from('users')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className='p-4 md:p-8 w-full'>
      <Chart chartData={chartData} />
      <div className='block lg:flex gap-8'>
        <ApiUsageChart chartData={chartData} />
        {users && <UsersAreaChart users={users} />}
      </div>
    </div>
  );
};

export default sampleDashboard;
