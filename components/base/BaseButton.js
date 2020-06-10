import React from "react";

export default function BaseButton({ children, clickHandler, marginTop }) {
  return (
    <button
      className={`font-display bg-red text-white lg:text-lg py-4 px-8 ${
        marginTop ? `mt-${marginTop}` : ""
      }`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
