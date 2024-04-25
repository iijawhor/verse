import React from "react";

function FollowSuggestion() {
  return (
    <div className="relative">
      <h1 className="text-lg font-semibold tracking-wide mb-3">
        Whom to follow
      </h1>
      <div className="flex flex-col gap-3">
        <div className="relative flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="flex items-center cursor-pointer">
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
              <span className="text-base font-semibold tracking-wide">
                Jawhor Ali Khan
              </span>
            </p>
            <button className="text-blue-400 font-light cursor-pointer">
              Follow
            </button>
          </div>
          <div className="">
            <p className="text-xs tracking-wide font-semibold text-gray-500">
              4k+ followers
            </p>
            <p className="text-sm text-wrap">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm text-blue-400 cursor-pointer mt-3">
        see more suggestions...
      </p>
    </div>
  );
}

export default FollowSuggestion;
