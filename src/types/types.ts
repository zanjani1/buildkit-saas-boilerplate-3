import { Database } from './supabase';

export type EnumSubscription = Database['public']['Enums']['subscriptiontype'];

export type EnumSubscriptionBillingCycle = Database['public']['Enums']['billingcycle'];

export type TypeUser = Database['public']['Tables']['users']['Row'];

// Custom types

export type TypeSubscriptionPlan = 'trial' | 'standard' | 'premium';

export type TypeSubscriptionInterval = 'monthly' | 'annually';

export type TypePaymentGatwayProvider = 'stripe' | 'lemonSqueezy';
