// This component handles both user registration and login via email.
// It toggles between login and registration forms based on the user's choice.
// Forms are submitted to the `signIn` or `signUp` actions depending on the mode (login or register).
// Errors during form submission are displayed using the `toast` function.
// Successful authentication redirects the user to the `/admin-dashboard`.

'use client';

import { FC, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { signIn, signUp } from '@/app/login/actions';
import { toast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface EmailAuthProps {}

const EmailAuth: FC<EmailAuthProps> = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const router = useRouter();

  // authStatusLabel is a dynamic text that changes based on whether the user is in login or registration mode.
  const authStatusLabel = isLogin ? "Don't have an account?" : 'Already have an account?';

  // handleFormAction is an asynchronous function triggered on form submission.
  // It calls the signIn or signUp functions based on the isLogin state.
  const handleFormAction = async (formData: FormData) => {
    let error;

    if (isLogin) {
      error = await signIn(formData);
    } else {
      error = await signUp(formData);
    }
    if (error) {
      toast({ description: error, variant: 'destructive' });
      return;
    }

    router.push('/admin-dashboard');
  };

  return (
    <form className='w-full flex flex-col justify-center gap-8 text-foreground mt-2'>
      <div className='flex flex-col gap-4'>
        {!isLogin && <Input id='full-name' name='full-name' placeholder='Name' required className='h-10' />}
        <Input id='email' name='email' placeholder='Email' required className='h-10' />
        <Input
          id='password'
          type='password'
          name='password'
          placeholder='Password'
          required
          className='h-11'
        />
      </div>

      <Button variant='secondary' formAction={handleFormAction} className='h-10'>
        {isLogin ? 'Sign In' : 'Sign Up'}
      </Button>

      <Link
        href='/forgot-password'
        className='text-sm text-primary text-center font-light px-2 hover:underline'>
        Forgot password?
      </Link>

      <div className='text-sm font-light text-center'>
        <p>
          By proceeding you agree to our{' '}
          <Link href='/terms-of-service' target='_blank' className='font-semibold hover:underline'>
            Terms
          </Link>{' '}
          and{' '}
          <Link href='/privacy-policy' target='_blank' className='font-semibold hover:underline'>
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      <div className='text-sm font-light text-center'>
        <span>{authStatusLabel}</span>
        <Button
          type='button'
          variant='link'
          onClick={() => setIsLogin(!isLogin)}
          className='text-sm text-primary font-light px-2 hover:underline'>
          {isLogin ? 'Register' : 'Login'}
        </Button>
      </div>
    </form>
  );
};

export default EmailAuth;

// For this component, you can consider adding server-side validation for additional security.
// This will help prevent malicious users from bypassing client-side validations.
