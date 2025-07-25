import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import { shuffledIcons } from "./utils/iconAssets"; // Extracted icon assets and shuffle logic
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

  return (
    <ThemeProvider>
      <Router>
       <div
  className="min-h-screen relative transition-colors duration-300"
  style={{
    backgroundColor: 'var(--website-bg)',
    color: 'var(--website-text-color)',
  }}
>


          {/* Particles at zIndex -1 */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: { enable: true, zIndex: -1 },
              particles: {
                number: { value: 15, density: { enable: true, area: 800 } },
                shape: { type: "image", image: shuffledIcons },
                move: { enable: true, speed: 2 },
                size: { value: 16 },
                opacity: { value: 1, random: true },
              },
              detectRetina: true,
            }}
          />

          {/* Overlay: applies background color site-wide */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundColor: 'var(--website-bg)',
            }}
          />

          {/* Actual site content */}
          <Header />
          <main className="pt-20 transition-colors duration-300 text-[var(--website-text-color)]">
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

