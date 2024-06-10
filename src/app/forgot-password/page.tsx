// This function handles the password reset process for users who have forgotten their passwords.
// It sends a password reset email to the requested email address.
// If any errors occur during the password reset process, the error message is shown to the user through the URL query parameter.

import { Input } from '@/components/ui/input';
import Link from 'next/link';
import config from '@/config';
import InputWrapper from '@/components/InputWrapper';
import { redirect } from 'next/navigation';
import { supabaseServerClient } from '@/utils/supabase/server';
import { headers } from 'next/headers';
import { getUser } from '@/utils/get-user';
import { SubmitButton } from '../../components/SubmitButton';

export default async function ForgotPassword({ searchParams }: { searchParams: { message: string } }) {
  const user = await getUser();

  if (user) {
    redirect(`/admin-dashboard`);
  }

  // Server action function to handle to send reset email to create new password
  const handleForgotPassword = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;

    if (!email) {
      redirect(`/forgot-password?message=Invalid email`);
    }

    const supabase = supabaseServerClient();

    const origin = headers().get('origin');

    // This function sends a password reset email to the requested email address.
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/reset-password`,
    });

    if (error) {
      redirect(`/forgot-password?message=${error}`);
    }

    redirect(`/forgot-password?message=Password reset email sent. Please check your inbox.`);
  };

  return (
    <div className='h-screen flex'>
      <div className='w-full flex flex-col items-center justify-center px-6'>
        <h1 className='text-4xl font-medium mb-4'>{config.app.name}</h1>
        <h2 className='text-[#8F95B2] text-sm mb-12'>Request to reset your password</h2>

        <div className='w-full sm:max-w-md flex flex-col gap-8 items-center'>
          <form className='w-full flex flex-col justify-center gap-8 text-foreground mt-2'>
            <InputWrapper id='email' label='Enter your registered email'>
              <Input id='email' name='email' placeholder='hello@gmail.com' required className='h-10' />
            </InputWrapper>

            <SubmitButton formAction={handleForgotPassword} className='h-10'>
              Send Reset Link
            </SubmitButton>

            <div className='text-sm font-light text-center'>
              <span>Remember Password?</span>
              <Link href='/login' className='text-sm text-primary font-light px-2 hover:underline'>
                Login
              </Link>
            </div>
          </form>

          {searchParams?.message && (
            <p className='w-full mt-4 p-4 bg-muted text-sm text-center rounded-md'>{searchParams.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
