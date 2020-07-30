import { useState, useEffect } from "react";
import Container from "../base/Container";
import BaseButton from "../base/BaseButton";
import BaseHeading from "../base/BaseHeading";
import { useSpring, animated, config } from "react-spring";

export default function HeroSection({ nextSectionRef }) {
  const [movingImage, setMovingImage] = useState(null);
  const [periodicMove, setPeriodicMove] = useState(null);
  const [props, set, stop] = useSpring(() => ({
    transform: "translate(0px,0px)",
  }));

  const handleLocalMouseDown = (e) => {
    setMovingImage({ x: e.pageX, y: e.pageY });
  };

  const handleMouseMove = (e) => {
    if (movingImage !== null) {
      clearInterval(periodicMove);
      const relativeMovement = {
        x: e.pageX - movingImage.x,
        y: e.pageY - movingImage.y,
      };
      set({
        transform: `translate(${relativeMovement.x}px,${relativeMovement.y}px)`,
      });
    }
  };
  const handleMouseUp = () => {
    setMovingImage(null);
    set({ transform: "translate(0px,0px)", config: config.gentle });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [movingImage]);

  useEffect(() => {
    setPeriodicMove(
      setInterval(() => {
        set({ transform: "translate(50px,50px)", config: config.molasses });
        setTimeout(
          () => set({ transform: "translate(0px,0px)", config: config.gentle }),
          400
        );
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
          className="w-full mb-4 md:w-1/3 md:mb-0"
          style={{
            ...props,
            cursor: movingImage === null ? "grab" : "grabbing",
          }}
          onMouseDown={handleLocalMouseDown}
        >
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
            I’d be happy to present you my knowledge
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
