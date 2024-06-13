'use client';

import { useEffect, useState, useCallback } from 'react';
import { verifyMagicLink } from '../actions';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const successMessage = 'Congratulations! You have verified your Email ID through Magic Link.';

type Props = {
  searchParams: { token: string };
};

export default function Verify({ searchParams }: Props) {
  const [message, setMessage] = useState<string>();
  const [showButton, setShowButton] = useState<boolean>(false);
  const [magicId, setMagicId] = useState<string | null>(null);
  const token = searchParams?.token;
  const router = useRouter();

  //function to call the verifyMagicLink function and handle the response and set the message
  const handleResponse = useCallback(async () => {
    if (token) {
      const response = await verifyMagicLink(token);

      if (typeof response == 'string') {
        setShowButton(true);
        setMessage(response);
      } else {
        localStorage.setItem('magicId', response.message);
        setMessage(successMessage);
      }
    } else if (magicId) {
      setMessage('You have already verified your Email ID through Magic Link.');
    } else {
      setShowButton(true);
      setMessage('Please verify your Email ID through Magic Link.');
    }
  }, [token, magicId]);

  useEffect(() => {
    // This will run only on the client side
    const storedMagicId = localStorage.getItem('magicId');
    setMagicId(storedMagicId);
  }, []);

  useEffect(() => {
    if (magicId !== null) {
      handleResponse();
    }
  }, [handleResponse, magicId]);

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      {message && <p className='w-full mt-4 p-4 bg-muted text-sm text-center rounded-md'>{message}</p>}
      {showButton && (
        <Button onClick={() => router.push('/email-verification')} className='mt-4'>
          Verify Email
        </Button>
      )}
    </div>
  );
}
