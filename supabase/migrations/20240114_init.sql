-- Create enum types
CREATE TYPE public.billingcycle AS ENUM ('month', 'year');
CREATE TYPE public.headshotmodelstatus AS ENUM ('processing', 'finished');
CREATE TYPE public.subscriptiontype AS ENUM ('free', 'standard', 'premium');
CREATE TYPE public.userrole AS ENUM ('user', 'admin');

-- Create users table with role
CREATE TABLE IF NOT EXISTS public.users (
    id uuid REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    email text NOT NULL UNIQUE,
    full_name text,
    avatar_url text,
    role userrole DEFAULT 'user'::userrole,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create RLS policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own data" ON public.users
    FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Admin users can view all data" ON public.users
    FOR ALL
    USING (auth.jwt() ->> 'role' = 'admin');

-- Create required tables for tracking
CREATE TABLE IF NOT EXISTS public.content_creations (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
    results jsonb,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.headshot_generations (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
    generation_id text NOT NULL,
    model_id text NOT NULL,
    prompt text NOT NULL,
    negative_prompt text,
    image_urls text[],
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.image_generations (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
    prediction_id text NOT NULL,
    prompt text NOT NULL,
    model text NOT NULL,
    guidance text NOT NULL,
    inference text NOT NULL,
    no_of_outputs text NOT NULL,
    negative_prompt text,
    image_urls text[],
    error text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.interior_designs (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
    prediction_id text NOT NULL,
    prompt text NOT NULL,
    room_type text NOT NULL,
    theme text NOT NULL,
    ref_image text NOT NULL,
    image_urls text[],
    error text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.qr_code_generations (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
    url text NOT NULL,
    prompt text NOT NULL,
    image_url text,
    error text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.voice_transcriptions (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
    transcription_id text NOT NULL,
    audio_url text,
    transcription text,
    summary text,
    error text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.multillm_chatgpt (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
    title text,
    model text,
    chat_history jsonb,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.chat_with_file (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
    chat_history jsonb,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on all tables
ALTER TABLE public.content_creations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.headshot_generations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.image_generations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interior_designs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.qr_code_generations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.voice_transcriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.multillm_chatgpt ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_with_file ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for all tables
CREATE POLICY "Users can view their own data" ON public.content_creations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can view their own data" ON public.headshot_generations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can view their own data" ON public.image_generations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can view their own data" ON public.interior_designs FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can view their own data" ON public.qr_code_generations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can view their own data" ON public.voice_transcriptions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can view their own data" ON public.multillm_chatgpt FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can view their own data" ON public.chat_with_file FOR SELECT USING (auth.uid() = user_id);

-- Admin policies for all tables
CREATE POLICY "Admin users can view all data" ON public.content_creations FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin users can view all data" ON public.headshot_generations FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin users can view all data" ON public.image_generations FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin users can view all data" ON public.interior_designs FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin users can view all data" ON public.qr_code_generations FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin users can view all data" ON public.voice_transcriptions FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin users can view all data" ON public.multillm_chatgpt FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin users can view all data" ON public.chat_with_file FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, email, role)
  VALUES (new.id, new.email, 'user');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(); 