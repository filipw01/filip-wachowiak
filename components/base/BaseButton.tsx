import React from "react";

type Props = {
  children: React.ReactNode;
  clickHandler: () => void;
  className?: string;
};

export default function BaseButton({
  children,
  clickHandler,
  className,
}: Props) {
  return (
    <button
      className={`font-display bg-red text-white lg:text-lg sm:py-4 sm:px-8 px-4 py-3 hover:bg-black transition-colors ${
        className ?? ""
      }`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
