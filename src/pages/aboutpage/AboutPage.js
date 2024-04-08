import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './AboutPage.css';

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
        <h1>My name is Jacob.</h1>
        <h3>I am a Frontend developer and primarily work with React and Typescript.</h3>
      </div>
    </div>
  );
}

export default AboutPage;
