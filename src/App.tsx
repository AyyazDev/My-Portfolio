import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      {/* The Header will appear on all pages */}
      <Header />

      <main> {/* Use a <main> tag for the main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add a catch-all for 404 pages (optional but good practice) */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-red-800 text-white text-3xl">404 - Page Not Found</div>} />
        </Routes>
      </main>
    </Router>
  );
}

