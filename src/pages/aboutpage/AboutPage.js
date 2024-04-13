import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './AboutPage.css';
import Toolbox from '../../components/Toolbox';
import { Form } from 'react-router-dom';

function AboutPage() {
  const { theme } = useTheme();

  return (
    <div className="banner">
      <AnimatePresence>
        <motion.div
          key={theme}
          className={`about-banner-image ${theme}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        />
      </AnimatePresence>
      <div className="about-banner-text">
        <h1>Feel free to reach out!</h1>
        <Form></Form>
        <Toolbox/>
      </div>
    </div>
  );
}

export default AboutPage;
