import React, { useMemo, useRef, useState } from "react";
import TextEditor from "../TextEditor/TextEditor";
import { addComment } from "../../store/postSlice";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/Input";
function CommentSection({
  setDisplayCommentSection,
  postId,
  comments,
  modules
}) {
  const [response, setResponse] = useState("");
  const dispatch = useDispatch();

  const handleComments = (e) => {
    e.preventDefault();
    dispatch(
      addComment({
        postId: postId,
        comment: {
          thought: response,
          user: "Anonymous"
        }
      })
    );
    setResponse("");
  };
  return (
    <div className="pl-3 w-full h-screen overflow-auto ">
      <div className="flex items-center justify-between mt-5">
        <p className="text-2xl font-semibold">
          Responses <span> &#x28; {comments.length} &#x29;</span>
        </p>
        <p
          onClick={() => setDisplayCommentSection(false)}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </p>
      </div>
      <div className=" p-2 rounded-lg shadow mt-2 flex flex-col gap-3 max-h-screen">
        <div className="p-2 flex flex-col gap-3 rounded relative border">
          <div className="rounded-full flex items-center gap-2 cursor-pointer w-fit">
            <img
              src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713830400&semt=sph"
              alt=""
              className="h-10 w-10 rounded-full object-cover "
            />
            <h2 className="tracking-tight">Jawhor Ali Khan</h2>
          </div>
          <form
            action=""
            className="w-full flex flex-col items-end"
            onSubmit={handleComments}
          >
            <Input
              onChange={(e) => setResponse(e.target.value)}
              value={response}
              placeholder="What are your thoughts..."
              className="px-2 py-2 bg-gray-200 mb-2 rounded"
            />
            <button
              type="submit"
              className="flex relative right-0 px-2 py-1 ml-2 w-fit rounded-lg bg-blue-100 text-center font-serif cursor-pointer hover:bg-blue-400 hover:text-white transition"
            >
              Respond
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-0 overflow-auto h-screen">
          {comments.map((comment) => (
            <div className="flex flex-col relative items-start gap-0 mt-1 ml-1">
              <div className="flex gap-1">
                <img
                  src="https://w0.peakpx.com/wallpaper/152/37/HD-wallpaper-decisions-handsome-man-thinking-man-smoke-black.jpg"
                  alt="hello"
                  className="h-10 w-10 border rounded-full bg-center object-center"
                />
                <h3 className="font-medium mb-0">Anonymous</h3>
              </div>
              <p className="text-base font-sans ml-12 mt-0 pt-0 relative bottom-5 text-wrap">
                {comment.comment.thought.replace(/<[^>]+>/g, "")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
