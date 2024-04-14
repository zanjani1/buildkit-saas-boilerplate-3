import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { supabaseBrowserClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import config from '@/config';
import { getPaymentUrl } from '@/utils/utils';
import { TypeSubscriptionInterval, TypePaymentGatwayProvider, TypeSubscriptionPlan } from '@/types/pricing';

interface ButtonPaymentProps {
  provider: TypePaymentGatwayProvider;
  tier: TypeSubscriptionPlan;
  frequency: TypeSubscriptionInterval;
}

const ButtonPayment: FC<ButtonPaymentProps> = ({ provider, tier, frequency }) => {
  const supabase = supabaseBrowserClient();
  const router = useRouter();

  // Optional: If you want to add discount code by default
  const discount = provider === 'stripe' && frequency === 'annually' ? '8JDToQd0' : undefined;

  const goToPaymentPage = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    let url = '/dashboard';
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
