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
