import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import DemoSite from '../../components/DemoSite.js'; 
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './PortfolioPage.css';
import Sigdang from '../../assets/images/Sigdang.PNG'

function PortfolioPage() {
  const { theme } = useTheme();
  const demoSites = [
    {
      title: "Restaurant Demo Site",
      description: "An overview of Project One.",
      image: Sigdang,
      technologies: ["React", "Typescript", "Tailwind", "AWS", "Webpack"],
      link: "https://main.d2gpl2885u134r.amplifyapp.com/"
    }
  ];

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
      <motion.div
          className={`portfolio-banner-text ${theme}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}>
        <h1>Welcome to my Portfolio</h1>
        <h3>Here's a Demo Site:</h3>
        <p>My github will show you more of my work</p>
        <a target='_blank' rel="noreferrer" href="https://github.com/JacobDaleOlguin" className="github-link">
          <GitHubIcon/>
          GitHub
        </a>
      </motion.div>
      <div className="demo-grid">
        {demoSites.map((site, index) => (
          <DemoSite key={index} {...site} theme={theme} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
