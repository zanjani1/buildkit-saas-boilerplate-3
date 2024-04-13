import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { supabaseBrowserClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import config from '@/config';
import { getPaymentUrl } from '@/utils/utils';
import { TypeFrequency, TypePaymentGatwayProvider, TypeTier } from '@/types/pricing';

interface ButtonPaymentProps {
  provider: TypePaymentGatwayProvider;
  tier: TypeTier;
  frequency: TypeFrequency;
}

const ButtonPayment: FC<ButtonPaymentProps> = ({ provider, tier, frequency }) => {
  const supabase = supabaseBrowserClient();
  const router = useRouter();

  const goToPaymentPage = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    let url = '/dashboard';
    if (user == null) {
      url = '/login';
    } else if (tier !== 'trial') {
      const variantId = config[provider].variant[tier][frequency];
      url = getPaymentUrl(provider, variantId, user.email!);
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
