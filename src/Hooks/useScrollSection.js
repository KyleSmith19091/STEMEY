import { useState, useEffect } from "react";

export const useScrollSection = (sectionClass) => {
  const [scroll, setScroll] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  const handleScroll = () => {
    const totalScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const s = `${totalScroll / windowHeight}`;
    setScroll(s * 100);
  };

  useEffect(() => {
    // Add scroll event listener to window
    window.addEventListener("scroll", handleScroll);

    // Get card height after dom is loaded
    document.documentElement.style.setProperty(
      "--card-height",
      document.querySelector(".timeline-card-expanded").clientHeight
    );

    // Set sectionheight state
    setSectionHeight(
      (document.querySelector(sectionClass).clientHeight /
        document.documentElement.scrollHeight) *
        100
    );

    // Cleanup scroll event listener
    return () => window.removeEventListener("scroll", handleScroll); // Same as component did unmount
  }, []);

  return {
    scroll: scroll,
    sectionHeight: sectionHeight,
  };
};
