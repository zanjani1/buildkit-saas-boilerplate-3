// Function to get the current user from Supabase using the server-side client in server actions.

'use server';

import config from '@/config';
import { supabaseServerClient } from '@/utils/supabase/server';

export const getUser = async () => {
  let user = null;

  if (config.isSupabaseEnabled) {
    const supabase = supabaseServerClient();
    const { data } = await supabase.auth.getUser();
    user = data.user;
  }

  return user;
};
