import React from 'react';
import Header from './Mainlayout/Header';
import Footer from './Mainlayout/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
         {children}
      <Footer />
    </>
  );
}

export default Layout;