// This route handles incoming webhook events from Lemon Squeezy.
// It's designed to respond to specific subscription events such as 'subscription_created' and 'subscription_updated'.
// Each webhook request is validated for authenticity by verifying the signature using a secret key.

import config from '@/config';
import { supabaseAdmin } from '@/utils/supabase/admin';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { headers } from 'next/headers';

// Environment variables for Lemon Squeezy API key, base URL, and webhook secret.
const BASE_URL = process.env.LEMON_SQUEZY_BASE_URL;
const API_KEY = process.env.LEMON_SQUEEZY_API_KEY;
const WEBHOOK_SECRET = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;

// Utility function to verify the HMAC signature of the webhook event to ensure it's coming from Lemon Squeezy securely.
const verifySecret = (event: string, reqSignature: string) => {
  const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET || '');
  const digest = Buffer.from(hmac.update(event).digest('hex'), 'utf8');
  const signature = Buffer.from(reqSignature || '', 'utf8');

  const isValid = crypto.timingSafeEqual(digest, signature);

  return isValid;
};

// POST handler for processing incoming webhook requests.
// It verifies the integrity of the request, parses the event data, and processes it based on the event type.
export async function POST(req: NextRequest): Promise<NextResponse> {
  const signature = headers().get('x-signature') as string;
  const requestData = await req.text();

  try {
    const isValidSecret = verifySecret(requestData, signature);
    if (!isValidSecret) {
      throw new Error('Invalid signature.');
    }

    const event = JSON.parse(requestData);

    // Extracts and logs the event name from the webhook data.
    const {
      meta: { event_name: eventName },
      data: subscription,
    } = event;

    console.log(`Event received: ${eventName}`);

    // Handle the event based on it type (e.g., subscription creation or update).
    switch (eventName) {
      case 'subscription_created':
        await handleSubscriptionCreated(subscription);
        break;
      case 'subscription_updated':
        await handleSubscriptionUpdated(subscription);
        break;
    }

    // Successful handling of the webhook event
    return NextResponse.json({ message: `Processing webhook for ${eventName}` }, { status: 200 });
  } catch (err: any) {
    console.error(err.message);
    // Error handling if there is an issue processing the webhook
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}

// Handles 'subscription_created' event: Activates a subscription and updates the database.
async function handleSubscriptionCreated(subscription: any) {
  const subscriptionId = subscription.id;
  const { status, user_email: email, product_id, created_at, variant_id } = subscription.attributes;

  console.log(`[Subscription Created] Activating subscription`);

  try {
    // Calls Lemon Squeezy API to get the variant details using the variant_id from the subscription.
    const { data: variant } = await axios.get(`${BASE_URL}/variants/${variant_id}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const { interval, price } = variant.data.attributes;

    // Get subscription type based on the product_id from the subscription.
    const subscriptionType = config.lemonSqueezy.plan[product_id];

    // Updates the subscription in the database using details from the event and fetched variant.
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

// Handles 'subscription_updated' event: Updates the status of a subscription in the database.
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
