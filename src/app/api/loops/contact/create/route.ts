// This is the route to create a contact in loops. This route will be called from the frontend to create a contact in loops.
// Email Id is required by loops to create a contact. You can create your own variables as well.

import config from '@/config';
import axios from 'axios';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  // Parse JSON body from the request to get the data to create contact in loops
  const { email, userId, firstName, lastName } = await req.json();

  try {
    if (!email || !userId || !firstName || !lastName) {
      throw new Error('Email, userId, firstName, and lastName are required.');
    }

    const contactData = { email, userId, firstName, lastName };

    //   Currently we are just passing empty email and userId to create contact in loops
    await axios.post(`${config.loops.baseUrl}/contacts/create`, contactData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
      },
    });

    return NextResponse.json({ message: 'Contact created successfully in loops.', status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error, status: 400 });
  }
};

// Check documentation for all the acceptable variables: https://loops.so/docs/api-reference/create-contact.
