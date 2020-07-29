import React from "react";

export default function BaseButton({ children, clickHandler, marginTop }) {
  return (
    <button
      className={`font-display bg-red text-white lg:text-lg sm:py-4 sm:px-8 px-4 py-3 hover:bg-black transition-colors ${
        marginTop ? `mt-${marginTop}` : ""
      }`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
