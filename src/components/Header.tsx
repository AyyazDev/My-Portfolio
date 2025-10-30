import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Resume from "../../public/assets/Muhammad Ayyaz Resume.pdf";
import { useTheme } from "../context/ThemeContext";
import Switch from "@mui/material/Switch";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1366);

  const navClass = `
    transition duration-300 uppercase font-medium
    text-[var(--website-text-color)]
    hover:opacity-70
  `;

  const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"];

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1366);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>

{isDesktop && (
  <header
    className="fixed top-0 left-0 w-full z-50 h-[8vh] flex items-center justify-around py-[1rem]"
    style={{
      backgroundColor: "rgba(30, 30, 30, 0.15)", // subtle dark overlay
      backdropFilter: "blur(2px)",               // very soft blur
      WebkitBackdropFilter: "blur(2px)",        // for Safari
    }}
  >
    <NavLink
      to="/"
      className="text-[2rem] md:text-[2.5rem] lg:text-3xl font-bold no-underline text-[var(--website-text-color)]"
    >
      <span>{"< M. "}</span> <span>{" Ayyaz/ > "}</span>
    </NavLink>

    <nav className="flex items-center" style={{ gap: "2vw" }}>
      <Switch
        checked={theme === "dark"}
        onChange={toggleTheme}
        sx={{
          transform: "scale(1.3)",
          "& .MuiSwitch-thumb": { backgroundColor: "white" },
          "& .MuiSwitch-track": {
            backgroundColor: `${theme === "dark" ? "#23ce6b" : "#E31F71"} !important`,
            opacity: "1 !important",
          },
        }}
      />

      {navLinks.map((item) => {
        const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
        return (
          <NavLink key={item} to={path} className={navClass}>
            {item}
          </NavLink>
        );
      })}

      <a
        href={Resume}
        download
        style={{
          backgroundColor: "#22CA6E",
          color: "white",
          padding: "10px 25px",
          borderRadius: "9999px",
          fontWeight: "600",
          display: "inline-block",
          fontSize: "1rem",
          border: "2px solid #22CA6E",
        }}
        className="hover:opacity-90 transition-all duration-300 tracking-wide"
      >
        RESUME
      </a>
    </nav>
  </header>
)}


{!isDesktop && (
  <header
 className="fixed top-0 left-0 w-full z-50 h-[10vh] flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16"

    style={{
      backgroundColor: "rgba(255, 255, 255, 0.02)", // ultra subtle
      backdropFilter: "blur(4px)",                  // soft blur
      padding: "0 1.5rem",
      boxSizing: "border-box", // 👈 prevents content overflow
    }}
  >
    <NavLink
      to="/"
      className="text-[2rem] md:text-[2.5rem] lg:text-3xl font-bold no-underline text-[var(--website-text-color)]"
    >
      <span>{"< M. "}</span> <span>{" Ayyaz/ > "}</span>
    </NavLink>

    <nav className="flex items-center" style={{ gap: "2vw" }}>
      <Switch
        checked={theme === "dark"}
        onChange={toggleTheme}
        sx={{
          transform: "scale(1.2)",
          "& .MuiSwitch-thumb": { backgroundColor: "white" },
          "& .MuiSwitch-track": {
            backgroundColor: `${theme === "dark" ? "#23ce6b" : "#E31F71"} !important`,
            opacity: "1 !important",
          },
        }}
      />

      <MenuIcon
        sx={{ color: "var(--website-text-color)", cursor: "pointer" }}
        fontSize="large"
        onClick={() => setIsMenuOpen(true)}
      />
    </nav>
  </header>
)}



      {/* ============ FULLSCREEN MOBILE MENU ============ */}
 {isMenuOpen && (
  <div
     style={{
    backgroundColor: "var(--mobile-menu-bg)",
    backdropFilter: "none", // remove any blur
  }}
    className="fixed top-0 left-0 w-full h-full z-[9999] flex flex-col items-center justify-center"
  >
    <CloseIcon
      onClick={() => setIsMenuOpen(false)}
      sx={{
        color: "var(--website-text-color)",
        cursor: "pointer",
        position: "absolute",
        top: "25px",
        right: "25px",
      }}
      fontSize="large"
    />

    <div className="flex flex-col items-center">
      {navLinks.map((item) => {
        const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
        return (
          <NavLink
            key={item}
            to={path}
            onClick={() => setIsMenuOpen(false)}
            className={`${navClass} text-2xl leading-[3.2rem]`} // ✅ spacing applied here
          >
            {item}
          </NavLink>
        );
      })}

      <a href={Resume} download style={{ backgroundColor: "#22CA6E", color: "white", padding: "4px 14px", borderRadius: "9999px", fontWeight: "600", display: "inline-block", fontSize: "1.1rem", border: "2px solid #22CA6E", }} className="hover:opacity-90 transition-all duration-300 tracking-wide" > RESUME </a>
    </div>
  </div>
)}

    </>
  );
}
