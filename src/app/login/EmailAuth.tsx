import { FC } from 'react';
import { SubmitButton } from '../../components/login/submit-button';
import { headers } from 'next/headers';
import { supabaseServerClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

interface EmailAuthProps {
  searchParams: { message: string };
}

const EmailAuth: FC<EmailAuthProps> = ({ searchParams }) => {
  const signIn = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = supabaseServerClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect(`/login?message=${error}`);
    }

    return redirect('/protected');
  };

  const signUp = async (formData: FormData) => {
    'use server';

    const origin = headers().get('origin');
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = supabaseServerClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect(`/login?message=${error}`);
    }

    return redirect('/login?message=Check email to continue sign in process');
  };

  return (
    <form className='animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground'>
      <label className='text-md' htmlFor='email'>
        Email
      </label>
      <input
        className='rounded-md px-4 py-2 bg-inherit border mb-6'
        name='email'
        placeholder='you@example.com'
        required
      />
      <label className='text-md' htmlFor='password'>
        Password
      </label>
      <input
        className='rounded-md px-4 py-2 bg-inherit border mb-6'
        type='password'
        name='password'
        placeholder='••••••••'
        required
      />
      <SubmitButton
        formAction={signIn}
        className='bg-green-700 rounded-md px-4 py-2 text-foreground mb-2'
        pendingText='Signing In...'>
        Sign In
      </SubmitButton>
      <SubmitButton
        formAction={signUp}
        className='border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2'
        pendingText='Signing Up...'>
        Sign Up
      </SubmitButton>
      {searchParams?.message && (
        <p className='mt-4 p-4 bg-foreground/10 text-foreground text-center'>{searchParams.message}</p>
      )}
    </form>
  );
};

export default EmailAuth;
