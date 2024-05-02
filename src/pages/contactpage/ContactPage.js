// componets/ContactPage.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './ContactPage.css';
import ContactForm from '../../components/ContactForm';

function ContactPage() {
    const { theme } = useTheme();
  
    return (
      <div className="banner">
        <AnimatePresence>
          <motion.div
            key={theme}
            className={`contact-banner-image ${theme}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          />
        </AnimatePresence>
        <div className="contact-banner-text">
          <h1>Feel free to reach out</h1>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
export default ContactPage;
