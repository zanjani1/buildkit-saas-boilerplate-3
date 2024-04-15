'use client';

import { Toaster } from '@/components/ui/toaster';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';
import { supabaseBrowserClient } from '@/utils/supabase/client';
import config from '@/config';

const CrispChat = (): null => {
  const pathname = usePathname();

  const setupUser = useCallback(async () => {
    const supabase = supabaseBrowserClient();

    const { data } = await supabase.auth.getUser();

    if (data?.user) {
      Crisp.session.setData({ email: data.user?.email });
    }
  }, []);

  useEffect(() => {
    if (config.crisp.id) {
      Crisp.configure(config.crisp.id);

      // You can also use <ButtonCrispSupport /> to manually add support button anywhere in the website.
      if (!config.crisp.allowedRoutes.includes(pathname)) {
        Crisp.chat.hide();
        Crisp.chat.onChatClosed(() => {
          Crisp.chat.hide();
        });
      }

      if (config.isSupabaseEnabled) {
        setupUser();
      }
    }
  }, [pathname, setupUser]);

  return null;
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Toaster />
      <CrispChat />
    </div>
  );
}
