import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from '../../components/Typewriter';
import Toolbox from '../../components/Toolbox';
import { useTheme } from '../../context/ThemeContext';
import './HomePage.css';

function HomePage() {
  const { theme } = useTheme();
  const [isHeaderTypingDone, setIsHeaderTypingDone] = useState(false);
  const [isBodyTypingDone, setIsBodyTypingDone] = useState(false);

  const textContainerVariants = {
    hidden: { y: 0 },
    visible: { 
      y: -50, // Adjust based on your design needs
      transition: { duration: 0.5 }
    },
  };

  // Adjust this container to control when the Toolbox appears
  const toolboxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  return (
    <div className="banner">
      <AnimatePresence>
        <motion.div
          key={theme}
          className={`banner-image ${theme}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        />
      </AnimatePresence>
      <motion.div className="banner-text">
        <h1>
          <Typewriter
            text="Welcome to My Portfolio"
            speed={100}
            onTypingDone={() => setIsHeaderTypingDone(true)}
          />
        </h1>
        {isHeaderTypingDone && (
          <Typewriter
            text="Discover my projects, skills, and journey in the world of software development."
            speed={50}
            onTypingDone={() => setIsBodyTypingDone(true)}
          />
        )}
        <AnimatePresence>
          {isBodyTypingDone && (
            <motion.div
              variants={toolboxVariants}
              initial="hidden"
              animate="visible"
            >
              <Toolbox />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default HomePage;
