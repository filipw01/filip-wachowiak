import React from "react";
import BaseHeading from "./base/BaseHeading";
import { Work as WorkType } from "../pages";

type Props = {
  name: string;
  company_url: string;
  logo: string;
  position: WorkType["position"];
  technologies: { icon: string; name: string }[];
};

export default function Work({
  name,
  company_url,
  logo,
  position,
  technologies,
}: Props) {
  const start = position[position.length - 1].start;
  const end = position[0].end;
  return (
    <>
      <div className="py-6 flex sm:flex-col gap-x-4 gap-y-2 sm:gap-0 justify-between flex-wrap">
        <a
          className="block sm:mb-4 w-48"
          href={company_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="max-w-full max-h-10"
            src={logo}
            alt={`${name} logo`}
          />
        </a>
        <div>
          <p className="text-md font-normal uppercase lg:text-lg">
            {dateToYearMonth(start)} - {dateToYearMonth(end)}
          </p>
          <p className="sm:mb-2 text-gray">({timeElapsed(start, end)})</p>
        </div>
        <div>
          <p className="mb-2">Technologies:</p>
          <div className="flex gap-4 flex-wrap justify-start">
            {technologies.map(({ icon, name }) => (
              <img
                key={name}
                className="block h-6"
                src={icon}
                alt={name}
                title={name}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 sm:px-10 bg-white shadow-lg flex flex-col gap-4">
        {position.map(({ description, end, name, start }) => {
          return (
            <div key={name}>
              <BaseHeading level={5} className="mb-1">
                {name}
              </BaseHeading>
              <p className="text-gray mb-1">
                {dateToYearMonth(start)} - {dateToYearMonth(end)} (
                {timeElapsed(start, end)})
              </p>
              <p className="text-md lg:text-md">{description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

const yearMonthStringToDate = (date: string) => {
  if (date === "Present") {
    return new Date();
  }
  return new Date(`${date}-01T00:00:00`);
};

const timeElapsed = (start: string, end: string) => {
  const startDate = yearMonthStringToDate(start);
  const endDate = yearMonthStringToDate(end);
  const timeDiff = endDate.getTime() - startDate.getTime();
  const monthsDiff = Math.ceil(timeDiff / (1000 * 3600 * 24 * 30));
  if (monthsDiff < 12) {
    return `${monthsDiff} months`;
  }
  const yearsDiff = Math.floor(monthsDiff / 12);
  const monthsLeft = monthsDiff % 12;
  const yearsString = yearsDiff === 1 ? "year" : "years";
  const monthsString = monthsLeft === 1 ? "month" : "months";
  if (monthsLeft === 0) {
    return `${yearsDiff} ${yearsString}`;
  }
  return `${yearsDiff} ${yearsString} ${monthsLeft} ${monthsString}`;
};

const dateToYearMonth = (date: string) => {
  if (date === "Present") return date;
  const d = yearMonthStringToDate(date);
  const shortMonthName = d.toLocaleString("default", { month: "short" });
  return `${shortMonthName} ${d.getFullYear()}`;
};
