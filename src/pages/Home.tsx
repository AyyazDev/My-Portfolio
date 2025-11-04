import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useTheme } from "../context/ThemeContext";

import illusSVG from "../../public/assets/Programming-pana.svg";
import Hello from "../../public/assets/Hello.gif";

import linkedin from "../../public/assets/linkedin.svg";
import github from "../../public/assets/github.svg";
import green_github from "../../public/assets/green_github.svg";
import whatsapp from "../../public/assets/whatsapp.svg";
import gmail from "../../public/assets/gmail.svg";

export default function Home() {
  const { theme } = useTheme(); // ✅ Access current theme

  return (
    <section
      id="home"
className="min-h-screen flex flex-row md:flex-row items-center md:items-start justify-around xl:justify-around px-8 md:px-20 pt-24"
    >
      {/* LEFT TEXT */}
      <div className="space-y-4 max-w-xl">
        <p className="text-lg flex items-center gap-2">
          Hello <img src={Hello} width="24" alt="wave" />, I'm
        </p>

       <h1
  className="font-extrabold tracking-tight"
  style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}
>
  Muhammad Ayyaz
</h1>


        <h3 className="text-green-400 text-2xl font-semibold">
          Software Engineer
        </h3>

        <p className="opacity-80">2+ Years Experience</p>

        {/* CONTACT BUTTON */}

      <Link
  to="contact"
  smooth={true}
  duration={500}
  style={{
    backgroundColor: "#22CA6E",
    color: "white",
    padding: "10px 40px",
    borderRadius: "9999px",
    fontWeight: "600",
    display: "inline-block",
    fontSize: "1rem",
    border: "2px solid #22CA6E",
  }}
  className="hover:opacity-90 transition-all duration-300 tracking-wide mb-[2rem]"
>
  CONTACT
</Link>


        {/* ✅ SOCIAL ICONS - Correct links + theme GitHub icon */}
        <div className="flex items-center gap-[0.7rem] mt-6">
          <a
            href="https://www.linkedin.com/in/muhammad-ayyaz-2614491ba"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" className="w-[1.75rem] h-[1.75rem] object-contain" />
          </a>

          <a href="https://github.com/AyyazDev" target="_blank" rel="noreferrer">
            <img
              src={theme === "dark" ? green_github : github}
              alt="GitHub"
              className="w-[1.75rem] h-[1.75rem] object-contain"
            />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=%2B923164539608&text=Hello+Muhammad+Ayyaz+I+found+your+contact+through+your+portfolio+site."
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp" className="w-[1.875rem] h-[1.875rem] object-contain" />
          </a>

          <a
            href="mailto:ayyazfakhar@gmail.com?subject=Hello%20Muhammad%20Ayyaz&body=I%20found%20your%20contact%20through%20your%20portfolio%20site."
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmail} alt="gmail" className="w-[1.625rem] h-[1.625rem] object-contain" />
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      {/* RIGHT IMAGE */}
<div className="mt-10 md:mt-0 flex justify-center md:justify-end relative hero-illustration">
  <img
    src={illusSVG}
    alt="Developer Illustration"
    style={{
      width: "clamp(220px, 38vw, 520px)", // ✅ responsive width
      height: "auto",
    }}
  />
</div>

    </section>
  );
}
