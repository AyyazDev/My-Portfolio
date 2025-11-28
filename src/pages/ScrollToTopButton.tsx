import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomSpacing, setBottomSpacing] = useState(24);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();

        // How much footer is overlapping the screen
        const overlap = window.innerHeight - footerRect.top;

        if (overlap > 0) {
          // Footer visible → move button up
          setBottomSpacing(overlap + 20);
        } else {
          // Footer not visible → default position
          setBottomSpacing(24);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed right-6 z-[999]
        w-14 h-14 flex items-center justify-center rounded-full shadow-xl
        transition-all duration-300 hover:scale-110
      "
      style={{
        bottom: bottomSpacing,
        backgroundColor: "#22CA6E",
        color: "#000000",
      }}
    >
      <FaArrowUp size={22} />
    </button>
  );
}
