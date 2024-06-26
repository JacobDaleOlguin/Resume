import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from '../../components/Typewriter';
import { useTheme } from '../../context/ThemeContext';
import './HomePage.css';

function HomePage() {
  const theme = useTheme().theme;
  const [isHeaderTypingDone, setIsHeaderTypingDone] = useState(false);
  const [animateText, setAnimateText] = useState(false);

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
      <AnimatePresence>
        {animateText ? (
          <motion.div
            className="banner-text"
          >
            <h1>Welcome to My Portfolio</h1>
            <p>Discover my projects, skills, and journey in the world of software development.</p>
          </motion.div>
        ) : (
          <div className="banner-text">
            <h1>
              <Typewriter
                text="Welcome to My Portfolio"
                speed={100}
                onTypingDone={() => setIsHeaderTypingDone(true)}
              />
            </h1>
            {isHeaderTypingDone && (
              <p>
                <Typewriter
                  text="Discover my projects, skills, and journey in the world of software development."
                  speed={50}
                  onTypingDone={() => setAnimateText(true)}
                />
              </p>
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default HomePage;
