import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => (
    <div
      ref={ref}
      className={`container lg:px-16 md:px-12 px-8 mx-auto ${className ?? ""}`}
    >
      {children}
    </div>
  )
);
export default Container;
