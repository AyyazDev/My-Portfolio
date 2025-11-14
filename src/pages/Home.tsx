import React from "react";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

import illusSVG from "../../public/assets/Programming-pana.svg";
import Hello from "../../public/assets/Hello.gif";

import linkedin from "../../public/assets/linkedin.svg";
import github from "../../public/assets/github.svg";
import green_github from "../../public/assets/green_github.svg";
import whatsapp from "../../public/assets/whatsapp.svg";
import gmail from "../../public/assets/gmail.svg";

export default function Home() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingTop: "0rem",
      }}
    >
      {/* LEFT TEXT AREA */}
      <div className="space-y-4 max-w-xl">

        {/* 👋 Greeting */}
        <Fade direction="left">
          <p className="text-lg flex items-center gap-[0.25rem]">
            Hi <img src={Hello} width="24" alt="wave" />, I'm
          </p>
        </Fade>

        {/* 🧑‍💻 Name */}
        <Slide direction="left">
          <h1
            className="font-extrabold tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}
          >
            Muhammad Ayyaz
          </h1>
        </Slide>

        {/* 💚 Title */}
        <Fade direction="up" delay={200}>
      <h3 className="text-2xl font-semibold dark:!text-green-700">
  Software Engineer
</h3>



        </Fade>

        {/* ⏳ Experience */}
        <Fade direction="up" delay={400}>
          <p className="opacity-80  mb-[2.5rem]">2+ Years Experience</p>
        </Fade>

        {/* ✉️ Contact Button */}
        <Zoom delay={600}>
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
            Contact
          </Link>
        </Zoom>

        {/* 🌐 Social Links */}
        <Fade direction="up" delay={800}>
          <div className="flex items-center gap-[0.7rem] mt-6">
            <a
              href="https://www.linkedin.com/in/muhammad-ayyaz-2614491ba"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="Linkedin"
                className="w-[2.15rem] h-[2.15rem] object-contain"
              />
            </a>

            <a href="https://github.com/AyyazDev" target="_blank" rel="noreferrer">
              <img
                src={theme === "dark" ? green_github : github}
                alt="GitHub"
                className="w-[2.10rem] h-[2.10rem] object-contain"
              />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=%2B923164539608&text=Hello+Muhammad+Ayyaz+I+found+your+contact+through+your+portfolio+site."
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={whatsapp}
                alt="Whatsapp"
                className="w-[2rem] h-[2rem] object-contain"
              />
            </a>

            <a
              href="mailto:ayyazfakhar@gmail.com?subject=Hello%20Muhammad%20Ayyaz&body=I%20found%20your%20contact%20through%20your%20portfolio%20site."
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={gmail}
                alt="gmail"
                className="w-[1.725rem] h-[1.725rem] object-contain"
              />
            </a>
          </div>
        </Fade>
      </div>

      {/* RIGHT IMAGE */}
      <Slide direction="right" delay={300}>
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end relative hero-illustration">
          <img
            src={illusSVG}
            alt="Developer Illustration"
            style={{
              width: "clamp(220px, 38vw, 520px)",
              height: "auto",
            }}
          />
        </div>
      </Slide>
    </section>
  );
}
