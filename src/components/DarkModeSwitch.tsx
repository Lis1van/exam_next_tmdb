import React, {useEffect, useState} from 'react';
import {FaMoon, FaSun} from "react-icons/fa";
import { useTheme } from 'next-themes';


const DarkModeSwitch = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
            <div className="text-xl focus:outline-none" aria-label="Toggle Theme">
                {mounted && (currentTheme === 'dark' ? (
                    <FaSun onClick={() => setTheme('light')} className="text-yellow-400 cursor-pointer hover:text-amber-700"/>) :
                    (<FaMoon onClick={() => setTheme('dark')} className='cursor-pointer hover:text-amber-700' />))}
            </div>
    );
};

export default DarkModeSwitch;
