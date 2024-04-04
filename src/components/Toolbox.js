import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
// Import SVGs as React components
import { ReactComponent as CSS3Icon } from '../assets/icons/css3-original.svg';
import { ReactComponent as GitIcon } from '../assets/icons/git-original.svg';
import { ReactComponent as HTML5Icon } from '../assets/icons/html5-original.svg';
import { ReactComponent as JavaScriptIcon } from '../assets/icons/javascript-original.svg';
import { ReactComponent as MaterialUIIcon } from '../assets/icons/materialui-original.svg';
import { ReactComponent as MongoDBIcon } from '../assets/icons/mongodb-original.svg';
import { ReactComponent as NodeJSIcon } from '../assets/icons/nodejs-original.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react-original.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/icons/typescript-original.svg';

const whileHover = { scale: 1.1 };

const iconStyle = {
  width: '50px',
  height: '50px',
  margin: '10px',
  transition: 'transform 0.3s ease-in-out',
};
const Toolbox = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <motion.div whileHover={whileHover}><CSS3Icon style={iconStyle} title="CSS3" /></motion.div>
      <motion.div whileHover={whileHover}><GitIcon style={iconStyle} title="Git" /></motion.div>
      <motion.div whileHover={whileHover}><HTML5Icon style={iconStyle} title="HTML5" /></motion.div>
      <motion.div whileHover={whileHover}><JavaScriptIcon style={iconStyle} title="JavaScript" /></motion.div>
      <motion.div whileHover={whileHover}><MaterialUIIcon style={iconStyle} title="Material-UI" /></motion.div>
      <motion.div whileHover={whileHover}><MongoDBIcon style={iconStyle} title="MongoDB" /></motion.div>
      <motion.div whileHover={whileHover}><NodeJSIcon style={iconStyle} title="Node.js" /></motion.div>
      <motion.div whileHover={whileHover}><ReactIcon style={iconStyle} title="React" /></motion.div>
      <motion.div whileHover={whileHover}><TypeScriptIcon style={iconStyle} title="TypeScript" /></motion.div>
    </div>
  );
};

export default Toolbox;
