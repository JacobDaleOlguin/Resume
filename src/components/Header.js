// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; // Icon for menu
import Brightness4Icon from '@mui/icons-material/Brightness4'; // For dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7'; // For light mode
import HomeIcon from '@mui/icons-material/Home'; // Icon for Home
import InfoIcon from '@mui/icons-material/Info'; // Icon for About
import WorkIcon from '@mui/icons-material/Work'; // Icon for Portfolio
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Icon for Contact
import { useTheme } from '../context/ThemeContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header() {
    const { theme, toggleTheme } = useTheme();
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        { name: 'Home', link: '/', icon: <HomeIcon /> },
        { name: 'About', link: '/about', icon: <InfoIcon /> },
        { name: 'Portfolio', link: '/portfolio', icon: <WorkIcon /> },
        { name: 'Contact', link: '/contact', icon: <ContactMailIcon /> },
    ];

    return (
        <AppBar position="sticky" sx={{
            backgroundColor: "rgba(20, 100, 255, 0.6)", // Adjust the alpha for transparency
            backdropFilter: "blur(10px)", // Adjust the pixel value to increase/decrease the blur effect
            // Ensure the text and icons are visible and legible against the blur effect:
            color: "black", // Change as needed for your design
        }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {'>'}Jacob Olguin_
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            {menuItems.map((item) => (
                                <MenuItem key={item.name} onClick={handleClose} component={Link} to={item.link}>
                                    {item.icon}{item.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    menuItems.map((item) => (
                        <Button
                            key={item.name}
                            startIcon={item.icon}
                            color="inherit"
                            component={Link}
                            to={item.link}
                            sx={{ margin: '0 10px' }} // Adjust spacing as needed
                        >
                            {item.name}
                        </Button>
                    ))
                )}
                <IconButton color="inherit" onClick={toggleTheme}>
                    {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
