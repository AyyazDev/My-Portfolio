import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Contact from "../pages/Contact";

export default function Main() {
  return (
   <main className="pt-0 lg-screen:bg-red-500 lg-screen:pt-[9vh] px-8 pb-[4vh]">

      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-screen-xl mx-auto">

        {/* ✅ Hero / Landing Section */}
        <section id="home" className="py-20">
          <Home />
        </section>

        {/* ✅ About Section */}
        <section id="about" className="py-20">
          <About />
        </section>

        {/* ✅ Skills Section */}
        <section id="skills" className="py-20">
          <Skills />
        </section>

        {/* ✅ Projects Section */}
        <section id="projects" className="py-20">
          <Projects />
        </section>

        {/* ✅ Experience Section */}
        <section id="experience" className="py-20">
          <Experience />
        </section>

        {/* ✅ Education Section */}
        <section id="education" className="py-20">
          <Education />
        </section>

        {/* ✅ Contact Section */}
        <section id="contact" className="py-20">
          <Contact />
        </section>

      </div>
    </main>
  );
}
