import React, { useEffect, useState } from 'react';

const Typewriter = ({ text, speed, onTypingDone }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    // If typing is already complete or no text is provided, don't reinitialize.
    if (isTypingComplete || !text) {
      return;
    }

    // Only start the interval if we're not yet at the end of the text
    if (currentIndex < text.length) {
      const typingInterval = setInterval(() => {
        setTypedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prevIndex) => {
          const newIndex = prevIndex + 1;
          if (newIndex === text.length) {
            // If we reach the end, clear the interval and mark typing as complete
            clearInterval(typingInterval);
            setIsTypingComplete(true);
            if (onTypingDone) {
              onTypingDone(); // Trigger the completion callback
            }
          }
          return newIndex;
        });
      }, speed);

      return () => clearInterval(typingInterval);
    }
  }, [text, speed, onTypingDone, isTypingComplete, currentIndex]);

  // When the component receives new text prop, reset the typing effect
  useEffect(() => {
    setTypedText('');
    setCurrentIndex(0);
    setIsTypingComplete(false);
  }, [text]);

  return <span>{typedText}</span>;
};

export default Typewriter;
