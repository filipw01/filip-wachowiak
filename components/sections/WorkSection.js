import React from "react";
import BaseHeading from "../base/BaseHeading";
import Work from "../Work";

export default function WorkSection({ work }) {
  return (
    <div className="">
      <BaseHeading className="mb-16 text-center">Work experience</BaseHeading>
      <div
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 34rem))" }}
        className="grid gap-8 justify-center"
      >
        {work.map((job) => {
          const {
            name,
            logo,
            position,
            startDate,
            endDate,
            description,
            technologies,
            company_url,
          } = job;
          return (
            <Work
              key={name}
              name={name}
              logo={logo}
              company_url={company_url}
              position={position}
              startDate={startDate}
              endDate={endDate}
              description={description}
              technologies={technologies}
            />
          );
        })}
      </div>
    </div>
  );
}
