import React, { useState, useEffect } from "react";
import "../css/typewritter.scss";

const Typewriter = ({ text, speed = 150, size=30, onEnd=null }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  let done = false;

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  if(onEnd!==null && !done && index == text.length){
    done = true;
    onEnd();
  }

  return (
    <div className="typewriterText" style={{ fontSize: size }}>
      <span>{displayedText}</span>
      <div className="cursor"></div>
    </div>
  );
};

export default Typewriter;
