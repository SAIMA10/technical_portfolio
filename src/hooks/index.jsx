import React, { useEffect, useState } from "react";

export const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export function screen(scr, ...styles) {
  if (scr === "all") {
    return `@media screen { ${styles.join("\n")} }`;
  }
  const bp = screens[scr];
  return `@media (min-width: ${bp}) { ${styles.join("\n")} }`;
}

export function useScreen(size) {
  const [matched, setMatched] = useState(() =>
    typeof window !== "undefined"
      ? matchMedia(`(min-width: ${screens[size]})`).matches
      : false,
  );

  useEffect(() => {
    const media = matchMedia(`(min-width: ${screens[size]})`);
    function handleChange(ev) {
      setMatched(ev.matches);
    }
    media.addEventListener("change", handleChange);
    setMatched(media.matches);
    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, [size]);
  
  return matched;
}
