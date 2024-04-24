import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
};

export default layout;
