"use client";
import React, { useEffect, useState } from 'react'

type TypewriterProps = {
    words: string[];
};

export const Typewriter: React.FC<TypewriterProps> = ({ words }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const word = words[currentIndex];
      if (isDeleting) {
        setCurrentWord(word.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);
        if (currentCharIndex === 0) {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % words.length);
        }
      } else {
        setCurrentWord(word.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
        if (currentCharIndex === word.length) {
          setIsDeleting(true);
        }
      }
    };

    const interval = setInterval(type, 100);

    return () => clearInterval(interval);
  }, [currentCharIndex, currentIndex, isDeleting, words]);
    return (
      <p id="typewriter">{currentWord}</p>
    );
};
