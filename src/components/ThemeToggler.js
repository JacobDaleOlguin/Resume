import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Switch from '@mui/material/Switch';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Icon for dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Icon for light mode

// Static styles
const iconStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-2px',
};

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const [disabled, setDisabled] = useState(false); // State to disable toggle; needed to avoid race conditions

  const handleChange = () => {
    if (!disabled) {
      toggleTheme(); // Toggle the theme
      setDisabled(true); // Disable the switch
      setTimeout(() => {
        setDisabled(false); // Enable the switch after 1 second
      }, 1000);
    }
  };

  return (
    <Switch
      checked={isDarkTheme}
      onChange={handleChange}
      disabled={disabled} // Apply the disabled state to the Switch component
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
