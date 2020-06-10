import React from "react";
import Container from "./base/Container";

export default function Navigation({ navigationElements }) {
  return (
    <header className="absolute z-10 w-full bg-seashell">
      <Container>
        <div className="flex items-center justify-end h-32 ">
          {navigationElements.map((navigationElement) => (
            <a
              key={navigationElement.name}
              className="ml-12 text-lg cursor-pointer font-display"
              onClick={() =>
                navigationElement.ref.scrollIntoView({ behavior: "smooth" })
              }
            >
              {navigationElement.name}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/filip-w-2792a9139/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-12"
          >
            <img
              className="h-8 sm:w-8"
              src="/images/linkedin.svg"
              alt="my linkedin"
            />
          </a>
          <a
            href="https://github.com/filipw01/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6"
          >
            <img
              className="h-8 sm:w-8"
              src="/images/github.svg"
              alt="my github"
            />
          </a>
          <a className="ml-6" href="">
            <img
              className="h-8 sm:w-8"
              src="/images/resume.svg"
              alt="my github"
            />
          </a>
        </div>
      </Container>
    </header>
  );
}
