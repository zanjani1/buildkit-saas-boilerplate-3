import React from 'react';
import Navbar from '@/components/landing-pages/landing-page-1/Navbar';
import Footer from '@/components/landing-pages/landing-page-1/Footer';

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
