import { Database } from './supabase';

export type EnumSubscription = Database['public']['Enums']['subscriptiontype'];

export type EnumSubscriptionBillingCycle = Database['public']['Enums']['billingcycle'];
