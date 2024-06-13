// This component handles the password reset process for users who have forgotten their passwords.
// It resets the user's password using the provided reset code and new password.
// If any errors occur during the password reset process, the error message is shown to the user through the URL query parameter.

import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getUser } from '@/utils/get-user';
import InputWrapper from '@/components/InputWrapper';
import { Input } from '@/components/ui/input';
import config from '@/config';
import { supabaseServerClient } from '@/utils/supabase/server';
import { SubmitButton } from '../../components/SubmitButton';

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: { message: string; code: string };
}) {
  const user = await getUser();

  if (user) {
    redirect(`/admin-dashboard`);
  }

  // Server action function to handle reset password request
  const handleResetPassword = async (formData: FormData) => {
    'use server';

    const password = formData.get('new-password') as string;
    const confirmPassword = formData.get('confirm-password') as string;
    if (!password || password !== confirmPassword) {
      redirect(`/reset-password?message=Passwords do not match`);
    }

    const code = searchParams.code;
    if (!code) {
      redirect(`/reset-password?message=Invalid reset code`);
    }

    const supabase = supabaseServerClient();

    // This resets the user's password using the provided reset code and new password.
    const { error: codeExchangeError } = await supabase.auth.exchangeCodeForSession(code);
    if (codeExchangeError) {
      throw new Error(codeExchangeError.message || 'Unable to reset password. Link expired!');
    }

    // This updates the user's password.
    const { error } = await supabase.auth.updateUser({
      password,
    });
    if (error) {
      redirect(`/reset-password?message=${error.message || 'Unable to reset password. Try again!'}`);
    }
  };

  return (
    <div className='h-screen flex'>
      <div className='w-full flex flex-col items-center justify-center px-6'>
        <h1 className='text-4xl font-medium mb-4'>{config.app.name}</h1>
        <h2 className='text-[#8F95B2] text-sm mb-12'>Create a new Password</h2>

        <div className='w-full sm:max-w-md flex flex-col gap-8 items-center'>
          <form className='w-full flex flex-col justify-center gap-8 text-foreground mt-2'>
            <InputWrapper id='new-password' label='New Password'>
              <Input
                id='new-password'
                type='password'
                name='new-password'
                placeholder='••••••••'
                required
                className='h-10'
              />
            </InputWrapper>
            <InputWrapper id='confirm-password' label='New Password'>
              <Input
                id='confirm-password'
                type='password'
                name='confirm-password'
                placeholder='••••••••'
                required
                className='h-10'
              />
            </InputWrapper>

            <SubmitButton formAction={handleResetPassword} className='h-10'>
              Update
            </SubmitButton>

            <div className='text-sm font-light text-center'>
              <span>Remember Password?</span>
              <Link href='/login' className='text-sm text-primary font-light px-2 hover:underline'>
                Login
              </Link>
            </div>
          </form>

          {searchParams?.message && (
            <p className='w-full mt-4 p-4 bg-muted text-red-600 text-sm text-center rounded-md'>
              {searchParams.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
