'use server';

import { supabaseServerClient } from '@/utils/supabase/server';

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = supabaseServerClient();

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    return `${error}`;
  }
}

export async function signUp(formData: FormData) {
  const fullName = formData.get('full-name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = supabaseServerClient();

  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    return `${error}`;
  }
}
