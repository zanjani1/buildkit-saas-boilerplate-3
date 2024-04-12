'use client';

import { Crisp } from 'crisp-sdk-web';
import { FC } from 'react';
import { Button } from './ui/button';
import config from '@/config';

interface ButtonCrispSupportProps {}

const ButtonCrispSupport: FC<ButtonCrispSupportProps> = () => {
  const handleChat = () => {
    if (config.CRISP_ID) {
      Crisp.chat.show();
      Crisp.chat.open();
    } else {
      window.open(`mailto:${config.SUPPORT_EMAIL}?subject=I want Help ${config.APP_NAME}`, '_blank');
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
