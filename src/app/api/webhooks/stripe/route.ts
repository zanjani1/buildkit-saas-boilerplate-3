import config from '@/config';
import { EnumSubscriptionBillingCycle } from '@/types/types';
import { supabaseAdmin } from '@/utils/supabase/admin';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

const stripe = new Stripe(SECRET_KEY!, {
  typescript: true,
});

export async function POST(req: NextRequest): Promise<NextResponse> {
  const signature = headers().get('stripe-signature') as string;
  const requestData = await req.text();

  try {
    const event = stripe.webhooks.constructEvent(requestData, signature, WEBHOOK_SECRET!);
    const {
      type: eventType,
      data: { object: eventObject },
    } = event;

    console.log(`Event received: ${eventType}`);

    const subscription = await stripe.subscriptions.retrieve((eventObject as Stripe.Subscription).id);

    // Handle the event
    switch (eventType) {
      case 'customer.subscription.created':
        await handleSubscriptionCreated(subscription);
        break;
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(subscription);
        break;
    }

    return NextResponse.json({ message: `Processing webhook for ${eventType}` }, { status: 200 });
  } catch (err: any) {
    console.error(err.message);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}

async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  const {
    id: subscriptionId,
    status,
    start_date,
    items: { data: subscriptionItems },
    customer: customerId,
  } = subscription;

  console.log(`[Subscription Created] Activating subscription`);

  try {
    const { interval, amount, product } = subscriptionItems[0].plan;

    const subscriptionType = config.stripe.plan[product as string];
    // Converting unix time to standard datetime format. Multiply 1000 to convert it from seconds to milliseconds
    const startDate = new Date(start_date * 1000).toISOString();

    const customer = await stripe.customers.retrieve(customerId as string);
    const email = (customer as Stripe.Customer).email;

    const { error } = await supabaseAdmin
      .from('subscriptions')
      .update({
        subscription_id: subscriptionId,
        interval: interval as EnumSubscriptionBillingCycle,
        type: subscriptionType,
        start_date: startDate,
        amount,
        active: status === 'active',
      })
      .eq('user_email', email!);

    if (error) {
      console.error(error);
      throw new Error(`Updating subscription details subscription id: ${subscriptionId}, user: ${email}`);
    }

    console.debug(`Subscription created for user: ${email}`);
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const { id: subscriptionId, status } = subscription;

  console.log(`[Subscription Updated] Updating subscription`);

  try {
    const { error } = await supabaseAdmin
      .from('subscriptions')
      .select('id')
      .eq('subscription_id', subscriptionId)
      .single();

    if (error) {
      console.error(error);
      throw new Error(`Subscription not found supabase for id: ${subscriptionId}`);
    }

    const { error: updateError } = await supabaseAdmin
      .from('subscriptions')
      .update({ active: status === 'active' })
      .eq('subscription_id', subscriptionId);

    if (updateError) {
      console.error(updateError);
      throw new Error(`Updating subscription details for subscription id: ${subscriptionId}`);
    }

    console.debug(`Subscription updated for id: ${subscriptionId}`);
  } catch (error: any) {
    console.error(error);
    throw new Error(`${error.message}`);
  }
}
