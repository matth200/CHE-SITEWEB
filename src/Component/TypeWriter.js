import React, { useState, useEffect } from "react";
import "../css/typewritter.scss";

const Typewriter = ({ text, speed = 150, size=30 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div className="typewriterText" style={{ fontSize: size }}>
      <span>{displayedText}</span>
      <div className="cursor"></div>
    </div>
  );
};

export default Typewriter;
