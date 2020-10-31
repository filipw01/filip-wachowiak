import { useState, useEffect, useRef } from "react";
import Container from "../base/Container";
import BaseButton from "../base/BaseButton";
import BaseHeading from "../base/BaseHeading";
import { useSpring, animated, config, interpolate } from "react-spring";

export default function HeroSection({ nextSectionRef }) {
  const imageWrapper = useRef(null);
  const [grabPosition, setGrabPosition] = useState(null);
  const [periodicMove, setPeriodicMove] = useState(null);
  const [relativePosition, setRelativePosition] = useState({ x: 0, y: 0 });
  const { x, y } = useSpring({
    x: relativePosition.x,
    y: relativePosition.y,
    config: config.gentle,
  });

  useEffect(() => {
    const handleMouseDown = (e) => {
      e.preventDefault();
      if (e.pageX) {
        setGrabPosition({ x: e.pageX, y: e.pageY });
      } else {
        setGrabPosition({ x: e.touches[0].pageX, y: e.touches[0].pageY });
      }
    };
    const handleMouseMove = (e) => {
      if (grabPosition !== null) {
        e.preventDefault();
        clearInterval(periodicMove);
        const relativeMovement = {};
        if (e.pageX !== undefined) {
          relativeMovement.x = e.pageX - grabPosition.x;
          relativeMovement.y = e.pageY - grabPosition.y;
        } else {
          relativeMovement.x = e.touches[0].pageX - grabPosition.x;
          relativeMovement.y = e.touches[0].pageY - grabPosition.y;
        }
        setRelativePosition(relativeMovement);
      }
    };
    const handleMouseUp = () => {
      setGrabPosition(null);
      setRelativePosition({ x: 0, y: 0 });
    };
    imageWrapper.current.addEventListener("mousedown", handleMouseDown);
    imageWrapper.current.addEventListener("touchstart", handleMouseDown, {
      passive: false,
    });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMouseMove, { passive: false });
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      imageWrapper.current.removeEventListener("mousedown", handleMouseMove);
      imageWrapper.current.removeEventListener("touchstart", handleMouseMove, {
        passive: false,
      });
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove, {
        passive: false,
      });
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [grabPosition]);

  useEffect(() => {
    setPeriodicMove(
      setInterval(() => {
        setRelativePosition({ x: 50, y: 50 });
        setTimeout(() => setRelativePosition({ x: 0, y: 0 }), 400);
      }, 4000)
    );
    return () => {
      clearInterval(periodicMove);
    };
  }, []);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-20 mb-16 md:min-h-screen md:flex-row sm:mb-0">
        <animated.div
          ref={imageWrapper}
          className="w-full mb-4 md:w-1/3 md:mb-0"
          style={{
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px, ${y}px, 0)`
            ),
            willChange: "transform",
            userSelect: "none",
            userDrag: "none",
            cursor: grabPosition === null ? "grab" : "grabbing",
          }}
        >
          <div>
            <picture className="w-full md:hidden sm:w-3/4" draggable="false">
              <source
                srcSet="/images/FilipMobileLow.webp 500w, /images/FilipMobile.webp 1.3x"
                type="image/webp"
              />
              <source srcSet="/images/FilipMobileLow.jpg 500w, /images/FilipMobile.jpg 1.3x" />
              <img
                src="/images/FilipMobile.jpg"
                alt="Filip Wachowiak"
                draggable="false"
              />
            </picture>
            <picture className="hidden w-full mb-0 md:block" draggable="false">
              <source
                srcSet="/images/FilipLow.webp 1300w, /images/Filip.webp 1.3x"
                type="image/webp"
              />
              <source srcSet="/images/FilipLow.jpg 1300w, /images/Filip.jpg 1.3x" />
              <img
                src="/images/Filip.jpg"
                alt="Filip Wachowiak"
                draggable="false"
              />
            </picture>
          </div>
        </animated.div>

        <div className="md:w-2/3 md:ml-12">
          <BaseHeading level={1}>
            <div className="text-xl font-light lg:text-3xl font-body text-gray">
              My name is Filip Wachowiak
            </div>
            I like seeking the optimal solutions
          </BaseHeading>
          <p className="mt-4 text-sm lg:text-lg sm:text-md">
            I’m young and eager to learn. I specialize in JavaScript but I am
            not closed to other languages. I love optimizing work with scripts
            and other tools. I like clean code but I understand the deadlines.
          </p>
          <BaseButton
            marginTop="6"
            clickHandler={() =>
              nextSectionRef.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn more about me
          </BaseButton>
        </div>
      </div>
    </Container>
  );
}
