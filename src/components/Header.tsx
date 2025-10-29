import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Resume from '../../public/assets/Muhammad Ayyaz Resume.pdf';
import { useTheme } from '../context/ThemeContext';
import { Switch } from '@mui/material';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navClass = `
    transition duration-300 uppercase font-medium
    text-black dark:text-white
    hover:text-gray-700 dark:hover:text-gray-300
  `;

  return (
<header
  style={{ backgroundColor: 'var(--website-bg)', backdropFilter: 'blur(8px)' }}
  className="fixed top-0 left-0 w-full z-50 h-[12vh] md:h-[10vh] lg:h-[8vh] flex items-center justify-around px-4 md:px-8 transition-colors duration-300"
>
  {/* Logo */}
  <NavLink
    to="/"
    onClick={() => setIsMenuOpen(false)}
    className="text-[2rem] md:text-[2.5rem] lg:text-3xl font-bold no-underline flex items-center h-full"
    style={{ color: 'var(--website-text-color)' }}
  >
    <span>{"< M. "}</span>
    <span>{" Ayyaz/ > "}</span>
  </NavLink>

  <nav className="flex items-center h-full space-x-4 md:space-x-6 lg:space-x-8">
    <Switch
      checked={theme === 'dark'}
      onChange={toggleTheme}
      sx={{
        transform: 'scale(1.3)',
        '& .MuiSwitch-thumb': { backgroundColor: 'white' },
        '& .MuiSwitch-track': {
          backgroundColor: `${theme === 'dark' ? '#23ce6b' : '#E31F71'} !important`,
          opacity: '1 !important',
        },
      }}
    />

    {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
      <NavLink
        key={item}
        to={`/${item.toLowerCase()}`}
        className={`${navClass} flex items-center justify-center h-full px-2 md:px-4 lg:px-6`}
      >
        {item}
      </NavLink>
    ))}

    <a
      href={Resume}
      download
      className="flex items-center justify-center h-full rounded-md bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-250 px-4 md:px-6 lg:px-8"
    >
      RESUME
    </a>
  </nav>
</header>


  );
}
