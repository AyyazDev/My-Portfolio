import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import react from "../../public/assets/react.svg";
import github from "../../public/assets/github.svg";
import green_github from "../../public/assets/green_github.svg";
import whatsapp from "../../public/assets/whatsapp.svg";
import linkedin from "../../public/assets/linkedin.svg";
import gmail from "../../public/assets/gmail.svg";
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
 <footer
  style={{
    backgroundColor: theme === "dark" ? "rgb(43, 43, 43)" : "rgba(0, 0, 0, 0.1)",
    color: theme === "dark" ? "white" : "black",
    backdropFilter: "blur(2px)",               // very soft blur
      WebkitBackdropFilter: "blur(2px)",        // for Safari
  }}
  className="py-4 z-20 relative"
>
  <div className="flex items-center justify-between py-[1.5rem] footer-inner">
    {/* Logo */}
    <NavLink
      to="/"
      className="logo text-[1.5rem] font-[Red_Hat_Display] font-bold no-underline"
      style={{
        color: theme === "dark" ? "white" : "black",
        textDecoration: "none",
        marginLeft: "8rem"
      }}
    >
      muhammad-ayyaz.vercel.app
    </NavLink>

    {/* Made with React */}
    <p
      className="flex items-center text-[1rem]"
      style={{
        gap: "0.7rem",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      This Website was made with
      <img
        src={react}
        alt="React"
        className="!w-[2rem] !h-[2rem] react-icon"
      />
    </p>

    {/* Social Media Icons */}
    <div
      className="social-media flex items-center"
      style={{ gap: "0.7rem", marginRight: "8rem" }}
    >
      <a href="https://www.linkedin.com/in/muhammad-ayyaz-2614491ba" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="Linkedin" className="!w-[2rem] !h-[2rem] object-contain" />
      </a>

      <a href="https://github.com/AyyazDev" target="_blank" rel="noreferrer">
        <img src={theme === "dark" ? green_github : github} alt="GitHub" className="!w-[1.75rem] !h-[1.75rem] object-contain" />
      </a>

      <a href="https://api.whatsapp.com/send/?phone=%2B923164539608&text=Hello+Muhammad+Ayyaz+I+found+your+contact+through+your+portfolio+site.%0A%0A" target="_blank" rel="noreferrer">
        <img src={whatsapp} alt="Whatsapp" className="!w-[1.875rem] !h-[1.875rem] object-contain" />
      </a>

      <a href="mailto:ayyazfakhar@gmail.com?subject=Hello%20Muhammad%20Ayyaz&body=I%20found%20your%20contact%20through%20your%20portfolio%20site." target="_blank" rel="noreferrer">
        <img src={gmail} alt="gmail" className="!w-[1.625rem] !h-[1.625rem] object-contain" />
      </a>
    </div>
  </div>
</footer>



  );
}
