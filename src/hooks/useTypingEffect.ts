"use client";

import { useState, useEffect, useRef } from "react";

interface UseTypingEffectOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

/**
 * Typing effect — all loop state in refs, zero stale closures.
 * words array is also stored in a ref so the effect never needs to re-run.
 */
export function useTypingEffect({
  words,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: UseTypingEffectOptions) {
  const [displayText, setDisplayText] = useState("");

  const wordsRef      = useRef(words);
  const wordIndexRef  = useRef(0);
  const charIndexRef  = useRef(0);
  const isDeletingRef = useRef(false);
  const timerRef      = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep wordsRef current if caller changes the array reference
  useEffect(() => {
    wordsRef.current = words;
  }, [words]);

  useEffect(() => {
    function tick() {
      const word = wordsRef.current[wordIndexRef.current % wordsRef.current.length];

      if (!isDeletingRef.current) {
        // Typing forward
        charIndexRef.current += 1;
        setDisplayText(word.slice(0, charIndexRef.current));

        if (charIndexRef.current >= word.length) {
          // Done typing → pause → delete
          timerRef.current = setTimeout(() => {
            isDeletingRef.current = true;
            timerRef.current = setTimeout(tick, deletingSpeed);
          }, pauseDuration);
        } else {
          timerRef.current = setTimeout(tick, typingSpeed);
        }
      } else {
        // Deleting
        charIndexRef.current -= 1;
        setDisplayText(word.slice(0, charIndexRef.current));

        if (charIndexRef.current <= 0) {
          // Done deleting → next word → type
          isDeletingRef.current = false;
          wordIndexRef.current = (wordIndexRef.current + 1) % wordsRef.current.length;
          timerRef.current = setTimeout(tick, typingSpeed + 100); // brief pause before next word
        } else {
          timerRef.current = setTimeout(tick, deletingSpeed);
        }
      }
    }

    // Small initial delay so first render shows empty string cleanly
    timerRef.current = setTimeout(tick, 600);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { displayText };
}
