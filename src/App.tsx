import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";
import { Engine } from "tsparticles-engine";
import { getShuffledIcons } from './utils/iconAssets';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react";

import Home from '../src/pages/Home';
import Main from "./components/Main";

export default function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const icons = useMemo(() => getShuffledIcons(), []);

  return (
    <ThemeProvider>
      <Router>
        <Header />

        <div
          className="min-h-screen relative transition-colors duration-300"
          style={{
            backgroundColor: 'var(--website-bg)',
            color: 'var(--website-text-color)',
          }}
        >
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

          <main className="pt-28">
            <Main />
          </main>

          <Footer />
          <Analytics />
        </div>

      </Router>
    </ThemeProvider>
  );
}
