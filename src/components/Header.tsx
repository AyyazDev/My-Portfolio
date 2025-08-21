import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Resume from '../../public/assets/Muhammad Ayyaz Resume.pdf';
import { useTheme } from '../context/ThemeContext';
import { Switch } from '@mui/material'; // Import the MUI Switch
import CloseIcon from '@mui/icons-material/Close'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Function to close the mobile menu
  function closeMenu() {
    setIsMenuOpen(false);
  }

  // Common Tailwind classes for navigation links
  const navClass = `
    transition duration-300 uppercase font-medium
    text-black dark:text-white
    hover:text-gray-700 dark:hover:text-gray-300
  `;

  return (
<header
  style={{
    backgroundColor: 'var(--website-bg)',
    backdropFilter: 'blur(8px)',
    opacity: 0.95,
  }}
  className="backdrop-blur-sm px-4 py-4 flex items-center justify-around sticky top-0 z-40"
>

<div>
      {/* Logo */}
 <NavLink
  to="/"
  onClick={closeMenu}
  className="logo text-[30px] font-[Red_Hat_Display] font-bold no-underline"
  style={{
    color: theme === 'dark' ? 'white' : 'black',
    textDecoration: 'none',
  }}
>
  <span>{"< M. "}</span>
  <span>{" Ayyaz/ > "}</span>
</NavLink>
</div>

<div>
      {/* Navigation Menu */}
     <nav
  className='mobile-menu-hidden'
>

        {/* MUI Theme Toggle Switch */}
   <Switch
  checked={theme === 'dark'}
  onChange={toggleTheme}
  sx={{
    transform: 'scale(1.3)',
    '& .MuiSwitch-thumb': {
      backgroundColor: 'white',
    },
    '& .MuiSwitch-track': {
      backgroundColor: `${theme === 'dark' ? '#23ce6b' : '#E31F71'} !important`,
      opacity: '1 !important',
    },
  }}
/>


        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) => `${isActive ? 'text-purple-400' : ''} ${navClass}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) => `${isActive ? 'text-purple-400' : ''} ${navClass}`}
        >
          About Me
        </NavLink>
        <NavLink
          to="/skills"
          onClick={closeMenu}
          className={({ isActive }) => `${isActive ? 'text-purple-400' : ''} ${navClass}`}
        >
          Skills
        </NavLink>
        <NavLink
          to="/projects"
          onClick={closeMenu}
          className={({ isActive }) => `${isActive ? 'text-purple-400' : ''} ${navClass}`}
        >
          Projects
        </NavLink>
        <NavLink
          to="/experience"
          onClick={closeMenu}
          className={({ isActive }) => `${isActive ? 'text-purple-400' : ''} ${navClass}`}
        >
          Experience
        </NavLink>
        <NavLink
          to="/education"
          onClick={closeMenu}
          className={({ isActive }) => `${isActive ? 'text-purple-400' : ''} ${navClass}`}
        >
          Education
        </NavLink>
        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) => `${isActive ? 'text-purple-400' : ''} ${navClass}`}
        >
          Contact
        </NavLink>
        <a
          href={Resume}
          download
          className="py-2 px-6 rounded-md bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-250 no-underline"
        >
          RESUME
        </a>
      </nav>
      </div>
    </header>
  );
}