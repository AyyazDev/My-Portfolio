import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

import ayyazImg from "/assets/my-image.png";
import Hello from "/assets/Hello.gif";

import linkedin from "/assets/linkedin.svg";
import github from "/assets/github.svg";
import green_github from "/assets/green_github.svg";
import whatsapp from "/assets/whatsapp.svg";
import gmail from "/assets/gmail.svg";

import TypewriterTransition from "./TypewriterTransition";

export default function Home() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between 
                 px-6 sm:px-10 lg:px-24 xl:px-24 pt-8 
                 min-h-[79vh] overflow-hidden"
    >
      {/* LEFT TEXT AREA */}
      <div className="space-y-4 max-w-xl md:max-w-2xl text-center md:text-left">

        {/* 👋 Greeting */}
        <Fade direction="left">
          <p className="text-lg flex items-center gap-1 justify-center md:justify-start">
            Hi <img src={Hello} width="28" alt="wave" />, I'm
          </p>
        </Fade>

        {/* 🧑‍💻 Name */}
        <Slide direction="left">
          <h1
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Muhammad Ayyaz
          </h1>
        </Slide>

        {/* 💚 Title */}
        <Fade direction="up" delay={200}>
          <h3 className="text-xl sm:text-2xl font-semibold">
            <TypewriterTransition
              words={[
                "Software Engineer",
                "Full Stack Developer",
                "MERN Stack Developer",
                "Database Developer",
              ]}
              typeSpeed={120}
              deleteSpeed={60}
              waitTime={1500}
            />
          </h3>
        </Fade>

        {/* Experience */}
        <Fade direction="up" delay={400}>
          <p className="opacity-80 font-bold mb-4">2+ Years Experience</p>
        </Fade>

        {/* Contact Button */}
        <Zoom delay={600}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-block px-10 py-3 rounded-full font-semibold 
                       transition-all duration-300 tracking-wide mb-4
                       text-white"
            style={{ backgroundColor: "#22CA6E", border: "2px solid #22CA6E" }}
          >
            Contact
          </Link>
        </Zoom>

        {/* Social Links */}
        <Fade direction="up" delay={800}>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-4">

            <a
              href="https://www.linkedin.com/in/muhammad-ayyaz-2614491ba"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="Linkedin"
                className="w-9 h-9 object-contain"
              />
            </a>

            <a href="https://github.com/AyyazDev" target="_blank" rel="noreferrer">
              <img
                src={theme === "dark" ? green_github : github}
                alt="GitHub"
                className="w-9 h-9 object-contain"
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
                className="w-10 h-10 object-contain"
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
                className="w-7 h-7 object-contain"
              />
            </a>

          </div>
        </Fade>
      </div>

      {/* RIGHT IMAGE */}
      <Slide direction="right" delay={300}>
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end relative">
          <img
            src={ayyazImg}
            alt="Developer Illustration"
            className="w-[250px] sm:w-[300px] md:w-[360px] lg:w-[430px] xl:w-[440px] 
                       h-auto object-contain"
          />
        </div>
      </Slide>
    </section>
  );
}
