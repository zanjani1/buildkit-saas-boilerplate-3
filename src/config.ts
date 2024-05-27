import { TypeConfig } from './types/config';

// Supabase API credentials retrieved from environment variables for secure access.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const config = {
  // Boolean flag to determine if Supabase should be enabled based on the availability of necessary environment variables.
  isSupabaseEnabled: !!supabaseUrl && !!supabaseKey,

  // APP: Basic application settings used globally for branding and links.
  app: {
    name: 'BuilderKit',
    description: 'NextJS SaaS AI Boilerplate',
    url: 'https://base.builderkit.ai',
  },

  // CRISP: Configuration details for the Crisp chat support integration.
  crisp: {
    // Crisp Website ID.
    id: 'b602d409-734d-41c6-919a-2f568ccce58c',
    // By default crisp is visible on every route. If you want to hide crisp from a specific route add the routes below. Eg. Un-comment bellow to hide Crisp from '/'. You can also show Crisp manually with <ButtonSupport/>.
    // Recommended to hide Crisp from "/reset-password" route as it may interfere with the reset password process.
    hideOnRoutes: ['/reset-password', '/ai-modules'],
  },

  // SUPPORT: Contact email for application support, should be updated with an actual email address.
  supportEmail: '',

  // LEMON SQUEEZY: Configuration for the Lemon Squeezy payment gateway, handling payments and subscriptions.
  lemonSqueezy: {
    // Endpoint for initiating the checkout process.
    baseUrl: 'https://builderkit.lemonsqueezy.com/buy',
    // URL parameter key for passing customer email by default to the checkout link.
    emailParam: 'checkout[email]',
    // URL parameter key for applying discount codes by default in the checkout link. This is optional. It works only if the Discount is available.
    discountParam: 'checkout[discount_code]',
    variant: {
      standard: {
        monthly: '81395ea4-4049-49a7-a11e-3ccdf620ce7e',
        annually: 'feb7cf4b-d0e0-4f04-a4e9-55d4415824ff',
      },
      premium: {
        monthly: 'eb0503cb-a58a-4a30-8fdf-86fa977bd3cb',
        annually: 'cde373b7-1619-4788-9e6b-664ba048f693',
      },
    },
    // Mapping of product ID to subscription type to support dynamic product offerings.
    plan: {
      245697: 'standard',
      245701: 'premium',
    },
  },

  // STRIPE: payment configuration similar in structure to Lemon Squeezy for processing payments.
  stripe: {
    // Base URL for Stripe checkout sessions.
    baseUrl: 'https://buy.stripe.com',
    // Prefills the email input in the checkout form if provided by default.
    emailParam: 'prefilled_email',
    // Prefills a promo code if provided by default. This is optional. It works only if the Discount is available.
    discountParam: 'prefilled_promo_code',
    variant: {
      standard: {
        monthly: 'test_bIY6rO5L4cb3dPi6oo',
        annually: 'test_cN25nKddwcb3fXqaEF',
      },
      premium: {
        monthly: 'test_28o7vSa1kdf7dPicMO',
        annually: 'test_fZe3fCflEfnf8uYfZ1',
      },
    },
    // Product mappings which help in correlating the checkout process with specific products.
    plan: {
      prod_PuuU0reuFt6y8W: 'standard',
      prod_P0jB4G8yniRIE2: 'standard',
      prod_PuuWeAnbhCqCe2: 'premium',
      prod_PuuVeP4vko8uhg: 'premium',
    },
  },
  loops: {
    baseUrl: 'https://app.loops.so/api/v1',
  },
};

export default config as TypeConfig;
