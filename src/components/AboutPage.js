import React from 'react';
import { motion } from 'framer-motion';

function AboutPage() {
  // Container variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  // Child component variants
  const childVariants = {
    hidden: { scale: 0.5 },
    visible: { 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };
  
  // Corrected return statement
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={childVariants}>Child 1</motion.div>
      <motion.div variants={childVariants}>Child 2</motion.div>
      <motion.div variants={childVariants}>Child 3</motion.div>
    </motion.div>
  );
}

export default AboutPage;
