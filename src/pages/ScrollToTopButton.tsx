import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"; // If using next-themes for dark mode

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme(); // detects light/dark mode
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isDark = theme === "dark";

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-50
            w-14 h-14 flex items-center justify-center rounded-full shadow-lg
            transition-all duration-300 hover:scale-110
          `}
          style={{
            backgroundColor: isDark ? "#22CA6E" : "#000000",
            color: isDark ? "#000000" : "#22CA6E",
          }}
        >
          <FaArrowUp size={22} />
        </button>
      )}
    </>
  );
}
