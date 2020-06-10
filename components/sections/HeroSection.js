import Container from "../base/Container";
import BaseButton from "../base/BaseButton";
import BaseHeading from "../base/BaseHeading";

export default function HeroSection({ nextSectionRef }) {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen mb-16 md:flex-row sm:mb-0">
        <img
          className="w-40 mb-4 md:w-auto md:w-1/3 md:mb-0"
          src="/images/filip.jpeg"
          alt="Filip Wachowiak"
        />
        <div className="md:w-2/3 md:ml-12">
          <BaseHeading level={1}>
            <div className="text-2xl font-light lg:text-3xl font-body text-gray">
              My name is Filip Wachowiak
            </div>
            I like seeking the optimal solutions
          </BaseHeading>
          <p className="mt-4 text-sm lg:text-lg sm:text-md">
            I’m young and eager to learn. I’d like to specialize in JavaScript
            but I am not closed to other languages. I love optimizing work with
            scripts and other tools. I like clean code but I understand the
            deadlines. I live in Poznań and I’d be happy to present you my
            knowledge
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
