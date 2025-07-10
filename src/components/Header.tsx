import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import Resume from '../../public/assets/Muhammad Ayyaz Resume.pdf'; // Ensure this path is correct

// Import the useTheme hook from your context file
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Renamed 'isActive' to 'isMenuOpen' for clarity
  const { theme, toggleTheme } = useTheme(); // Use the custom theme hook

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    // Use a plain header tag with Tailwind classes instead of styled-component's Container
    <header className="
      flex justify-between items-center
      py-4 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 /* Responsive padding */
      bg-gray-800 bg-opacity-70 backdrop-blur-md /* Background with blur */
      fixed top-0 left-0 w-full z-[1000] /* Fixed position and high z-index */
      transition-colors duration-300 /* Smooth transition for theme change */
    ">
      <Router>
        <HashLink smooth to="#home" className="logo text-white text-2xl font-bold">
          <span>{"<M. "}</span>
          <span>{" Ayyaz/>"}</span>
        </HashLink>

        {/* Theme Toggle (Checkbox) */}
        <div className="flex items-center space-x-2 relative z-50"> {/* Added z-50 to ensure toggle is clickable on mobile */}
          <input
            onChange={toggleTheme} // Use the toggleTheme function from context
            type="checkbox"
            id="theme-switch" // Changed ID for clarity
            name="mode"
            checked={theme === 'light'} // Set checked state based on current theme
            className="hidden" // Hide the default checkbox input
          />
          <label
            htmlFor="theme-switch"
            className="
              relative block w-14 h-8 cursor-pointer rounded-full
              bg-blue-500 transition-colors duration-300
              after:content-[''] after:absolute after:top-1 after:left-1
              after:w-6 after:h-6 after:bg-white after:rounded-full after:transition-transform
              peer-checked:bg-purple-500 peer-checked:after:translate-x-6 /* Tailwind JIT might need 'peer' utility enabled */
            "
          >
            {/* Visually hidden text for accessibility */}
            <span className="sr-only">Toggle Theme</span>
          </label>
        </div>


        {/* Navigation Menu */}
        <nav className={`
          flex items-center gap-7 text-white uppercase font-medium
          ${isMenuOpen ? 'mobile-menu-active' : 'mobile-menu-hidden'} /* Custom classes for mobile */
          lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:justify-normal lg:items-center lg:bg-transparent lg:visible lg:opacity-100 /* Desktop styles */
        `}>
          <NavHashLink smooth to="#home" onClick={closeMenu} className="hover:filter-brightness-60 transition-filter duration-250">
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu} className="hover:filter-brightness-60 transition-filter duration-250">
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu} className="hover:filter-brightness-60 transition-filter duration-250">
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu} className="hover:filter-brightness-60 transition-filter duration-250">
            Contact
          </NavHashLink>
          <a href={Resume} download className="
            button py-2 px-6 rounded-md bg-purple-600 hover:bg-purple-700
            transition-colors duration-250
          ">
            Resume
          </a>
        </nav>

        {/* Hamburger Menu Icon */}
        <div
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className={`
            menu-icon relative w-8 h-5 cursor-pointer flex flex-col justify-between z-50
            lg:hidden /* Hide on large screens and up */
            ${isMenuOpen ? 'active' : ''}
          `}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-full h-0.5 bg-white transition-transform duration-300 ease-in-out"></span>
          <span className="block w-full h-0.5 bg-white transition-opacity duration-300 ease-in-out"></span>
          <span className="block w-full h-0.5 bg-white transition-transform duration-300 ease-in-out"></span>
        </div>
      </Router>
    </header>
  );
}