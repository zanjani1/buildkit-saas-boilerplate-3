'use server';

import { supabaseServerClient } from '@/utils/supabase/server';

// This function handles the user sign-in process using email and password.
// It interacts with the Supabase server client to perform authentication.
// Errors during the authentication process are caught and returned as string messages.
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

// This function manages the registration of new users using email, password, and optional full name.
// It sends user data to the Supabase server client to create a new user account.
// If any errors occur during the account creation process, they are caught and returned as string messages.
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
