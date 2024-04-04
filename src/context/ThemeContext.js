import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        } else {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return prefersDarkMode ? 'dark' : 'light';
        }
    });
    const muiTheme = theme === 'light' ? lightTheme : darkTheme;

    useEffect(() => {
        // Apply a class to the body to support theme-specific global styles
        document.body.className = `theme-transition ${theme}`;
        // Store theme preference in localStorage
        localStorage.setItem('theme', theme);

        const prefersDarkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = (event) => {
            setTheme(event.matches ? 'dark' : 'light');
        };
        prefersDarkModeQuery.addEventListener('change', listener);

        return () => {
            prefersDarkModeQuery.removeEventListener('change', listener);
        };
    }, [theme]);

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MuiThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
