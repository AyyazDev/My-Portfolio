import React, { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typeSpeed?: number;   // typing speed per letter
  deleteSpeed?: number; // deleting speed per letter
  waitTime?: number;    // time before deleting
}

const TypewriterTransition: React.FC<TypewriterProps> = ({
  words,
  typeSpeed = 120,
  deleteSpeed = 70,
  waitTime = 1500,
}) => {
  const [index, setIndex] = useState(0);       // which text
  const [text, setText] = useState("");        // current typing letters
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // DELETE letter by letter
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deleteSpeed);

      if (text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    } 
    else {
      // TYPE letter by letter
      timer = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typeSpeed);

      if (text === currentWord) {
        setTimeout(() => setIsDeleting(true), waitTime);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words, typeSpeed, deleteSpeed, waitTime]);

  return (
    <p className="text-[18px] font-medium font-['Red Hat Display']">
      {text}
      <span className="blinking-cursor">_</span>

      {/* Cursor styling */}
      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            margin-left: 2px;
            width: 3px;
            animation: blink 0.7s infinite;
          }

          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </p>
  );
};

export default TypewriterTransition;
