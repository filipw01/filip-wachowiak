import React, { useState, useRef, useEffect, createRef } from "react";
import BaseHeading from "./base/BaseHeading";
import { useElementBoundingRect } from "../hooks/useElementBoundingRect";

export default function Work({
  name,
  company_url,
  logo,
  position,
  startDate,
  endDate,
  description,
  technologies,
  testimonials,
}) {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const testimonialBackgroundRef = useRef(null);
  const testimonialPersonRef = useRef(null);
  const [activeTestimonialOffset, setActiveTestimonialOffset] = useState(0);
  const [testimonialRefs, setTestimonialRefs] = React.useState([]);
  const {
    elementRef,
    boundingRect,
    recalculateRect,
  } = useElementBoundingRect();

  useEffect(() => {
    // add or remove refs
    setTestimonialRefs((testimonialRefs) =>
      Array(testimonials.length)
        .fill()
        .map((_, i) => testimonialRefs[i] || createRef())
    );
  }, [testimonials]);

  useEffect(() => {
    recalculateRect();
    testimonialBackgroundRef.current.style.height = `${boundingRect.current.height}px`;

    testimonialPersonRef.current.style.transform = `translateX(${activeTestimonialOffset}px)`;
  }, [activeTestimonialIndex]);

  const changeTestimonial = (index) => {
    setActiveTestimonialIndex(index);
    const testimonialX = testimonialRefs[
      activeTestimonialIndex
    ].current.getBoundingClientRect().x;
    const newTestimonialX = testimonialRefs[
      index
    ].current.getBoundingClientRect().x;
    setActiveTestimonialOffset(
      activeTestimonialOffset + newTestimonialX - testimonialX
    );
  };

  return (
    <div className="px-4 py-6 bg-white shadow-lg sm:pb-16 sm:pt-12 sm:px-12 xl:px-20">
      <a
        className="block mb-4 sm:mb-12"
        href={company_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="mx-auto" src={logo} alt={name} />
      </a>
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <BaseHeading className="font-normal" level={3}>
            {position}
          </BaseHeading>
          <p className="mt-1 mb-4 text-xl font-normal uppercase lg:text-2xl">
            {startDate} - {endDate}
          </p>
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
            <div className="absolute w-full bg-white goo-filter">
              <div
                className="absolute w-1/3 h-56 transition-transform duration-300 ease-in-out lg:w-32 xl:w-40 bg-light-gray"
                ref={testimonialPersonRef}
              ></div>
              <div
                className="absolute z-0 w-full h-48 goo-big-rect bg-light-gray"
                ref={testimonialBackgroundRef}
              ></div>
            </div>

            {testimonials.map((testimonial, index) => (
              <a
                className="relative z-10 flex-shrink-0 w-1/3 p-2 cursor-pointer sm:p-6 md:p-2 xl:p-6"
                key={testimonial.name}
                ref={testimonialRefs[index]}
                onClick={() => changeTestimonial(index)}
              >
                <img
                  className="object-cover w-16 h-16 mx-auto mb-2 rounded-full shadow-lg pointer-events-none sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <p className="text-xs font-normal pointer-events-none sm:text-sm lg:text-md">
                  {testimonial.name}
                </p>
                <p className="text-xs pointer-events-none sm:text-sm lg:text-md">
                  {testimonial.position}
                </p>
              </a>
            ))}
          </div>
          <div
            className="relative z-10 px-12 pt-2 pb-2 lg:pt-6"
            ref={elementRef}
          >
            <img
              className="w-6 h-6 transform -translate-x-full translate-y-1/2"
              src="/images/quote.svg"
              alt=""
            />
            <p className="text-sm lf:text-md">
              {testimonials[activeTestimonialIndex].content}
            </p>
            <img
              className="w-6 h-6 ml-auto italic transform rotate-180 translate-x-full -translate-y-1/2"
              src="/images/quote.svg"
              alt=""
            />
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
