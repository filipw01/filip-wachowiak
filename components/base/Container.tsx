import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Container = ({ children, className, id }: Props) => (
  <div
    id={id}
    className={`container lg:px-16 md:px-12 px-8 mx-auto ${className ?? ""}`}
  >
    {children}
  </div>
);
export default Container;
