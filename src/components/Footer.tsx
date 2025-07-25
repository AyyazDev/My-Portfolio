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
    <footer  style={{color: theme === 'dark' ? '#2B2B2B' : '#dcdcdc'}}>
      <div className="flex justify-around">
        <NavLink
          to="/"
          className="logo text-[1.75rem] font-[Red_Hat_Display] font-bold no-underline flex items-center"
          style={{
            color: theme === 'dark' ? 'white' : 'black',
            textDecoration: 'none',
          }}
        >
          <span>{"www.muhammad-ayyaz.vercel.app"}</span>
        </NavLink>

        <p className="flex items-center text-[1.35rem]" style={{ gap: '0.375rem', color: theme === 'dark' ? 'white' : 'black' }}>
          This Website was made with
          <img
            src={react}
            alt="React"
            className="!w-[2rem] !h-[2rem] object-contain animate-spinSlow"
            style={{ width: '2rem', height: '2rem' }}
          />
        </p>

        <div className="social-media flex gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/muhammad-ayyaz-2614491ba"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="Linkedin"
              className="!w-[2rem] !h-[2rem] object-contain"
              style={{ width: '2rem', height: '2rem' }}
            />
          </a>

          <a
            href="https://github.com/AyyazDev"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={theme === 'dark' ? green_github : github}
              alt="GitHub"
              className="!w-[1.75rem] !h-[1.75rem] object-contain"
              style={{ width: '1.75rem', height: '1.75rem' }}
            />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=%2B923164539608&text=Hello+Muhammad+Ayyaz+I+found+your+contact+through+your+portfolio+site.%0A%0A"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={whatsapp}
              alt="Whatsapp"
              className="!w-[1.875rem] !h-[1.875rem] object-contain"
              style={{ width: '1.875rem', height: '1.875rem' }}
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
              className="!w-[1.625rem] !h-[1.625rem] object-contain"
              style={{ width: '1.625rem', height: '1.625rem' }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
