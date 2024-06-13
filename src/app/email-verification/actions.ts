'use server';

import * as jwt from 'jsonwebtoken';
import crypto from 'crypto';
import axios from 'axios';

//function to generate JWT token
async function generateJWT(emai: string, createdAt: string) {
  const secret_key = process.env.JWT_SECRET_KEY;
  if (!secret_key) {
    throw new Error('JWT secret key is not defined');
  }

  const token = jwt.sign({ emai, createdAt }, secret_key, { expiresIn: '1h' });
  return token;
}
//function to send the magicLink to the entered email
export async function sendMagicLink(email: string) {
  try {
    const token = await generateJWT(email, new Date().toISOString());

    const magicLink = `${process.env.APP_URL}/email-verification/verify?token=${token}`;
    const data = {
      email,
      subject: 'Magic Link to verify your email',
      emailBody:
        'Click on the link below to verify your email address: <a href="' + magicLink + '">Verify Email</a>',
    };

    //api call to send the magicLink through resend
    const res = await axios.post(`${process.env.APP_URL}/api/resend`, data);
    if (res.status !== 200) {
      throw res.data.message;
    }

    return { message: 'Magic Link sent successfully. Click on the link in the email to verify.' };
  } catch (error) {
    return `${error}`;
  }
}

//to hash the decoded string
function hashString(string: string) {
  const hash = crypto.createHash('sha256');
  hash.update(string);
  return hash.digest('hex');
}
//function to decode the obtained jwt token, hash it and return the message
export const verifyMagicLink = async (token: string) => {
  try {
    const secret_key = process.env.JWT_SECRET_KEY;

    if (!secret_key) {
      throw new Error('JWT secret key is not defined');
    }

    const decoded = await jwt.verify(token, secret_key);
    const message = hashString(JSON.stringify(decoded));
    return { message: message };
  } catch (err) {
    return `${err}`;
  }
};
