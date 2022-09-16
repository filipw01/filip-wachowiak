import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function BaseHeading({ children, level = 2, className }: Props) {
  const Heading = `h${level}` as keyof JSX.IntrinsicElements;
  let css = `leading-tight ${className} `;
  switch (Number(level)) {
    case 1:
      css += "font-display lg:text-6xl sm:text-5xl text-4xl";
      break;

    case 2:
      css += "font-display lg:text-6xl sm:text-5xl text-4xl";
      break;

    case 3:
      css += "lg:text-5xl sm:text-4xl text-3xl";
      break;

    case 4:
      css += "lg:text-3xl sm:text-2xl text-xl";
      break;

    default:
      css += "lg:text-2xl sm:text-xl text-xl";
      break;
  }
  return <Heading className={css}>{children}</Heading>;
}
