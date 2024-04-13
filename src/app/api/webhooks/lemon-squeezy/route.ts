import config from '@/config';
import { supabaseAdmin } from '@/utils/supabase/admin';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { headers } from 'next/headers';

const BASE_URL = process.env.LEMON_SQUEZY_BASE_URL;
const API_KEY = process.env.LEMON_SQUEEZY_API_KEY;
const WEBHOOK_SECRET = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;

const verifySecret = (event: string, reqSignature: string) => {
  const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET || '');
  const digest = Buffer.from(hmac.update(event).digest('hex'), 'utf8');
  const signature = Buffer.from(reqSignature || '', 'utf8');

  const isValid = crypto.timingSafeEqual(digest, signature);

  return isValid;
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  const signature = headers().get('x-signature') as string;
  const requestData = await req.text();

  try {
    const isValidSecret = verifySecret(requestData, signature);
    if (!isValidSecret) {
      throw new Error('Invalid signature.');
    }

    const event = JSON.parse(requestData);
    const {
      meta: { event_name: eventName },
      data: subscription,
    } = event;

    console.log(`Event received: ${eventName}`);

    // Handle the event
    switch (eventName) {
      case 'subscription_created':
        await handleSubscriptionCreated(subscription);
        break;
      case 'subscription_updated':
        await handleSubscriptionUpdated(subscription);
        break;
    }

    return NextResponse.json({ message: `Processing webhook for ${eventName}` }, { status: 200 });
  } catch (err: any) {
    console.error(err.message);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}

async function handleSubscriptionCreated(subscription: any) {
  const subscriptionId = subscription.id;
  const { status, user_email: email, product_id, created_at, variant_id } = subscription.attributes;

  console.log(`[Subscription Created] Activating subscription`);

  try {
    // Getting product variant for Subscription Interval and Amount
    const { data: variant } = await axios.get(`${BASE_URL}/variants/${variant_id}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const { interval, price } = variant.data.attributes;

    const subscriptionType = config.lemonSqueezy.plan[product_id];

    const { error } = await supabaseAdmin
      .from('subscriptions')
      .update({
        subscription_id: subscriptionId,
        interval,
        type: subscriptionType,
        start_date: created_at,
        amount: Number(price),
        active: status === 'active',
      })
      .eq('user_email', email);

    if (error) {
      console.error(error);
      throw new Error(`Updating subscription details subscription id: ${subscriptionId}, user: ${email}`);
    }

    console.debug(`Subscription activated for user: ${email}`);
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}

async function handleSubscriptionUpdated(subscription: any) {
  const subscriptionId = subscription.id;
  const { status } = subscription.attributes;

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
