import React from "react";

function Card({ title, description, img }) {
  const postDescription = description.slice(0, 250) + "...";

  return (
    <div className="flex gap-3 items-center justify-between max-sm:flex-col">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <h1 className="text-base font-light font-serif ">
          {description.length >= 250 ? postDescription : description}
        </h1>
      </div>
      {img && (
        <div className="w-64 h-28 border rounded-lg max-sm:full max-sm:h-72">
          <img
            src="https://i.pinimg.com/originals/a9/9e/34/a99e34c48753fa2cf4dc04a6b01f746d.jpg"
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default Card;
