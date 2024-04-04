import React, { useEffect, useState } from 'react';

const Typewriter = ({ text, speed, onTypingDone }) => {
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false); // New state to track completion

  useEffect(() => {
    if (isTypingComplete) {
      // If typing is already complete, don't reinitialize.
      return;
    }

    let index = -1;
    const typingInterval = setInterval(() => {
      if (index < text.length - 1) {
        index++;
        setTypedText((prev) => prev + text[index]);
      } else if (index === text.length - 1) {
        clearInterval(typingInterval);
        setIsTypingComplete(true); // Update the state to reflect completion
        if (onTypingDone) {
          onTypingDone(); // Trigger the callback
        }
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, onTypingDone, isTypingComplete]);

  return <span>{typedText}</span>;
};

export default Typewriter;
