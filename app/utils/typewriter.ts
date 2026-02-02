"use client";

import { useState, useEffect } from 'react';

interface TypewriterOptions {
  speed?: number; // milliseconds per word
  delay?: number; // initial delay before typing starts
  loop?: boolean; // whether to restart after finishing
}

/**
 * Custom hook that creates a typewriter effect for a given string (word by word)
 * @param text - The string to type out
 * @param options - Configuration options for the typewriter effect
 * @returns The current displayed text
 */
export function useTypewriter(
  text: string,
  options: TypewriterOptions = {}
): string {
  const { speed = 50, delay = 0, loop = false } = options;
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = text.split(' ');

  useEffect(() => {
    // Reset when text changes
    setCurrentWordIndex(0);
    setDisplayedText('');
  }, [text]);

  useEffect(() => {
    // Don't do anything if text is empty
    if (!text || words.length === 0) return;

    // Handle initial delay
    if (currentWordIndex === 0 && delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentWordIndex(1);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    // Start typing animation
    if (currentWordIndex === 0 && delay === 0) {
      setCurrentWordIndex(1);
      return;
    }

    // Continue typing animation
    if (currentWordIndex > 0 && currentWordIndex <= words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(words.slice(0, currentWordIndex).join(' '));
        setCurrentWordIndex(currentWordIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    // Handle loop
    if (loop && currentWordIndex > words.length) {
      const loopTimeout = setTimeout(() => {
        setCurrentWordIndex(0);
        setDisplayedText('');
      }, 1000); // Wait 1 second before restarting
      return () => clearTimeout(loopTimeout);
    }
  }, [currentWordIndex, text, words.length, speed, delay, loop]);

  return displayedText;
}

/**
 * Utility function that returns a promise resolving with each letter typed
 * Useful for non-React contexts or sequential animations
 * @param text - The string to type out
 * @param onUpdate - Callback function called with each character update
 * @param speed - Milliseconds per character (default: 50)
 */
export async function typewriterEffect(
  text: string,
  onUpdate: (currentText: string) => void,
  speed: number = 50
): Promise<void> {
  for (let i = 0; i <= text.length; i++) {
    onUpdate(text.slice(0, i));
    if (i < text.length) {
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  }
}
