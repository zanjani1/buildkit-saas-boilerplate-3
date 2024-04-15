'use client';

import config from '@/config';
import { supabaseBrowserClient } from '@/utils/supabase/client';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function GoogleAuth() {
  const supabase = supabaseBrowserClient();
  const redirectUrl = `${config.app.url}/api/auth/callback`;

  return (
    <div className='w-full mt-4'>
      <Auth
        supabaseClient={supabase}
        onlyThirdPartyProviders={true}
        providers={['google']}
        redirectTo={redirectUrl}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                defaultButtonText: 'white',
                defaultButtonBackground: '#2078FF',
                defaultButtonBackgroundHover: '#2078ffeb',
              },
              radii: {
                borderRadiusButton: '6px',
              },
            },
          },
        }}
      />
    </div>
  );
}
