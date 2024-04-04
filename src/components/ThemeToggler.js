import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Switch from '@mui/material/Switch';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Icon for dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Icon for light mode


const iconStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-2px', // Necessary to center icons on toggle
};

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <Switch
      checked={isDarkTheme}
      onChange={toggleTheme}
      icon={
        <Brightness4Icon style={{ ...iconStyles, color: '#424242' }} />
      }
      checkedIcon={
        <Brightness7Icon style={{ ...iconStyles, color: '#FFC107' }} />
      }
      inputProps={{ 'aria-label': 'toggle theme' }}
    />
  );
};

export default ThemeToggler;
