import React, { useState } from "react";
import Container from "./base/Container";
import Headroom from "react-headroom";

export default function Navigation({ navigationElements }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute z-10 w-full">
      <Headroom>
        <div className="lg:hidden">
          <Container>
            <button
              className="relative z-10 flex px-3 py-3 ml-auto lg:translate-y"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </Container>
        </div>
        <div
          className={`md:static absolute inset-x-0 transform pt-10 lg:pt-0 lg:translate-y-0 -translate-y-16 lg:transform-none lg:transform-none bg-seashell transition-transform duration-300 ease-out shadow-lg lg:shadow-none ${
            menuOpen ? "" : "-translate-y-full"
          }`}
        >
          <Container>
            <div
              className={`transform flex flex-col items-center justify-end duration-300 ease-out py-8 lg:flex-row ${
                menuOpen ? "" : "lg:translate-y-0 -translate-y-8"
              }`}
            >
              {navigationElements.map((navigationElement) => (
                <a
                  key={navigationElement.name}
                  className="my-2 text-lg lg:ml-12 font-display"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    navigationElement.ref.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMenuOpen(false);
                  }}
                >
                  {navigationElement.name}
                </a>
              ))}
              <div className="flex">
                <a
                  href="https://www.linkedin.com/in/filip-w-2792a9139/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-2 lg:ml-12"
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
                  className="my-2 ml-6"
                >
                  <img
                    className="h-8 sm:w-8"
                    src="/images/github.svg"
                    alt="my github"
                  />
                </a>
                <a
                  className="flex flex-col items-center my-2 ml-6 font-display"
                  href="/FilipWachowiakResumeEng.pdf"
                  download="Filip Wachowiak - resume"
                >
                  <img
                    className="h-8 sm:w-8"
                    src="/images/resume.svg"
                    alt="my github"
                  />
                </a>
              </div>
            </div>
          </Container>
        </div>
      </Headroom>
    </header>
  );
}
