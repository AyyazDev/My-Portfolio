import React from 'react';
import { Link } from 'react-router-dom';
import react from "../../public/assets/react.svg";
import github from "../../public/assets/github.svg";
import whatsapp from "../../public/assets/whatsapp.svg";
import linkedin from "../../public/assets/linkedin.svg";
import gmail from "../../public/assets/gmail.svg";

export default function Footer() {
  return (
    <footer>
      <a href="https://muhammad-ayyaz.vercel.app/" className="logo">
        <span>www.muhammad</span>
        <span>-ayyaz.vercel.app</span>
      </a>
      <div >
       <p className="flex items-center gap-2">
  This Website was made with
  <img
    src={react}
    alt="React"
    className="!w-6 !h-6 object-contain"
    style={{ width: '32px', height: '32px' }}
  />
</p>

      </div>
      <div className="social-media flex gap-4 items-center">
  <a href="https://www.linkedin.com/in/muhammad-ayyaz-2614491ba" target="_blank" rel="noreferrer">
    <img
      src={linkedin}
      alt="Linkedin"
      className="!w-6 !h-6 object-contain"
      style={{ width: '24px', height: '24px' }}
    />
  </a>
  <a href="https://github.com/AyyazDev" target="_blank" rel="noreferrer">
    <img
      src={github}
      alt="GitHub"
      className="!w-6 !h-6 object-contain"
      style={{ width: '24px', height: '24px' }}
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
      className="!w-6 !h-6 object-contain"
      style={{ width: '24px', height: '24px' }}
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
    className="!w-6 !h-6 object-contain"
    style={{ width: '24px', height: '24px' }}
  />
</a>

</div>



    </footer>
  );
};

