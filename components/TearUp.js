import React, { useEffect, useState } from "react";

export default function TearUp({
  children,
  tearBoundingRect,
  recalculateRect,
}) {
  const [translateY, setTranslateY] = useState(
    tearBoundingRect.y + tearBoundingRect.height
  );
  useEffect(() => {
    setTranslateY(translateY - window.innerHeight);
  }, []);
  useEffect(() => {
    function handleScroll() {
      recalculateRect();
      const newTranslateY =
        tearBoundingRect.y + tearBoundingRect.height - window.innerHeight;

      if (newTranslateY > tearBoundingRect.height - 100) {
        setTranslateY(tearBoundingRect.height - 100);
      } else if (newTranslateY < 100) {
        setTranslateY(100);
      } else {
        setTranslateY(newTranslateY);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, [tearBoundingRect]);
  return (
    <div
      className="tear-up-parent"
      style={{
        transform: `translateY(calc(-${translateY}px + 6rem))`,
      }}
    >
      <div className="pt-24 bg-seashell tear-up">{children}</div>
      <style jsx>
        {`
          .tear-up-parent {
            transition: transform 0.1s ease-out;
            filter: drop-shadow(0px -1.5rem 1.5rem rgba(0, 0, 0, 0.1));
          }
          .tear-up {
            clip-path: polygon(
              0 2rem,
              8% 4.5rem,
              20% 2rem,
              38% 4.5rem,
              55% 0rem,
              65% 2rem,
              75% 3.5rem,
              90% 2rem,
              100% 4.5rem,
              100% 100%,
              0px 100%
            );
          }
        `}
      </style>
    </div>
  );
}
