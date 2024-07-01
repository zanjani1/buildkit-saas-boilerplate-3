// This component provides Google authentication using Supabase's auth UI.
// It is configured to redirect users to a specified callback URL upon successful authentication.
// The appearance of the auth button is customized according to the application's theme.

'use client';

import { supabaseBrowserClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import { FaGoogle } from 'react-icons/fa6';

export default function GoogleAuth() {
  const handleGoogleAuth = async () => {
    const supabase = supabaseBrowserClient();

    // Ensure the redirect URL is configured correctly in the Supabase project settings.
    // Incorrect configuration can lead to failed authentication attempts or security vulnerabilities.
    const redirectUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;

    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUrl,
      },
    });
  };

  return (
    <div className='w-full mt-4'>
      <Button size='lg' onClick={handleGoogleAuth} className='w-full bg-[#2078FF] gap-2'>
        <FaGoogle size={17} />
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
}

// You can also implement rate limiting or add additional logging for authentication attempts.
// This can help mitigate brute force attacks and provide insights into potential security threats.
