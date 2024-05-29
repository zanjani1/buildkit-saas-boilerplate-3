export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      chat_with_file: {
        Row: {
          chat_history: Json | null;
          created_at: string;
          file: string;
          filename: string;
          history_metadata: string | null;
          id: string;
          user_id: string;
        };
        Insert: {
          chat_history?: Json | null;
          created_at?: string;
          file: string;
          filename: string;
          history_metadata?: string | null;
          id?: string;
          user_id: string;
        };
        Update: {
          chat_history?: Json | null;
          created_at?: string;
          file?: string;
          filename?: string;
          history_metadata?: string | null;
          id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'chat_with_file_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      content_creations: {
        Row: {
          created_at: string;
          id: string;
          results: string | null;
          style: string;
          topic: string;
          user_id: string;
          voice: string | null;
          word_limit: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          results?: string | null;
          style: string;
          topic: string;
          user_id: string;
          voice?: string | null;
          word_limit?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          results?: string | null;
          style?: string;
          topic?: string;
          user_id?: string;
          voice?: string | null;
          word_limit?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'content_creations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      headshot_generations: {
        Row: {
          created_at: string;
          generation_id: string;
          id: string;
          image_urls: string[] | null;
          model_id: string;
          negative_prompt: string | null;
          prompt: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          generation_id: string;
          id?: string;
          image_urls?: string[] | null;
          model_id: string;
          negative_prompt?: string | null;
          prompt: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          generation_id?: string;
          id?: string;
          image_urls?: string[] | null;
          model_id?: string;
          negative_prompt?: string | null;
          prompt?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'headshot_generations_model_id_fkey';
            columns: ['model_id'];
            isOneToOne: false;
            referencedRelation: 'headshot_models';
            referencedColumns: ['model_id'];
          },
          {
            foreignKeyName: 'headshot_generations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      headshot_models: {
        Row: {
          created_at: string;
          eta: string;
          expires_at: string | null;
          id: string;
          images: string[];
          model_id: string;
          name: string;
          status: Database['public']['Enums']['headshotmodelstatus'];
          trained_at: string | null;
          type: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          eta: string;
          expires_at?: string | null;
          id?: string;
          images: string[];
          model_id: string;
          name: string;
          status?: Database['public']['Enums']['headshotmodelstatus'];
          trained_at?: string | null;
          type: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          eta?: string;
          expires_at?: string | null;
          id?: string;
          images?: string[];
          model_id?: string;
          name?: string;
          status?: Database['public']['Enums']['headshotmodelstatus'];
          trained_at?: string | null;
          type?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'headshot_models_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      image_generations: {
        Row: {
          created_at: string;
          error: string | null;
          guidance: string;
          id: string;
          image_urls: string[] | null;
          inference: string;
          model: string;
          negative_prompt: string | null;
          no_of_outputs: string;
          prediction_id: string;
          prompt: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          error?: string | null;
          guidance: string;
          id?: string;
          image_urls?: string[] | null;
          inference: string;
          model: string;
          negative_prompt?: string | null;
          no_of_outputs: string;
          prediction_id: string;
          prompt: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          error?: string | null;
          guidance?: string;
          id?: string;
          image_urls?: string[] | null;
          inference?: string;
          model?: string;
          negative_prompt?: string | null;
          no_of_outputs?: string;
          prediction_id?: string;
          prompt?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'image_generations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      interior_designs: {
        Row: {
          created_at: string;
          error: string | null;
          id: string;
          image_urls: string[] | null;
          prediction_id: string;
          prompt: string;
          ref_image: string;
          room_type: string;
          theme: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          error?: string | null;
          id?: string;
          image_urls?: string[] | null;
          prediction_id: string;
          prompt: string;
          ref_image: string;
          room_type: string;
          theme: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          error?: string | null;
          id?: string;
          image_urls?: string[] | null;
          prediction_id?: string;
          prompt?: string;
          ref_image?: string;
          room_type?: string;
          theme?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'interior_designs_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      multillm_chatgpt: {
        Row: {
          chat_history: Json | null;
          created_at: string;
          id: string;
          model: string | null;
          title: string | null;
          user_id: string;
        };
        Insert: {
          chat_history?: Json | null;
          created_at?: string;
          id?: string;
          model?: string | null;
          title?: string | null;
          user_id: string;
        };
        Update: {
          chat_history?: Json | null;
          created_at?: string;
          id?: string;
          model?: string | null;
          title?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'multillm_chatgpt_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      qr_code_generations: {
        Row: {
          created_at: string;
          error: string | null;
          id: string;
          image_url: string | null;
          prompt: string;
          url: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          error?: string | null;
          id?: string;
          image_url?: string | null;
          prompt: string;
          url: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          error?: string | null;
          id?: string;
          image_url?: string | null;
          prompt?: string;
          url?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'qr_code_generations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      subscriptions: {
        Row: {
          active: boolean | null;
          amount: number | null;
          created_at: string;
          id: string;
          interval: Database['public']['Enums']['billingcycle'] | null;
          start_date: string | null;
          subscription_id: string | null;
          type: Database['public']['Enums']['subscriptiontype'];
          user_email: string;
          user_id: string;
        };
        Insert: {
          active?: boolean | null;
          amount?: number | null;
          created_at?: string;
          id?: string;
          interval?: Database['public']['Enums']['billingcycle'] | null;
          start_date?: string | null;
          subscription_id?: string | null;
          type?: Database['public']['Enums']['subscriptiontype'];
          user_email: string;
          user_id: string;
        };
        Update: {
          active?: boolean | null;
          amount?: number | null;
          created_at?: string;
          id?: string;
          interval?: Database['public']['Enums']['billingcycle'] | null;
          start_date?: string | null;
          subscription_id?: string | null;
          type?: Database['public']['Enums']['subscriptiontype'];
          user_email?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'subscriptions_user_email_fkey';
            columns: ['user_email'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['email'];
          },
          {
            foreignKeyName: 'subscriptions_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      users: {
        Row: {
          avatar_url: string | null;
          created_at: string;
          email: string;
          full_name: string | null;
          id: string;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string;
          email: string;
          full_name?: string | null;
          id: string;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string;
          email?: string;
          full_name?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      voice_transcriptions: {
        Row: {
          audio_url: string | null;
          created_at: string;
          error: string | null;
          id: string;
          summary: string | null;
          transcription: string | null;
          transcription_id: string;
          user_id: string;
        };
        Insert: {
          audio_url?: string | null;
          created_at?: string;
          error?: string | null;
          id?: string;
          summary?: string | null;
          transcription?: string | null;
          transcription_id: string;
          user_id: string;
        };
        Update: {
          audio_url?: string | null;
          created_at?: string;
          error?: string | null;
          id?: string;
          summary?: string | null;
          transcription?: string | null;
          transcription_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'voice_transcriptions_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      youtube_summary_tool: {
        Row: {
          chat_history: Json | null;
          created_at: string;
          id: string;
          output_style: string;
          summary: string | null;
          tone: string;
          transcription: string | null;
          user_id: string;
          video_link: string;
        };
        Insert: {
          chat_history?: Json | null;
          created_at?: string;
          id?: string;
          output_style: string;
          summary?: string | null;
          tone: string;
          transcription?: string | null;
          user_id: string;
          video_link: string;
        };
        Update: {
          chat_history?: Json | null;
          created_at?: string;
          id?: string;
          output_style?: string;
          summary?: string | null;
          tone?: string;
          transcription?: string | null;
          user_id?: string;
          video_link?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      billingcycle: 'month' | 'year';
      headshotmodelstatus: 'processing' | 'finished';
      subscriptiontype: 'free' | 'standard' | 'premium';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;
