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
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    )
}

export default ToggleThemeButton