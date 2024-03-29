import React from "react";

function Container({ className, children }) {
  return <div className={`w-full p-0 m-0 ${className}`}>{children}</div>;
}

export default Container;
