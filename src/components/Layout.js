// componets/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '../context/ThemeContext';
import '../App.css';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Layout;
