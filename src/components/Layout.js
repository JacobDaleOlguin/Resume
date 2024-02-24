// componets/Layout.js
import React from 'react';
import Header from './Header'; // import your Header component
import Footer from './Footer'; // assuming you have a Footer component

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main> {/* This is where your page content will go */}
      <Footer />
    </>
  );
};

export default Layout;
