import React from 'react';
import Navbar from '@/components/landing-page/Navbar';
import Footer from '@/components/landing-page/Footer';

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
