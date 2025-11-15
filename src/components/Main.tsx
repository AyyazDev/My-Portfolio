import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Contact from "../pages/Contact";
import '../index.css';

export default function Main() {
  return (
   <main className="pt-0 lg-screen:bg-red-500 lg-screen:pt-[9vh] px-0 pb-[4vh] z-10 relative">


        {/* ✅ Hero / Landing Section */}
        <section id="home">
          <Home />
        </section>

        {/* ✅ Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* ✅ Experience Section */}
        <section id="experience">
          <Experience />
        </section>

        {/* ✅ Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* ✅ Education Section */}
        <section id="education">
          <Education />
        </section>

        {/* ✅ Contact Section */}
        <section id="contact">
          <Contact />
        </section>

    </main>
  );
}
