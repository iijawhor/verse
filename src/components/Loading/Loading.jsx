import React from "react";

function Loading({ className }) {
  return (
    <div
      className={`relative flex flex-col jutify-center items-center ${className}`}
    >
      <div className="relative border-2 border-dashed border-black rounded-full border-x-7 border-y-7 h-8 w-8 m-auto transirtion-all duration-75 ease-in-out animate-spin"></div>
    </div>
  );
}

export default Loading;
