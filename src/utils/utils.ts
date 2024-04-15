import config from '@/config';
import { TypePaymentGatwayProvider } from '@/types/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
