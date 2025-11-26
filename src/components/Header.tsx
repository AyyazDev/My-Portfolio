import React, { useState } from "react";
import { Link } from "react-scroll";
import Resume from "/assets/Muhammad Ayyaz Resume.pdf";
import { useTheme } from "../context/ThemeContext";
import Switch from "@mui/material/Switch";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../index.css";
import { HiDownload } from "react-icons/hi";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navClass =
    "transition duration-300 uppercase text-[var(--website-text-color)] hover:opacity-70 font-medium cursor-pointer";

  const Links = ["Home", "Skills", "Experience", "Projects", "Education", "Contact"];

  return (
    <>
      {/* ======== FIXED TOP HEADER ======== */}
      <header
        className="
          fixed top-0 left-0 w-full z-50
          backdrop-blur-md bg-black/10
          flex items-center justify-between
          px-4 sm:px-6 md:px-10 xl:px-20
          h-20 md:h-20
        "
      >
        {/* LOGO */}
        <Link
          to="/"
          className="text-[1.8rem] md:text-[2.2rem] no-underline text-(--website-text-color) cursor-pointer"
        >
          {"< M. Ayyaz />"}
        </Link>

        {/* ===== DESKTOP NAV (lg and up) ===== */}
        <nav className="hidden lg:flex items-center gap-10">
          <Switch
            checked={theme === "dark"}
            onChange={toggleTheme}
            sx={{
              transform: "scale(1.25)",
              "& .MuiSwitch-thumb": { backgroundColor: "white" },
              "& .MuiSwitch-track": {
                backgroundColor: `${
                  theme === "dark" ? "#23ce6b" : "#E31F71"
                } !important`,
                opacity: "1 !important",
              },
            }}
          />

          {/* Navigation Links */}
          {Links.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={600}
              offset={-100}
              className={`${navClass} cursor-pointer`}
            >
              {item}
            </Link>
          ))}

          {/* Resume Button */}
          <a
  href={Resume}
  download
  className="
    bg-[#22CA6E] text-white px-4 py-2 rounded-full
    font-semibold border-2 border-[#22CA6E]
    hover:opacity-90 transition-all duration-300
    flex items-center gap-2
  "
>
  RESUME <HiDownload size={20} />
</a>
        </nav>

        {/* ===== MOBILE RIGHT SECTION ===== */}
        <div className="lg:hidden flex items-center gap-3">
          <Switch
            checked={theme === "dark"}
            onChange={toggleTheme}
            sx={{
              transform: "scale(1.15)",
              "& .MuiSwitch-thumb": { backgroundColor: "white" },
              "& .MuiSwitch-track": {
                backgroundColor: `${
                  theme === "dark" ? "#23ce6b" : "#E31F71"
                } !important`,
                opacity: "1 !important",
              },
            }}
          />

          <MenuIcon
            sx={{ color: "var(--website-text-color)", cursor: "pointer" }}
            fontSize="large"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </header>

      {/* ======== FULLSCREEN MOBILE MENU ======== */}
      {isMenuOpen && (
        <div
          className="
            fixed inset-0 z-9999
            flex flex-col items-center justify-center
            bg-(--mobile-menu-bg)
          "
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

          <div className="flex flex-col items-center space-y-6">
            {Links.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={600}
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
                className={`${navClass} text-xl leading-10 tracking-wide`}
              >
                {item}
              </Link>
            ))}

            <a
              href={Resume}
              download
              className="
                bg-[#22CA6E] text-white px-6 py-2 rounded-full
                font-semibold border-2 border-[#22CA6E]
                hover:opacity-90 text-xl   flex items-center gap-2 whitespace-nowrap
              "
            >
              RESUME               <HiDownload size={20} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
