import Container from "../base/Container";
import BaseButton from "../base/BaseButton";
import BaseHeading from "../base/BaseHeading";

export default function HeroSection({ nextSectionRef }) {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-20 mb-16 md:min-h-screen md:flex-row sm:mb-0">
        <div className="w-full mb-4 md:w-1/3 md:mb-0">
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
        </div>

        <div className="md:w-2/3 md:ml-12">
          <BaseHeading level={1}>
            <div className="text-xl font-light lg:text-3xl font-body text-gray">
              My name is Filip Wachowiak
            </div>
            I'm a Full Stack JavaScript passionate
          </BaseHeading>
          <p className="mt-4 text-sm lg:text-lg sm:text-md">
            I specialize in React but I also love Python and Rust.
            I believe that broad knowledge makes you a better software developer.
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
