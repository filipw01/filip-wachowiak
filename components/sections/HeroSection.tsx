import React from "react";
import Container from "../base/Container";
import BaseButton from "../base/BaseButton";
import BaseHeading from "../base/BaseHeading";

type Props = {
  nextSectionId: string;
};

export default function HeroSection({ nextSectionId }: Props) {
  return (
    <Container className="md:max-w-screen-2xl">
      <div className="flex flex-col md:items-center justify-center py-20 mb-16 md:min-h-screen md:flex-row sm:mb-0">
        <div className="w-full mb-4 md:w-1/3 md:mb-0">
          <div>
            <img
              style={{ aspectRatio: "1496/1000" }}
              src="/images/Filip.webp"
              alt=""
              className="w-full md:hidden"
              draggable="false"
            />
            <img
              style={{ aspectRatio: "1379/2000" }}
              src="/images/FilipVertical.webp"
              alt=""
              className="hidden w-full mb-0 md:block"
              draggable="false"
            />
          </div>
        </div>

        <div className="md:w-2/3 md:ml-12 md:max-w-lg">
          <BaseHeading level={1}>
            <div className="text-xl font-light lg:text-3xl font-body text-gray">
              I'm Filip Wachowiak
            </div>
            Loving Frontend,
            <br />
            evolving products
          </BaseHeading>
          <p className="mt-4 text-sm lg:text-lg sm:text-md">
            I like challenges and solving impossible problems. Working in close
            collaboration with my team and owning the product is important to me
          </p>
          <BaseButton
            className="mt-6"
            clickHandler={() => {
              const nextSection = document.getElementById(nextSectionId);
              if (!nextSection) {
                return console.error(`nextSectionRef.current is null`);
              }
              nextSection.scrollIntoView({
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
