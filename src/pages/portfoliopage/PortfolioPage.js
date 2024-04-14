import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './PortfolioPage.css';

function PortfolioPage() {
  const { theme } = useTheme();

  return (
    <div className="banner">
      <AnimatePresence>
        <motion.div
          className={`portfolio-banner-image ${theme}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        />
      </AnimatePresence>
      <div className={`portfolio-banner-text ${theme}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}>
        <h1>Here are some projects I've worked on.</h1>
        <h3>For a better look at what I can do, check out my </h3>
        {/* Use an <a> tag for external links */}
        <a target='_blank' rel="noreferrer" href="https://github.com/JacobDaleOlguin" className="github-link">
          <GitHubIcon/>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default PortfolioPage;
