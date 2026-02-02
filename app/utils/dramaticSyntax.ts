"use client";

import { useState, useEffect } from 'react';

interface DramaticSyntaxOptions {
  speed?: number; // milliseconds per word
  delay?: number; // initial delay before starting
}

/**
 * Custom hook that creates a dramatic word-by-word fade-in effect for a sentence
 * @param text - The sentence to animate
 * @param options - Configuration options for the animation
 * @returns Array of words with their visibility state
 */
export function useDramaticSyntax(
  text: string,
  options: DramaticSyntaxOptions = {}
): { word: string; isVisible: boolean }[] {
  const { speed = 300, delay = 0 } = options;
  const words = text.split(' ');
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    // Reset when text changes
    setVisibleCount(0);
  }, [text]);

  useEffect(() => {
    // Don't do anything if text is empty
    if (!text || words.length === 0) return;

    // Handle initial delay
    if (visibleCount === 0 && delay > 0) {
      const delayTimeout = setTimeout(() => {
        setVisibleCount(1);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    // Start animation
    if (visibleCount === 0 && delay === 0) {
      setVisibleCount(1);
      return;
    }

    // Continue animation
    if (visibleCount > 0 && visibleCount < words.length) {
      const timeout = setTimeout(() => {
        setVisibleCount(visibleCount + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [visibleCount, text, words.length, speed, delay]);

  return words.map((word, index) => ({
    word,
    isVisible: index < visibleCount,
  }));
}
