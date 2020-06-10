import React from "react";
import BaseHeading from "../base/BaseHeading";
import Work from "../Work";

export default function WorkSection({ work }) {
  return (
    <div>
      <BaseHeading className="mb-16 text-center">Work experience</BaseHeading>
      {work.map((job) => {
        const {
          name,
          logo,
          position,
          startDate,
          endDate,
          description,
          technologies,
          testimonials,
        } = job;
        return (
          <Work
            key={name}
            name={name}
            logo={logo}
            position={position}
            startDate={startDate}
            endDate={endDate}
            description={description}
            technologies={technologies}
            testimonials={testimonials}
          />
        );
      })}
    </div>
  );
}
