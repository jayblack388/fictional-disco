import React from "react";

const Page = ({ children, className = "" }) => (
  <div className={`Page ${className}`}>{children}</div>
);

export default Page;
