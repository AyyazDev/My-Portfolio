import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Resume from '../../public/assets/Muhammad Ayyaz Resume.pdf';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const navClass = `
    transition duration-300 uppercase font-medium
    text-black dark:text-white
    hover:text-gray-700 dark:hover:text-gray-300
  `;

  return (
    <header
      className="
        flex justify-between items-center
        py-4 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40
        bg-white dark:bg-gray-900 bg-opacity-70 backdrop-blur-md
        fixed top-0 left-0 w-full z-[1000]
        transition-colors duration-300
      "
    >
      {/* Logo */}
      <NavLink to="/" onClick={closeMenu} className="logo text-black dark:text-white text-2xl font-bold">
        <span>{"<M. "}</span>
        <span>{" Ayyaz/>"}</span>
      </NavLink>

      {/* Theme Toggle */}
      <div className="flex items-center space-x-2 relative z-50">
        <input
          onChange={toggleTheme}
          type="checkbox"
          id="theme-switch"
          name="mode"
          checked={theme === 'light'}
          className="hidden peer"
        />
        <label
          htmlFor="theme-switch"
          className="
            relative block w-14 h-8 cursor-pointer rounded-full
            bg-blue-500 transition-colors duration-300
            after:content-[''] after:absolute after:top-1 after:left-1
            after:w-6 after:h-6 after:bg-white after:rounded-full after:transition-transform
            peer-checked:bg-purple-500 peer-checked:after:translate-x-6
          "
        >
          <span className="sr-only">Toggle Theme</span>
        </label>
      </div>

      {/* Navigation */}
      <nav
        className={`
          flex items-center gap-7
          ${isMenuOpen ? 'mobile-menu-active' : 'mobile-menu-hidden'}
          lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:justify-normal lg:items-center lg:bg-transparent lg:visible lg:opacity-100
        `}
      >
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

      {/* Hamburger Menu Icon */}
      <div
        aria-expanded={isMenuOpen ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className={`
          menu-icon relative w-8 h-5 cursor-pointer flex flex-col justify-between z-50
          lg:hidden
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
