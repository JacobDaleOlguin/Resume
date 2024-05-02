import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ThemeToggler from './ThemeToggler';

const menuItems = [
    { name: 'Home', link: '/', icon: <HomeIcon /> },
    { name: 'About', link: '/about', icon: <InfoIcon /> },
    { name: 'Portfolio', link: '/portfolio', icon: <WorkIcon /> },
    { name: 'Contact', link: '/contact', icon: <ContactMailIcon /> },
];

function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky" sx={{
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
            backdropFilter: "blur(10px)",
            color: theme.palette.mode === 'dark' ? 'white' : 'black',
        }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {'>'}Jacob Olguin
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
                    <div>
                        {menuItems.map((item) => (
                            <Button
                                key={item.name}
                                startIcon={item.icon}
                                color="inherit"
                                component={Link}
                                to={item.link}
                                sx={{ margin: '0 10px' }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </div>
                )}
                <ThemeToggler />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
