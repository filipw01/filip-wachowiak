import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function TearDown({ children }: Props) {
  return (
    <div className="tear-down-parent">
      <div className="pb-24 bg-seashell tear-down">{children}</div>
      <style jsx>
        {`
          .tear-down-parent {
            filter: drop-shadow(0px 1.5rem 1.5rem rgba(0, 0, 0, 0.1));
          }

          .tear-down {
            clip-path: polygon(
              0px 0px,
              100% 0px,
              100% 100%,
              90% calc(100% - 2.5rem),
              75% calc(100% - 1rem),
              65% calc(100% - 2.5rem),
              55% calc(100% - 4.5rem),
              38% 100%,
              20% calc(100% - 2.5rem),
              8% 100%,
              0 calc(100% - 2.5rem)
            );
          }
        `}
      </style>
    </div>
  );
}
