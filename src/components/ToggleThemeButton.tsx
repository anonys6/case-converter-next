import { SunMoon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function ToggleThemeButton() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.setAttribute('data-theme', storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };


    return (
        <div>
            <button style={
                {
                    backgroundColor: 'transparent',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }

            } onClick={toggleTheme}>
                <SunMoon />
            </button>
        </div>
    )
}

export default ToggleThemeButton