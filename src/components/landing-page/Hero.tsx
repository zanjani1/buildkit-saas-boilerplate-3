import { User } from '@supabase/supabase-js';

export default async function Hero({ user }: { user: User | null }) {
  return <div className='px-4'>hero</div>;
}
