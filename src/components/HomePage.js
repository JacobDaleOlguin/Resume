// componets/HomePage.js

import React from 'react';
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 10 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>Discover my projects and skills</p>
    </motion.div>
  );
}

export default HomePage;
