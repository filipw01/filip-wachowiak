import React from "react";
import BaseHeading from "./base/BaseHeading";
import { Project as ProjectType } from "../pages";

type Props = ProjectType;

export default function Project({
  image,
  name,
  description,
  technologies,
  github,
  link,
}: Props) {
  return (
    <div className="flex items-center mb-20">
      <div className="flex-shrink-0">
        {technologies.map(({ icon, name }) => (
          <img
            key={name}
            className="block w-6 my-6 mr-4 sm:w-8 sm:my-8 sm:mr-10"
            src={icon}
            alt={name}
            title={name}
          />
        ))}
      </div>
      <div className="relative flex-grow">
        <img src={image} alt="" className="project-image w-full" />
        <div className="inset-x-0 bottom-0 transform sm:translate-y-1/2 sm:absolute">
          <div className="px-8 pt-6 pb-8 mx-auto bg-white shadow-lg xl:w-5/6 lg:w-3/4 sm:w-5/6">
            <div className="flex items-center justify-between">
              <BaseHeading level={5}>{name}</BaseHeading>
              <div className="flex flex-shrink-0">
                {link && (
                  <a
                    className="flex-shrink-0"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-8 sm:w-8"
                      src="/images/link.svg"
                      alt="see project"
                    />
                  </a>
                )}
                {github && (
                  <a
                    className="flex-shrink-0 ml-3"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-8 sm:w-8"
                      src="/images/github.svg"
                      alt="see on github"
                    />
                  </a>
                )}
              </div>
            </div>
            <p className="mt-2 text-sm sm:text-md">{description}</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .project-image {
            border: 0.5rem solid #9c2e2e;
          }

          @media (min-width: 640px) {
            .project-image {
              border-width: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
}
