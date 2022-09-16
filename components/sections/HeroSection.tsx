import React from "react";
import Container from "../base/Container";
import BaseButton from "../base/BaseButton";
import BaseHeading from "../base/BaseHeading";

type Props = {
  nextSectionRef: React.RefObject<HTMLDivElement>;
};

export default function HeroSection({ nextSectionRef }: Props) {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-20 mb-16 md:min-h-screen md:flex-row sm:mb-0">
        <div className="w-full mb-4 md:w-1/3 md:mb-0">
          <div>
            <img
              src="/images/Filip.webp"
              alt=""
              className="w-full md:hidden"
              draggable="false"
            />
            <img
              src="/images/FilipVertical.webp"
              alt=""
              className="hidden w-full mb-0 md:block"
              draggable="false"
            />
          </div>
        </div>

        <div className="md:w-2/3 md:ml-12">
          <BaseHeading level={1}>
            <div className="text-xl font-light lg:text-3xl font-body text-gray">
              My name is Filip Wachowiak
            </div>
            Loving Frontend,
            <br />
            learning Rust
          </BaseHeading>
          <p className="mt-4 text-sm lg:text-lg sm:text-md">
            I like challenges and solving the impossible problems. Manageable
            and readable code is the first step to a great UX
          </p>
          <BaseButton
            className="mt-6"
            clickHandler={() => {
              if (!nextSectionRef.current) {
                return console.error(`nextSectionRef.current is null`);
              }
              nextSectionRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Learn more about me
          </BaseButton>
        </div>
      </div>
    </Container>
  );
}
