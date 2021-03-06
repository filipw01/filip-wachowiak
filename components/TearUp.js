import React from "react";

export default function TearUp({ children }) {
  return (
    <div className="tear-up-parent">
      <div className="pt-24 bg-seashell tear-up">{children}</div>
      <style jsx>
        {`
          .tear-up-parent {
            // Fix safari performance issue by creating new composition layer
            transform: translateZ(0);
            filter: drop-shadow(0px -1.5rem 1.5rem rgba(0, 0, 0, 0.1));
          }

          .tear-up {
            clip-path: polygon(
              0 2rem,
              8% 4.5rem,
              20% 2rem,
              38% 4.5rem,
              55% 0rem,
              65% 2rem,
              75% 3.5rem,
              90% 2rem,
              100% 4.5rem,
              100% 100%,
              0px 100%
            );
          }
        `}
      </style>
    </div>
  );
}
