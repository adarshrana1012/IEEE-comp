import { useEffect, useState } from "react";

function TypingEffect({
  text = "Piyush",
  typingSpeed = 150,
  deletingSpeed = 120,
  pauseTime = 800,
  minLength = 1, 
}) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setIndex(index + 1);
        setDisplayText(text.slice(0, index + 1));
      }, typingSpeed);
    } else if (isDeleting && index > minLength) {
      // Deleting backward (but not fully)
      timeout = setTimeout(() => {
        setIndex(index - 1);
        setDisplayText(text.slice(0, index - 1));
      }, deletingSpeed);
    } else {
      // Pause and switch mode
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
      }, pauseTime);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, typingSpeed, deletingSpeed, pauseTime, minLength]);

  return (
    <h1>
      {displayText}
      <span className="cursor">|</span>
    </h1>
  );
}

export default TypingEffect;
