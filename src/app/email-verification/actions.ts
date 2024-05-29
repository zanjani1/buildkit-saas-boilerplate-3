'use server';
import * as jwt from 'jsonwebtoken';
import crypto from 'crypto';
import axios from 'axios';

type generateJWTType = {
  email: string;
  createdAt: string;
};

//function to generate JWT token
async function generateJWT(obj: generateJWTType) {
  try {
    const secret_key = process.env.JWT_SECRET_KEY;
    if (secret_key) {
      const token = jwt.sign(obj, secret_key, { expiresIn: '1h' });
      return token;
    } else throw new Error('JWT secret key is not defined');
  } catch (err) {
    throw new Error(String(err));
  }
}

//function to send the magicLink to the entered email
export async function sendMagicLink(email: string) {
  const obj = {
    email,
    createdAt: new Date().toISOString(),
  };

  try {
    const token = await generateJWT(obj);
    const magicLink = `${process.env.APP_URL}/email-verification/verify?token=${token}`;
    const subject = 'Magic Link to verify your email';
    const emailBody =
      'Click on the link below to verify your email address: <a href="' + magicLink + '">Verify Email</a>';
    //api call to send the magicLink through resend
    const data = {
      email,
      subject,
      emailBody,
    };
    try {
      const res = await axios.post(`${process.env.APP_URL}/api/resend`, data);
      if (res.status === 200) {
        return { error: res.data.message };
      }
    } catch (err) {
      return { error: `${err}` };
    }

    return {
      message: 'Magic Link sent successfully',
    };
  } catch (err) {
    return { error: err };
  }
}

//to hash the decoded string
function hashString(string: string) {
  const hash = crypto.createHash('sha256');
  hash.update(string);
  return hash.digest('hex');
}

//function to decode the obtained jwt token, hash it and return the message
export const verifyJWT = async (token: string) => {
  try {
    const secret_key = process.env.JWT_SECRET_KEY;
    if (secret_key) {
      const decoded = await jwt.verify(token, secret_key);
      const message = hashString(JSON.stringify(decoded));
      return { message: message };
    } else throw new Error('JWT secret key is not defined');
  } catch (err) {
    return { error: `${err}` };
  }
};
