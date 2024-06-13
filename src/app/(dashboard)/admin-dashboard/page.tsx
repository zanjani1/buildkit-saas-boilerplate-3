import ApiRequestChart from '@/components/dashboard/admin-dashboard/ApiRequestChart';
import ApiUsageChart from '@/components/dashboard/admin-dashboard/ApiUsageChart';
import UserStatsChart from '@/components/dashboard/admin-dashboard/UserStatsChart';
import { getUser } from '@/utils/get-user';
import { supabaseAdmin } from '@/utils/supabase/admin';
import { redirect } from 'next/navigation';

// Define the type of Supabase tables
type SupabaseTable =
  | 'content_creations'
  | 'headshot_generations'
  | 'image_generations'
  | 'interior_designs'
  | 'qr_code_generations'
  | 'voice_transcriptions'
  | 'multillm_chatgpt'
  | 'chat_with_file';

// Define the tables to fetch data from supabase
// Each table has a name, table name, and field name to fetch data from the table
const tables = [
  { name: 'Image Generations', table: 'image_generations', field: 'image_urls' },
  { name: 'QR Code Generations', table: 'qr_code_generations', field: 'image_url' },
  { name: 'Voice Transcriptions', table: 'voice_transcriptions', field: 'transcription' },
  { name: 'Interior Designs', table: 'interior_designs', field: 'image_urls' },
  { name: 'Headshot Models', table: 'headshot_generations', field: 'image_urls' },
  { name: 'Content Creations', table: 'content_creations', field: 'results' },
  { name: 'MultiLLM Chatgpt', table: 'multillm_chatgpt', field: 'chat_history' },
  { name: 'Chat With PDF', table: 'chat_with_file', field: 'chat_history' },
];

// Define the type of chart data
interface ChartData {
  name: string;
  'Total API Requests': number;
  Rejected: number;
  Successful: number;
}

const AdminDashboard = async () => {
  const user = await getUser();

  if (!user) {
    redirect('/sample-dashboard');
  }

  // Fetch data from each table
  const chartData: ChartData[] = await Promise.all(
    tables.map(async ({ name, table, field }) => {
      const { data, error } = await supabaseAdmin.from(table as SupabaseTable).select(field);

      if (error) {
        console.error(`Error fetching data from ${table}:`, error);
        return { name, 'Total API Requests': 0, Rejected: 0, Successful: 0 };
      }

      // Calculate the total requests, successful requests, and rejected requests
      const totalRequests = data.length;
      const successful = data.filter((entry: any) => entry[field]?.length > 0).length;

      // Return the chart data with the total requests, successful requests, and rejected requests
      return {
        name,
        'Total API Requests': totalRequests,
        Rejected: totalRequests - successful,
        Successful: successful,
        entries: data,
      };
    })
  );

  // Get all users from the users table
  const { data: users } = await supabaseAdmin
    .from('users')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className='p-4 md:p-8 w-full'>
      <ApiRequestChart chartData={chartData} />
      <div className='block lg:flex gap-8'>
        <ApiUsageChart chartData={chartData} />
        <UserStatsChart users={users || []} />
      </div>
    </div>
  );
};

export default AdminDashboard;
