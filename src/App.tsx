import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";
import { Engine } from "tsparticles-engine";
import { getShuffledIcons } from './utils/iconAssets';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react";

import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Projects from '../src/pages/Projects';
import Education from '../src/pages/Education';
import Experience from '../src/pages/Experience';
import NotFound from '../src/pages/NotFound';
import Skills from '../src/pages/Skills';

export default function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const icons = useMemo(() => getShuffledIcons(), []);

  return (
    <ThemeProvider>
      <Router>

        {/* ✅ Header moved OUTSIDE of the relative container */}
        <Header />

        <div
          className="min-h-screen relative transition-colors duration-300"
          style={{
            backgroundColor: 'var(--website-bg)',
            color: 'var(--website-text-color)',
          }}
        >
          {/* ✅ Particles stay behind content */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Particles
              id="tsparticles"
              init={particlesInit}
              style={{ position: 'absolute', inset: 0 }}
              options={{
                fullScreen: { enable: true, zIndex: 19 },
                background: { color: { value: "transparent" } },
                particles: {
                  number: { value: 15, density: { enable: true, area: 800 } },
                  shape: { type: "image", image: icons },
                  move: { enable: true, speed: 2 },
                  size: { value: 16 },
                  opacity: { value: 1, random: true },
                },
                detectRetina: true,
              }}
            />
          </div>

<main className="pt-28 transition-colors duration-300 text-[var(--website-text-color)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
          <Analytics />
        </div>

      </Router>
    </ThemeProvider>
  );
}
