import React, { useState } from "react";
import { Input, debounce } from "../../exports";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResult } from "../../store/searchResultSlice";
function Search() {
  const postData = useSelector((state) => state.postSlice.Posts);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const filterData = () => {
    return postData.filter((data) => {
      const storyTitle = data.storyTitle
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return storyTitle;
    });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchResult(filterData()));
    setResults(filterData());
  };
  return (
    <form
      action=""
      className="flex flex-col gap-3 items-center justify-center"
      onSubmit={handleSearch}
    >
      <div className="flex items-center gap-2 border-2 border-box rounded-lg px-1 max-sm:border-0">
        <Input
          className="px-1 py-1 text-start max-sm:hidden"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <p className="text-gray-400 cursor-pointer hover:text-black">
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </p>
      </div>
    </form>
  );
}

export default Search;
