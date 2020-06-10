import React from "react";

const Container = React.forwardRef(({ children, className }, ref) => (
  <div
    ref={ref}
    className={`container lg:px-16 md:px-12 px-8 mx-auto ${className ?? ""}`}
  >
    {children}
  </div>
));
export default Container;
