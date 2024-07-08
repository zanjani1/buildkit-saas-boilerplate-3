import React from 'react';
import Navbar from '@/components/landing-pages/landing-page-4/Navbar';
import Footer from '@/components/landing-pages/landing-page-4/Footer';

// Custom layout for generic pages including Navbar and Footer.
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
