import Container from "../base/Container";
import BaseButton from "../base/BaseButton";
import BaseHeading from "../base/BaseHeading";

export default function HeroSection({ nextSectionRef }) {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-20 mb-16 md:min-h-screen md:flex-row sm:mb-0">
        <picture className="w-full mb-4 md:hidden sm:w-3/4">
          <source
            srcSet="/images/FilipMobileLow.webp 500w, /images/FilipMobile.webp 1.3x"
            type="image/webp"
          />
          <source srcSet="/images/FilipMobileLow.jpg 500w, /images/FilipMobile.jpg 1.3x" />
          <img src="/images/FilipMobile.jpg" alt="Filip Wachowiak" />
        </picture>
        <picture className="hidden w-auto w-1/3 mb-0 md:block">
          <source
            srcSet="/images/FilipLow.webp 1300w, /images/Filip.webp 1.3x"
            type="image/webp"
          />
          <source srcSet="/images/FilipLow.jpg 1300w, /images/Filip.jpg 1.3x" />
          <img src="/images/Filip.jpg" alt="Filip Wachowiak" />
        </picture>
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
