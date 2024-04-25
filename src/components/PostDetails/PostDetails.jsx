import React, { useEffect, useRef, useState } from "react";
import { Container, CommentSection, Header, Navbar } from "../../exports";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addLikes } from "../../store/postSlice";
function PostDetails() {
  const modules = {
    toolbar: [["bold", "italic"]]
  };
  const formats = ["bold", "italic"];
  const [moreActions, setMoreActions] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const postDetail = location.state.postDetails;
  const { comments } = postDetail;
  const [displayCommmentSection, setDisplayCommentSection] = useState(false);
  const { storyTitle, storyDetails, authorEmail } = postDetail;

  const handleLikes = (postId) => {
    dispatch(addLikes({ postId }));
  };
  return (
    <div className="h-screen border border-red-400 postDetail overflow-auto w-full">
      <Navbar />
      <div className="border-box pt-20 w-1/2 realtive m-auto mb-20 max-sm:w-full max-sm:pt-16 flex flex-col gap-5 h-full">
        {displayCommmentSection && (
          <div
            id="postDetails"
            className="fixed right-0 width-50 border p-0 h-screen top-0 z-10 bg-white shadow overflow-scroll w-96"
          >
            <CommentSection
              modules={modules}
              formats={formats}
              comments={comments}
              postId={postDetail.postId}
              displayCommmentSection={displayCommmentSection}
              setDisplayCommentSection={setDisplayCommentSection}
            />
          </div>
        )}
        <div className="flex flex-col gap-5 border-box p-1">
          <h1 className="text-4xl font-light font-sans max-sm:text-xl">
            {storyTitle}
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex gap-2 items-center border-b pb-2 w-full">
              <img
                src="https://wallpapercave.com/wp/p3HjAFU.jpg"
                className="h-10 w-10 rounded-full object-cover cursor-pointer"
                alt=""
              />
              <div className="flex flex-col gap-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg tracking-tight font-sans font-semibold cursor-pointer max-sm:text-sm">
                    Jawhor Ali Khan
                  </h2>
                  <p className="text-blue-500 tracking-tighter cursor-pointer font-semibold text-sm">
                    Follow
                  </p>
                </div>
                <div className=" flex items-center gap-2 max-sm:flex-col max-sm:items-start max-sm:gap-0">
                  <p className="text-sm text-gray-500 max-sm:text-xs">
                    Published by
                    <span className="text-black cursor-pointer font-semibold text-gray-500 ml-1">
                      Jawhor Ali Khan
                    </span>
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500">5 min read</p>
                    <p className="text-sm text-gray-500">Mar 12,2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-5">
              <p className="text-sm flex items-center gap-1 cursor-pointer">
                <span onClick={() => handleLikes(postDetail.postId)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                  </svg>
                </span>
                <span className="text-gray-500 ">{postDetail.likes}</span>
              </p>
              <p
                className="flex items-center gap-1 cursor-pointer"
                onClick={() =>
                  setDisplayCommentSection(!displayCommmentSection)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
                <span className="text-gray-500 ">{comments.length}</span>
              </p>
            </div>
            <div className="flex items-center gap-5">
              <p className="cursor-pointer flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </p>
              <p className="cursor-pointer flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                  />
                </svg>
              </p>
              <p className="cursor-pointer flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="h-2/6 w-full flex flex-col gap-2">
          {/* <img
            src="https://wallpapercave.com/wp/p3HjAFU.jpg"
            alt=""
            className="rounded-lg h-96 w-full object-cover max-sm:h-40 max-sm:rounded-none"
          /> */}

          <p className="text-normal  tracking-wide text-serif">
            {storyDetails}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
