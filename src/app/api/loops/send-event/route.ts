// This is the route to send events to trigger emails in Loops.
// In this example, we are sending a welcome-email event to the user.
// To send an event, you need to pass either email or userId or both. A eventName is also required to understand wich email (event) to send in loops.
// Optionally, you can pass eventProperties to pass dynamic variables in the email (as per the requirement in the email).

import config from '@/config';
import axios from 'axios';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  // Parse JSON body from the request to get the data to send event in loops
  const { email, userId, event } = await req.json();

  try {
    if (!event) {
      throw new Error('Event is required to send event in loops');
    }
    if (!email && !userId) {
      throw new Error('Either email or userId is required to send event in loops');
    }

    // We are making it optional to pass event name, if not passed, it will send welcome-email event.
    // You can pass any event name that you have created in loops.
    const eventName = event ?? 'welcome-email';

    // Either an email or userId or both is required to send event in loops
    // If both are provided, the system will look for a contact with either a matching email or userId value
    const eventData = {
      email,
      userId,
      eventName,
      //   You can pass any event properties that you have created in loops email (a dynamic valriable in the email).
      eventProperties: {
        // In this case we are passing the plan name as a dynamic variable in the email.
        plan: 'Free',
      },
    };

    //   Currently we are just passing empty email and userId to send event in loops
    await axios.post(`${config.loops.baseUrl}/events/send`, eventData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
      },
    });

    return NextResponse.json({ message: `Event sent for: ${email}, in loops.`, status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error, status: 400 });
  }
};

// Check out the documentation for more details: https://loops.so/docs/api-reference/send-event.
