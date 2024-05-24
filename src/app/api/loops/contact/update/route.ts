// This is the route to update any value by email id for that contact in loops.
// In this example we are updating notes for a contact in loops. You can updated any value by email id for that contact in loops ecept the email id itself.
// Email Id is required to update a contact.

import config from '@/config';
import axios from 'axios';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  // Parse JSON body from the request to get the data to update contact in loops
  const { email, notes } = await req.json();

  try {
    if (!notes) {
      throw new Error('Email ID and Notes is required to update notes in loops');
    }

    const updateData = { email, notes };

    //   Currently we are just passing empty email and userId to update contact in loops
    await axios.post(`${config.loops.baseUrl}/contacts/update`, updateData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
      },
    });

    return NextResponse.json({
      message: `Notes updated for: ${email}, in loops.`,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: error, status: 400 });
  }
};

// Check documentation for all the acceptable variables: https://loops.so/docs/api-reference/create-contact.
