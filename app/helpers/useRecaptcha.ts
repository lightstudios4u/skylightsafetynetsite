"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (
          siteKey: string,
          options: { action: string },
        ) => Promise<string>;
      };
    };
  }
}

const RECAPTCHA_SITE_KEY = "6LfpY10sAAAAALuhCO1d8YKbddhHGqClicnDQ2x-";

export function useRecaptcha() {
  const executeRecaptcha = useCallback(
    async (action: string): Promise<string | null> => {
      try {
        if (typeof window === "undefined" || !window.grecaptcha?.enterprise) {
          console.warn("reCAPTCHA not loaded yet");
          return null;
        }

        return new Promise((resolve) => {
          window.grecaptcha.enterprise.ready(async () => {
            try {
              const token = await window.grecaptcha.enterprise.execute(
                RECAPTCHA_SITE_KEY,
                { action },
              );
              resolve(token);
            } catch (error) {
              console.error("reCAPTCHA execution error:", error);
              resolve(null);
            }
          });
        });
      } catch (error) {
        console.error("reCAPTCHA error:", error);
        return null;
      }
    },
    [],
  );

  return { executeRecaptcha };
}
