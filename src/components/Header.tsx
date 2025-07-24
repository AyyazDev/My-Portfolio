import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Resume from '../../public/assets/Muhammad Ayyaz Resume.pdf';
import { useTheme } from '../context/ThemeContext';
import { Switch } from '@mui/material'; // Import the MUI Switch

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
    <header style={{ backgroundColor: 'var(--website-bg)' }} className={`flex justify-between items-center py-4 px-4 bg-white transition-colors duration-300`}>
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

      {/* Navigation Menu */}
      <nav
  className={`
    ${isMenuOpen ? 'mobile-menu-active' : 'mobile-menu-hidden'}
    lg:flex lg:items-center lg:gap-7
  `}
>

        {/* MUI Theme Toggle Switch */}
   <Switch
  checked={theme === 'dark'}
  onChange={toggleTheme}
  sx={{
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
          className="py-2 px-6 rounded-md bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-250"
        >
          RESUME
        </a>
      </nav>

      {/* Hamburger Menu Icon for mobile */}
    <div
  className={`
    lg:hidden
    z-50
    menu-icon relative w-8 h-5 cursor-pointer flex flex-col justify-between
    ${isMenuOpen ? 'active' : ''}
  `}
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>

        <span className="block w-full h-0.5 bg-black dark:bg-white transition-transform duration-300 ease-in-out"></span>
        <span className="block w-full h-0.5 bg-black dark:bg-white transition-opacity duration-300 ease-in-out"></span>
        <span className="block w-full h-0.5 bg-black dark:bg-white transition-transform duration-300 ease-in-out"></span>
      </div>
    </header>
  );
}