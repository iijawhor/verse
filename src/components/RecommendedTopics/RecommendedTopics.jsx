import React from "react";

function RecommendedTopics() {
  const recommendedTopics = [
    {
      name: "  Self Improvement",
      id: 1
    },
    {
      name: "Writing",
      id: 2
    },
    {
      name: " Front End",
      id: 3
    },
    { name: " Machine Learning", id: 4 },
    { name: "Productivity", id: 5 },
    { name: "Cryptocurrency", id: 6 },
    { name: "Back End", id: 7 },
    { name: "Full Stack Web Dev", id: 8 }
  ];
  return (
    <div className="">
      <h1 className="text-lg mb-3 tracking-wide font-semibold">
        Recommended topics
      </h1>
      <div className=" flex justify-betwwen flex-wrap gap-3 items-center">
        {recommendedTopics.map((topics) => (
          <li
            key={topics.id}
            className="list-none font-sans bg-gray-200 p-2 tracking-tight text-center text-sm  cursor-pointer rounded-lg w-fit"
          >
            {topics.name}
          </li>
        ))}
      </div>
      <p className="font-sm text-blue-400 cursor-pointer mt-3">
        see more topics...
      </p>
    </div>
  );
}

export default RecommendedTopics;
