import { EnumSubscription } from './types';

type TypePaymentGateway = {
  baseUrl: string;
  emailParam: string;
  discountParam: string;
  variant: {
    standard: {
      monthly: string;
      annually: string;
    };
    premium: {
      monthly: string;
      annually: string;
    };
  };
  plan: {
    [key: number | string]: EnumSubscription;
  };
};

export type TypeConfig = {
  app: {
    name: string;
    url: string;
  };
  crisp: {
    id: string;
    allowedRoutes: string[];
  };
  supportEmail: string;
  lemonSqueezy: TypePaymentGateway;
  stripe: TypePaymentGateway;
};
