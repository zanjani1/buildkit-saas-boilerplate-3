// This is a context wrapper component that includes all the context providers your application needs.
// It wraps the application's child components with the required contexts, such as Toaster for notifications and CrispChat for customer support chat.

'use client';

import { Toaster } from '@/components/ui/toaster';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';
import { supabaseBrowserClient } from '@/utils/supabase/client';
import config from '@/config';

// This component configures and controls the visibility of the Crisp chat based on the URL path.
// It checks if the current route is allowed for Crisp chat:
// - If not allowed, it hides the chat window.
// - It also sets up a listener to hide the chat window whenever the chat is closed.
// If Supabase is enabled, it sets up user data in Crisp session for personalized support.
// This component does not render any visual elements directly (returns null).
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

      const isCrispHidden = config.crisp.hideOnRoutes?.includes(pathname);

      // You can also use <ButtonCrispSupport /> to manually add support button anywhere in the website.
      if (isCrispHidden) {
        Crisp.chat.hide();
        Crisp.chat.onChatClosed(() => {
          Crisp.chat.hide();
        });
      }

      if (config.isSupabaseEnabled && !isCrispHidden) {
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
