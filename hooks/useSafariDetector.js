import { useEffect, useRef } from "react";

export const useSafariDetector = () => {
  const isSafari = useRef(false);
  useEffect(() => {
    isSafari.current = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );
  }, []);
  return isSafari.current;
};
