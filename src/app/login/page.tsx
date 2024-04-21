// This page represents the login screen of the application.
// It displays a central form allowing users to log in or register either through email or Google authentication.
// The application name is dynamically fetched from the config and displayed at the top.
// The `EmailAuth` and `GoogleAuth` components are used here for handling the respective authentication methods.

import EmailAuth from '@/components/auth/EmailAuth';
import GoogleAuth from '@/components/auth/GoogleAuth';
import config from '@/config';

export default function Login() {
  return (
    <div className='h-screen flex'>
      <div className='w-full flex flex-col items-center justify-center px-6'>
        <h1 className='text-4xl font-medium mb-4'>{config.app.name}</h1>
        <h2 className='text-[#8F95B2] text-sm mb-12'>Login or register with your email</h2>

        <div className='w-full sm:max-w-md flex flex-col gap-8 items-center'>
          <GoogleAuth />
          <hr className='w-full bg-[#CDCDCD]' />
          <EmailAuth />
        </div>
      </div>
    </div>
  );
}
