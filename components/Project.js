import React, { useState } from "react";
import BaseHeading from "./base/BaseHeading";
import { useElementBoundingRect } from "../hooks/useElementBoundingRect";

export default function Project({
  video,
  poster,
  name,
  description,
  technologies,
  github,
  link,
}) {
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const { elementRef, boundingRect } = useElementBoundingRect(() =>
    setDescriptionHeight(boundingRect.current.height)
  );
  return (
    <div
      className="flex items-center project"
      style={{
        marginBottom: `${descriptionHeight / 2}px`,
      }}
    >
      <div className="flex-shrink-0">
        {technologies.map((technology) => (
          <img
            key={technology.name}
            className="block w-6 my-6 mr-4 sm:w-8 sm:my-8 sm:mr-10 grayscale"
            src={technology.icon}
            alt={technology.name}
          />
        ))}
      </div>
      <div className="relative flex-grow">
        <video
          className="w-full"
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
        />
        <div className="inset-x-0 bottom-0 transform sm:translate-y-1/2 sm:absolute">
          <div
            className="px-8 pt-6 pb-8 mx-auto bg-white shadow-lg xl:w-5/6 lg:w-3/4 sm:w-5/6"
            ref={elementRef}
          >
            <div className="flex items-center justify-between">
              <BaseHeading level={4}>{name}</BaseHeading>
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
          .grayscale {
            filter: grayscale(1);
          }

          video {
            border: 0.5rem solid #9c2e2e;
          }

          @media (min-width: 640px) {
            video {
              border-width: 1.5rem;
            }
          }

          @media (max-width: 639px) {
            .project {
              margin-bottom: 2rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}
