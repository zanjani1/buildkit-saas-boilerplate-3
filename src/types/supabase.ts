export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      accounts: {
        Row: {
          access_token: string | null
          expires_at: number | null
          id_token: string | null
          oauth_token: string | null
          oauth_token_secret: string | null
          provider: string
          providerAccountId: string
          refresh_token: string | null
          refreshTokenExpiresIn: number | null
          scope: string | null
          session_state: string | null
          token_type: string | null
          type: string
          userId: string
        }
        Insert: {
          access_token?: string | null
          expires_at?: number | null
          id_token?: string | null
          oauth_token?: string | null
          oauth_token_secret?: string | null
          provider: string
          providerAccountId: string
          refresh_token?: string | null
          refreshTokenExpiresIn?: number | null
          scope?: string | null
          session_state?: string | null
          token_type?: string | null
          type: string
          userId: string
        }
        Update: {
          access_token?: string | null
          expires_at?: number | null
          id_token?: string | null
          oauth_token?: string | null
          oauth_token_secret?: string | null
          provider?: string
          providerAccountId?: string
          refresh_token?: string | null
          refreshTokenExpiresIn?: number | null
          scope?: string | null
          session_state?: string | null
          token_type?: string | null
          type?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "accounts_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_users: {
        Row: {
          created_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          user_id?: string
        }
        Relationships: []
      }
      chat_with_file: {
        Row: {
          chat_content: string | null
          created_at: string
          file_name: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          chat_content?: string | null
          created_at?: string
          file_name?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          chat_content?: string | null
          created_at?: string
          file_name?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_with_file_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      content_creations: {
        Row: {
          content: string | null
          created_at: string
          id: string
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "content_creations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      examples: {
        Row: {
          description: string | null
          domainCount: number | null
          id: number
          image: string | null
          imageBlurhash: string | null
          name: string | null
          url: string | null
        }
        Insert: {
          description?: string | null
          domainCount?: number | null
          id?: number
          image?: string | null
          imageBlurhash?: string | null
          name?: string | null
          url?: string | null
        }
        Update: {
          description?: string | null
          domainCount?: number | null
          id?: number
          image?: string | null
          imageBlurhash?: string | null
          name?: string | null
          url?: string | null
        }
        Relationships: []
      }
      headshot_generations: {
        Row: {
          created_at: string
          id: string
          status: Database["public"]["Enums"]["headshotmodelstatus"] | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          status?: Database["public"]["Enums"]["headshotmodelstatus"] | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          status?: Database["public"]["Enums"]["headshotmodelstatus"] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "headshot_generations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      image_generations: {
        Row: {
          created_at: string
          id: string
          prompt: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          prompt?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          prompt?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "image_generations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      interior_designs: {
        Row: {
          created_at: string
          design_prompt: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          design_prompt?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          design_prompt?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interior_designs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      multillm_chatgpt: {
        Row: {
          created_at: string
          id: string
          message: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          message?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          message?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "multillm_chatgpt_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          content: string | null
          createdAt: string
          description: string | null
          id: string
          image: string | null
          imageBlurhash: string | null
          published: boolean
          siteId: string | null
          slug: string
          title: string | null
          updatedAt: string
          userId: string | null
        }
        Insert: {
          content?: string | null
          createdAt?: string
          description?: string | null
          id: string
          image?: string | null
          imageBlurhash?: string | null
          published?: boolean
          siteId?: string | null
          slug: string
          title?: string | null
          updatedAt?: string
          userId?: string | null
        }
        Update: {
          content?: string | null
          createdAt?: string
          description?: string | null
          id?: string
          image?: string | null
          imageBlurhash?: string | null
          published?: boolean
          siteId?: string | null
          slug?: string
          title?: string | null
          updatedAt?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_siteId_fkey"
            columns: ["siteId"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      profile_photos: {
        Row: {
          created_at: string
          id: string
          url: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          url: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          url?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          display_name: string | null
          github_url: string | null
          instagram_url: string | null
          linkedin_url: string | null
          twitter_url: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          display_name?: string | null
          github_url?: string | null
          instagram_url?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          display_name?: string | null
          github_url?: string | null
          instagram_url?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      qr_code_generations: {
        Row: {
          content: string | null
          created_at: string
          id: string
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "qr_code_generations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      sessions: {
        Row: {
          expires: string
          sessionToken: string
          userId: string
        }
        Insert: {
          expires: string
          sessionToken: string
          userId: string
        }
        Update: {
          expires?: string
          sessionToken?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "sessions_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      sites: {
        Row: {
          createdAt: string
          customDomain: string | null
          description: string | null
          font: string
          id: string
          image: string | null
          imageBlurhash: string | null
          logo: string | null
          message404: string | null
          name: string | null
          subdomain: string | null
          updatedAt: string
          userId: string | null
        }
        Insert: {
          createdAt?: string
          customDomain?: string | null
          description?: string | null
          font?: string
          id: string
          image?: string | null
          imageBlurhash?: string | null
          logo?: string | null
          message404?: string | null
          name?: string | null
          subdomain?: string | null
          updatedAt?: string
          userId?: string | null
        }
        Update: {
          createdAt?: string
          customDomain?: string | null
          description?: string | null
          font?: string
          id?: string
          image?: string | null
          imageBlurhash?: string | null
          logo?: string | null
          message404?: string | null
          name?: string | null
          subdomain?: string | null
          updatedAt?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sites_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_images: {
        Row: {
          caption: string | null
          created_at: string
          id: string
          url: string
          user_id: string
        }
        Insert: {
          caption?: string | null
          created_at?: string
          id?: string
          url: string
          user_id: string
        }
        Update: {
          caption?: string | null
          created_at?: string
          id?: string
          url?: string
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          createdAt: string
          email: string
          emailVerified: string | null
          gh_username: string | null
          id: string
          image: string | null
          name: string | null
          role: Database["public"]["Enums"]["userrole"] | null
          updatedAt: string
          username: string | null
        }
        Insert: {
          createdAt?: string
          email: string
          emailVerified?: string | null
          gh_username?: string | null
          id: string
          image?: string | null
          name?: string | null
          role?: Database["public"]["Enums"]["userrole"] | null
          updatedAt?: string
          username?: string | null
        }
        Update: {
          createdAt?: string
          email?: string
          emailVerified?: string | null
          gh_username?: string | null
          id?: string
          image?: string | null
          name?: string | null
          role?: Database["public"]["Enums"]["userrole"] | null
          updatedAt?: string
          username?: string | null
        }
        Relationships: []
      }
      verification_tokens: {
        Row: {
          expires: string
          identifier: string
          token: string
        }
        Insert: {
          expires: string
          identifier: string
          token: string
        }
        Update: {
          expires?: string
          identifier?: string
          token?: string
        }
        Relationships: []
      }
      voice_transcriptions: {
        Row: {
          created_at: string
          id: string
          transcription: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          transcription?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          transcription?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "voice_transcriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_profile_photos_policy: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      setup_profile_photos_table: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      billingcycle: "monthly" | "yearly"
      headshotmodelstatus: "pending" | "processing" | "completed" | "failed"
      subscriptiontype: "free" | "pro" | "enterprise"
      userrole: "user" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
