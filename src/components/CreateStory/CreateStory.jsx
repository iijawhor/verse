import React, { useEffect, useState } from "react";
import { Container, Logo, Input, TextEditor } from "../../exports";
import { addPost } from "../../store/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../../firebase/firebaseAuthentication";
function CreateStory() {
  const bottomAnimation = [
    {
      title: "Select text to change formatting, add headers, or create links.",
      description: "Writing on Medium",
      id: 1
    },
    {
      title: "Add images and other media by starting a new line and clicking ",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Fugit tempore debitis alias hic consectetur, harum voluptates,
    `,
      id: 2
    },
    {
      title:
        "Include content from Medium or other sites by pasting a link and pressing Enter.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      id: 3
    },
    {
      title:
        "You can mention anyone in your story by typing @ and then their name. They will get a notification after you publish.",
      description: "provident impedit facilis eligendi modi maxime labore et.",
      id: 4
    },
    {
      title:
        "Want another pair of eyes on your story? Click Share for a link you can send to friends or editors.",
      id: 5
    },
    {
      title:
        "To customize how your story is distributed and presented to readers, click More settings in the 3-dot menu.",
      id: 6
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bottomAnimation.length);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, bottomAnimation]);
  const [storyTitle, setStoryTitle] = useState("");
  const [storyDetails, setStoryDetails] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const modules = {
    toolbar: [
      [
        { font: ["sans-serif", "monospace", "Sans"] },
        { size: ["small", "normal", "large", "huge"] }
      ],
      ["bold", "italic", "underline", "strike"],
      [
        {
          color: [
            "black",
            "blue",
            "red",
            "pink",
            "yellow",
            "darkgray",
            "gray",
            "green"
          ]
        },
        { background: ["green", "blue", "gray"] }
      ],

      [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],

      ["link", "image"]
    ]
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block"
  ];
  useEffect(() => {
    (async () => {
      await authService
        .getCurrentUser()
        .then((data) => {
          return data;
        })
        .then((userData) => setUser(userData));
    })();
  }, []);
  // console.log(user);
  const handlePublish = (e) => {
    e.preventDefault();
    if (storyTitle && storyDetails !== "") {
      dispatch(
        addPost({
          storyTitle: storyTitle,
          storyDetails: storyDetails.replace(/<[^>]+>/g, ""),
          postId: Date.now(),
          authorId: user?.uid,
          authorName: "Jawhor Ali Khan",
          authorEmail: user.email,
          comments: [],
          likes: 0
        })
      );
      navigate("/");
    } else {
      return;
    }
  };

  return (
    <Container className="relative bg-white h-screen  w-full flex- flex-col">
      <header className="relative w-full flex justify-between border  md:px-5 md:py-3 md:wfull ">
        <div className=" flex items-center gap-5">
          <Logo />
          <p>Draft in Jawhorali</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePublish}
            className={`py-0 px-2 rounded-lg cursor-pointer bg-gray-100 text-blue-300 font-mono ${
              storyTitle || storyDetails !== "" ? "text-blue-500" : ""
            } `}
            disabled={storyTitle && storyDetails === ""}
          >
            Publish
          </button>
          <p className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </p>
          <p className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </p>
          <p className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </p>
        </div>
      </header>
      <div className="p-2 sm:w-3/4 lg:w-3/6 relative m-auto flex flex-col gap-2 mb-5 mt-5">
        <form
          action=""
          className="w-full relative flex flex-col gap-3"
          onSubmit={handlePublish}
        >
          <div className="w-full relative flex items-center gap-2 ">
            <Input
              className="rounded pl-2 h-12 text-start placeholder:text-4xl font-normal font-sans text-xl tracking-wide placeholder:font-medium placeholder:font-serif"
              placeholder="Title"
              onChange={(e) => setStoryTitle(e.target.value)}
              value={storyTitle}
            />
          </div>
          <div className="w-full relative flex items-center gap-2 ">
            <TextEditor
              modules={modules}
              formats={formats}
              className="w-full text-normal"
              placeholder="Write your story..."
              onChange={(e) => setStoryDetails(e)}
              value={storyDetails}
            />
          </div>
          <button type="submit" />
        </form>
      </div>

      <div className="absolute w-full bottom-0 p-2 h-64 flex items-center justify-center bg-slate-100">
        <div className="relative flex flex-col gap-4 min-h-full items-center justify-center translte-x-full md:pl-20 md:pr-20">
          <button
            className={`absolute left-0 text-gray-500 cursor-pointer hidden md:block`}
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className={`absolute right-0 text-gray-500 cursor-pointer hidden md:block`}
            disabled={currentIndex >= bottomAnimation.length - 1}
            onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-19 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div className="relative flex flex-col gap-3 md:min-w-96 md:max-w-96 w-full">
            <h3 className="text-center tracking-tight duration-200">
              {bottomAnimation[currentIndex].title}
            </h3>
            <p className="w-full text-center text-xs font-serif tracking-wide">
              {bottomAnimation[currentIndex].description}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CreateStory;
