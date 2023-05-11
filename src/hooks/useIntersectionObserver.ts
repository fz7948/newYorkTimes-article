import React from "react";

export default function useIntersectionObserver(callback: () => void) {
  const observer = React.useRef(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 0.5 },
    ),
  );

  const observe = (element: Element | undefined) => {
    if (element) {
      observer.current.observe(element);
    }
  };

  const unobserve = (element: Element) => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve];
}
