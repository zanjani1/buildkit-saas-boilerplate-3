import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

// This is a custom layout component for Waitlist page. It provides both dark and light theme support through ThemeProvider.
const layout = ({ children }: Props) => {
  return (
    // Change the defaultTheme value to "light" to set the default theme of the waitlist page to light.
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
};

export default layout;
