import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';
import Toolbox from '../../components/Toolbox';
import { useTheme } from '../../context/ThemeContext';
import '../../App.css';

function HomePage() {
  const { theme } = useTheme();

  // Adjusted to control the opacity of the images
  const imageVariants = {
    visible: { opacity: 1, transition: { duration: 0.7 } },
    hidden: { opacity: 0, transition: { duration: 0.7 } },
  };

  return (
    <>
      <div className="banner">
        {/* Light Theme Image */}
        <motion.div
          className="banner-image light"
          animate={theme === 'light' ? 'visible' : 'hidden'}
          variants={imageVariants}
        />
        {/* Dark Theme Image */}
        <motion.div
          className="banner-image dark"
          animate={theme === 'dark' ? 'visible' : 'hidden'}
          variants={imageVariants}
        />
        <motion.div className="banner-text" initial="hidden" animate="visible">
          <motion.h1>Welcome to My Portfolio</motion.h1>
          <motion.p>Discover my projects, skills, and journey in the world of software development.</motion.p>
          <Toolbox />
        </motion.div>
      </div>
    </>
  );
}

export default HomePage;
