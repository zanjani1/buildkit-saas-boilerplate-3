// This route handles the server-side OAuth callback for Supabase authentication.
// It retrieves the auth code from the request URL, exchanges it for a user session, and redirects to the dashboard.
// This is an essential part of the OAuth flow, allowing secure authentication with third-party providers.

import { supabaseServerClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // The `/api/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const origin = requestUrl.origin;

  if (code) {
    const supabase = supabaseServerClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/admin-dashboard`);
}
