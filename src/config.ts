const config = {
  // App
  appName: 'BuilderKit',
  appUrl: 'https://builderkit.ai',

  // Crisp
  crisp: {
    id: 'b602d409-734d-41c6-919a-2f568ccce58c',
    allowedRoutes: ['/'],
  },

  // Support
  supportEmail: '',

  // Lemon Squeezy
  lemonSqueezy: {
    baseUrl: 'https://reminder-bot.lemonsqueezy.com/buy',
    emailParam: 'checkout[email]',
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
  },
  // Stripe
  stripe: {
    baseUrl: 'https://buy.stripe.com',
    emailParam: 'prefilled_email',
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
  },
};

export default config;
