import React from "react";
import BaseHeading from "./base/BaseHeading";

export default function Work({
  name,
  company_url,
  logo,
  position,
  startDate,
  endDate,
  description,
  technologies,
}) {
  return (
    <div className="px-6 py-6 bg-white shadow-lg sm:pb-16 sm:pt-12 sm:px-12 xl:px-20">
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <div className="flex flex-col items-center text-center">
            <div>
              <a
                className="self-center block mb-4"
                href={company_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="mx-auto h-8" src={logo} alt={name} />
              </a>
              <BaseHeading className="font-normal" level={3}>
                {position}
              </BaseHeading>
              <p className="mt-1 mb-6 text-xl font-normal uppercase lg:text-2xl">
                {startDate} - {endDate}
              </p>
            </div>
          </div>
          <p className="text-sm lg:text-md">{description}</p>
          <div className="flex justify-center mt-6">
            {technologies.map((technology) => (
              <img
                key={technology.name}
                className="block h-8 mx-4 lg:mx-6 lg:h-10"
                src={technology.icon}
                alt={technology.name}
              />
            ))}
          </div>
        </div>
        <div className="relative hidden w-full mt-12 text-center md:mt-0 md:ml-4 md:w-1/2 lg:ml-10">
          <div className="flex justify-between text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="w-0 h-0"
            >
              <filter id="fancy-goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>{`
        .goo-filter {
          filter: url("#fancy-goo");
        }

        .goo-big-rect {
          top: 160px;
        }

        @media (min-width: 390px) {
          .goo-big-rect {
            top: 140px;
          }
        }

        @media (min-width: 460px) {
          .goo-big-rect {
            top: 125px;
          }
        }

        @media (min-width: 640px) {
          .goo-big-rect {
            top: 200px;
          }
        }

        @media (min-width: 768px) {
          .goo-big-rect {
            top: 190px;
          }
        }

        @media (min-width: 1024px) {
          .goo-big-rect {
            top: 190px;
          }
        }

        @media (min-width: 1265px) {
          .goo-big-rect {
            top: 220px;
          }
        }
      `}</style>
    </div>
  );
}
