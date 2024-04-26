// This component responsible for handling payment actions for different plans and frequencies.
// Optional discounts are applied automatically for annual subscriptions when paying via Stripe.
// If the user is not logged in, they are redirected to the login page.
// Otherwise, the payment URL is constructed based on the selected provider, plan, and frequency, with potential discounts applied.
// The button's appearance and behavior change based on the payment provider (Stripe or Lemon Squeezy).

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { supabaseBrowserClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import config from '@/config';
import { getPaymentUrl } from '@/utils/utils';
import { TypeSubscriptionInterval, TypePaymentGatwayProvider, TypeSubscriptionPlan } from '@/types/types';

interface ButtonPaymentProps {
  provider: TypePaymentGatwayProvider;
  tier: TypeSubscriptionPlan;
  frequency: TypeSubscriptionInterval;
}

const ButtonPayment: FC<ButtonPaymentProps> = ({ provider, tier, frequency }) => {
  const router = useRouter();

  // Optional: If you want to add discount code by default
  const discount = provider === 'stripe' && frequency === 'annually' ? '8JDToQd0' : undefined;

  // This function handles the redirection logic based on the user's authentication status and subscription choice.
  // If the user is logged in, it constructs a specific URL for the payment gateway, optionally adding a discount code for annual payments via Stripe.
  const goToPaymentPage = async () => {
    const supabase = supabaseBrowserClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    let url = '/admin-dashboard';
    if (user == null) {
      url = '/login';
    } else if (tier !== 'trial') {
      const variantId = config[provider].variant[tier][frequency];
      url = getPaymentUrl(provider, variantId, user.email!, discount);
    }

    router.push(url);
  };

  return (
    <>
      <Button
        variant={provider === 'stripe' ? 'default' : 'outline'}
        size='lg'
        onClick={goToPaymentPage}
        className='w-full'>
        Pay with {provider === 'stripe' ? 'Stripe' : 'Lemon Squeezy'}
      </Button>
    </>
  );
};

export default ButtonPayment;
