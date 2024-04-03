import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';
import { useTheme } from '../../context/ThemeContext'; 

function HomePage() {
  // Retrieve the current theme from ThemeContext
  const { theme } = useTheme();

  // Variants for container to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for child animations
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <>
      {/* Banner with Text Overlay */}
      <div className="banner">
        <div className="banner-text">
          <motion.h1 variants={childVariants}>Welcome to My Portfolio</motion.h1>
          <motion.p variants={childVariants}>Discover my projects, skills, and journey in the world of software development.</motion.p>
        </div>
      </div>
      
      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="content-container"
      >
        <motion.section variants={childVariants}>
          <h2>My Skills</h2>
          <p>I specialize in Full Stack Development, including technologies like React, Node.js, Express, and MongoDB. I am passionate about creating seamless user experiences and scalable backend solutions.</p>
        </motion.section>

        <motion.section variants={childVariants}>
          <h2>Projects</h2>
          <p>My portfolio includes projects ranging from web applications that address real-world problems to experimental projects exploring new technologies and frameworks.</p>
        </motion.section>

        <motion.section variants={childVariants}>
          <h2>About Me</h2>
          <p>As a software developer, I am constantly exploring new technologies and methodologies to enhance my capabilities. My journey has been marked by continuous learning, problem-solving, and a commitment to excellence in every project I undertake.</p>
        </motion.section>
      </motion.div>
    </>
  );
}

export default HomePage;
