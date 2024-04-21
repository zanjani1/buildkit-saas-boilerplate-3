// This component provides a support button using the Crisp chat SDK or email fallback.
// It utilizes a conditional statement to check if the Crisp ID is available:
// - If available, it initializes the Crisp chat window.
// - If not available, it opens the default email client with a predefined subject line including the app name.

'use client';

import { Crisp } from 'crisp-sdk-web';
import { FC } from 'react';
import { Button } from './ui/button';
import config from '@/config';

interface ButtonCrispSupportProps {}

const ButtonCrispSupport: FC<ButtonCrispSupportProps> = () => {
  const handleChat = () => {
    if (config.crisp.id) {
      Crisp.chat.show();
      Crisp.chat.open();
    } else {
      window.open(`mailto:${config.supportEmail}?subject=I want Help ${config.app.name}`, '_blank');
    }
  };

  return (
    <>
      <Button variant='outline' onClick={handleChat}>
        Support
      </Button>
    </>
  );
};

export default ButtonCrispSupport;
