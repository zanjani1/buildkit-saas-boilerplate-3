import { toast } from '@/components/ui/use-toast';
import config from '@/config';
import { TypePaymentGatwayProvider } from '@/types/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Function: cn (Class Name)
// This utility function combines and deduplicates class names using clsx and twMerge.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function: cn (Class Name)
// This utility function combines and deduplicates class names using clsx and twMerge.
export const errorToast = (description: string, title?: string) =>
  toast({ title, description, variant: 'destructive' });

// Constructs a URL for initiating a payment process based on the provider, variant ID, user email, and an optional discount code.
// Parameters:
// - provider: Type of payment gateway (e.g., 'stripe', 'lemonSqueezy') as defined in TypePaymentGatwayProvider.
// - variantId: ID of the product or service variant to be purchased.
// - email: Customer's email to whom the payment link will be sent.
// - discountCode (optional): A discount code that can be applied to the payment.
// This function reads the base URL and parameter names from the configuration, constructs the payment URL, and appends the discount code if provided.
export function getPaymentUrl(
  provider: TypePaymentGatwayProvider,
  variantId: string,
  email: string,
  discountCode?: string
): string {
  const platform = config[provider];
  const baseUrl = platform.baseUrl;

  let paymentUrl = `${baseUrl}/${variantId}?${platform.emailParam}=${email}`;

  if (discountCode) {
    paymentUrl += `&${platform.discountParam}=${discountCode}`;
  }
  return paymentUrl;
}
