'use client';

import { useEffect, useState, useCallback } from 'react';
import { verifyJWT } from '../actions';
import { useRouter } from 'next/navigation';

type responseType = {
  error?: string;
  message?: string;
};

const successMessage = 'Congratulations! You have verified your Email ID through Magic Link.';

export default function Verify({ searchParams }: { searchParams: { token: string } }) {
  const [message, setMessage] = useState<string>();
  const [showButton, setShowButton] = useState<boolean>(false);
  const magicId = localStorage.getItem('magicId');
  const token = searchParams?.token;
  const router = useRouter();
  //function to call the verifyJWT function and handle the response and set the message
  const handleResponse = useCallback(async () => {
    if (token) {
      const response: responseType = await verifyJWT(token);
      console.log(response);
      if (response.error) {
        setShowButton(true);
        setMessage(response.error);
      } else if (response.message) {
        localStorage.setItem('magicId', response.message);
        setMessage(successMessage);
      }
    } else {
      if (magicId) setMessage('You have already verified your Email ID through Magic Link.');
      else {
        setShowButton(true);
        setMessage('Please verify your Email ID through Magic Link.');
      }
    }
  }, [token, magicId]);

  useEffect(() => {
    handleResponse();
  }, [handleResponse]);

  console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/email-verification`);
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      {message && <p className='w-full mt-4 p-4 bg-muted text-sm text-center rounded-md'>{message}</p>}
      {showButton && (
        <button
          className='mt-4 p-4 bg-primary text-white text-sm text-center rounded-md'
          onClick={() => {
            router.push('/email-verification');
          }}>
          Verify Email
        </button>
      )}
    </div>
  );
}
