import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo/Your Name */}
        <Link to="/" className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors duration-300">
          Ayyaz
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-teal-400 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-teal-400 transition-colors duration-300">About</Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-teal-400 transition-colors duration-300">Skills</Link>
          </li>
           <li>
            <Link to="/experience" className="hover:text-teal-400 transition-colors duration-300">Experience</Link>
          </li>
           <li>
            <Link to="/education" className="hover:text-teal-400 transition-colors duration-300">Education</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-teal-400 transition-colors duration-300">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-teal-400 transition-colors duration-300">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

