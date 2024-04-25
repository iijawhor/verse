import React, { useEffect, useState } from "react";
import { Card } from "../../exports";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { deletePost } from "../../store/postSlice";
import authService from "../../firebase/firebaseAuthentication";
function Feed({ userImage = true }) {
  const feedPicks = [
    {
      name: "For you",
      id: 1
    },
    { name: "Following", id: 2 },
    { name: "Technology", id: 3 },
    { name: "Data Science", id: 4 },
    { name: "Programming", id: 5 }
  ];

  const [postActions, setPostAction] = useState(false);
  const [active, setActive] = useState(1);
  const [user, setUser] = useState({});

  const handleActive = (id) => {
    setActive(id);
  };

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((data) => {
        return data;
      })
      .then((user) => {
        setUser(user);
      });
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDeletePost = (id, author) => {
    if (author === user.email) {
      dispatch(deletePost(id));
    } else {
      alert("You are not authorized to delete this post.");
    }
  };
  const posts = useSelector((state) => state.postSlice.Posts);
  return (
    <div className="w-full relative px-2 py-5 h-screen overflow-auto">
      <div className="flex items-center">
        <p className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </p>
        <ul className="flex gap-5 items-center w-full overflow-auto p-3 border-b-2 border-gray-200 max-sm:gap-2 max-sm:display-none">
          {feedPicks.map((picks) => (
            <li
              key={picks.id}
              className={`${
                active === picks.id ? "text-blue-500 font-semibold" : ""
              }  style-none cursor-pointer text-gray-500 max-sm:text-xs`}
              onClick={() => handleActive(picks.id)}
            >
              {picks.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3 w-full mt-7">
        {posts.length === 0 ? (
          <button
            className="p-0 m-0 w-fit border-none outline-none text-blue-400 text-lg tracking-wide mt-0 text-center cursor-pointer"
            onClick={() => navigate("/create-story")}
          >
            Create first story...
          </button>
        ) : (
          posts.map((post) => (
            <div className="flex flex-col gap-2 border-b pb-3">
              <div className="flex items-center gap-2 cursor-pointer">
                {userImage ? (
                  <img
                    src="https://img.freepik.com/premium-photo/portrait-happy-young-casual-man-standing_171337-29744.jpg"
                    alt=""
                    srcset=""
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                <h3 className="text-base tracking-tight font-medium cursor-pointer">
                  Jawhor Ali Khan
                </h3>
                <p className="text-sm text-gray-600">Mar 12, 2024</p>
              </div>
              <div
                className="w-full cursor-pointer"
                onClick={() =>
                  navigate("/post-details", { state: { postDetails: post } })
                }
              >
                <Card
                  className=""
                  img={false}
                  title={post.storyTitle}
                  description={post.storyDetails}
                  id={post.postId}
                  user={post.authorEmail}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <p className="bg-gray-100 rounded-full p-2 text-xs font-medium text-gray-700 cursor-ppointer">
                    Development
                  </p>
                  <p className="text-sm tracking-tight text-gray-600">
                    5 min read
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </p>
                  <p
                    className="cursor-pointer"
                    onClick={() =>
                      handleDeletePost(post.postId, post.authorEmail)
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </p>
                  <p
                    className="cursor-pointer"
                    onClick={() => setPostAction(!postActions)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </p>
                </div>
                {postActions && (
                  <div className="absolute border right-2 p-2 bg-gray-100 rounded-lg mt-44">
                    <div className="border-b flex flex-col gap-1 pb-2 mb-1">
                      <p className="text-sm cursor-pointer">Follow author</p>
                      <p className="text-sm cursor-pointer">
                        Follow publication
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 mb-2">
                      <p className="text-sm cursor-pointer">Mute author</p>
                      <p className="text-sm cursor-pointer">Mute publication</p>
                    </div>
                    <p className="text-sm cursor-pointer text-red-600">
                      Report story...
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Feed;
