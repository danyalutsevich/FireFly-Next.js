"use client"
import { useState, useEffect } from 'react';

export function ThemePicker() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Load theme from local storage, if available
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        // Save theme to local storage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        // Update body class to reflect current theme
        document.documentElement.className = isDarkMode ? '' : 'dark';
    }, [isDarkMode]);

    function handleClick() {
        setIsDarkMode(prev => !prev);
    }

    return (
        <span className="material-symbols-outlined cursor-pointer" onClick={handleClick}>{isDarkMode ? "dark_mode" : "light_mode"}</span>
    );
}


