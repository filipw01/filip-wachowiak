import { useEffect, useRef } from "react";

export const useElementBoundingRect = (updateCallback) => {
  const elementRef = useRef(null);
  const boundingRect = useRef({
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  });
  function recalculateRect() {
    boundingRect.current = elementRef.current.getBoundingClientRect();
    updateCallback && updateCallback();
  }
  useEffect(() => {
    window.addEventListener("resize", recalculateRect);
    window.addEventListener("load", recalculateRect);
    return () => {
      window.removeEventListener("resize", recalculateRect);
    };
  }, [elementRef]);
  return { elementRef, boundingRect, recalculateRect };
};
