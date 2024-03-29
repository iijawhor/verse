import React from "react";

function Banner() {
  return (
    <div
      className="pt-0 bg-yellow-500 h-screen flex items-center
    "
    >
      <div className="pl-40 p-5 flex flex-col gap-8">
        <h1 className="font-mono text-7xl tracking-tighter font-extrabold	">
          Stay curious.
        </h1>
        <p className="font-mono text-2xl tracking-tighter leading-7">
          Discover stories, thinking, and experties <br /> from writers on any
          topic.
        </p>
        <button className="border-black-600 py-1 px-3 rounded-3xl cursor-pointer bg-black text-white font-mono text-lg w-fit">
          Start reading
        </button>
      </div>
    </div>
  );
}

export default Banner;
