import React, { useState } from "react";
import Headroom from "react-headroom";
import Container from "./base/Container";

export const indexSections = {
  about: "about",
  project: "project",
  work: "work",
};

const navigationElements = [
  { name: "About me", id: indexSections.about, url: "/" },
  { name: "Projects", id: indexSections.project, url: "/" },
  { name: "Work experience", id: indexSections.work, url: "/" },
  { name: "Blog", url: "/blog" },
];

export default function Navigation() {
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
          className={`lg:static absolute inset-x-0 transform pt-10 lg:pt-0 lg:translate-y-0 -translate-y-16 lg:transform-none lg:transform-none bg-seashell transition-transform duration-300 ease-out shadow-lg lg:shadow-none ${
            menuOpen ? "" : "-translate-y-full"
          }`}
        >
          <Container>
            <div
              className={`transform flex flex-col items-center justify-end duration-300 ease-out py-8 lg:flex-row ${
                menuOpen
                  ? ""
                  : "lg:translate-y-0 -translate-y-8 opacity-0 lg:opacity-100"
              }`}
            >
              {navigationElements.map((navigationElement) => (
                <a
                  key={navigationElement.name}
                  className="my-2 text-lg transition-colors lg:ml-12 font-display hover:text-red"
                  href={
                    navigationElement.id
                      ? `${navigationElement.url}#${navigationElement.id}`
                      : navigationElement.url
                  }
                  onClick={(e) => {
                    if (window.location.pathname !== navigationElement.url) {
                      return;
                    }
                    e.preventDefault();
                    setMenuOpen(false);
                    const nextSection = document.getElementById(
                      navigationElement.id ?? ""
                    );
                    if (!nextSection) {
                      return console.error(
                        `nextSection is not set for ${navigationElement.name}`
                      );
                    }
                    nextSection.scrollIntoView({
                      behavior: "smooth",
                    });
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
                  href="/Resume.pdf"
                  download="Filip Wachowiak - resume"
                >
                  <img
                    className="h-8 sm:w-8"
                    src="/images/resume.svg"
                    alt="my resume"
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
