import { useState, useEffect } from "react";

const useWindowScroll = () => {
  const hasWindow = typeof window !== "undefined";

  function getWindowScroll() {
    const scrollY = hasWindow ? window.scrollY : null;
    const scrollX = hasWindow ? window.scrollX : null;

    const isScrollEnd = hasWindow
      ? window.innerHeight + scrollY >=
        document.querySelector("main").offsetHeight
      : false;

    return {
      isScrollEnd,
    };
  }

  const [windowScroll, setWindowScroll] = useState(getWindowScroll());

  useEffect(() => {
    if (hasWindow) {
      function handleScroll() {
        setWindowScroll(getWindowScroll());
      }

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [hasWindow]);

  return windowScroll;
};

export default useWindowScroll;
