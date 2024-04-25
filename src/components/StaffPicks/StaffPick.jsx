import React from "react";
function StaffPick() {
  return (
    <div className="flex flex-col p-1">
      <h2 className="text-lg font-semibold tracking-wide mb-2">Staff Picks</h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-0">
          <div className="flex items-center gap-1 items-center font-medium cursor-pointer">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </p>
            <h2 className="text-sm font-base">Jawhor Ali Khan</h2>
          </div>
          <div className="text-base font-bold tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        {/* first post */}
        <div className="flex flex-col gap-0">
          <div className="flex items-center gap-1 items-center font-medium cursor-pointer">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </p>
            <h2 className="text-sm font-base">Jawhor Ali Khan</h2>
          </div>
          <div className="text-base font-bold tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
      {/* picks container */}
      <p className="text-blue-400 cursor-pointer mt-3">see the full list...</p>
    </div>
  );
}

export default StaffPick;
