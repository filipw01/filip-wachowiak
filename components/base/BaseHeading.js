import React from "react";

export default function BaseHeading({ children, level = 2, className }) {
  const Heading = `h${level}`;
  let css = `leading-tight ${className} `;
  switch (Number(level)) {
    case 1:
      css += "font-display lg:text-6xl text-5xl";
      break;

    case 2:
      css += "font-display lg:text-6xl text-5xl";
      break;

    case 3:
      css += "lg:text-5xl text-4xl";
      break;

    case 4:
      css += "lg:text-4xl text-3xl";
      break;

    default:
      css += "lg:text-3xl text-2xl";
      break;
  }
  return <Heading className={css}>{children}</Heading>;
}
