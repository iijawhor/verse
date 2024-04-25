import React, { useState } from "react";
import { Input } from "../../exports";
import authService from "../../firebase/firebaseAuthentication";
import { useDispatch } from "react-redux";
import { signin } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
function SignUp({ displaySignUp, setDisplaySignUp }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassord] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({ email, name, password });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signup = async (data) => {
    const userData = await authService.createUser(data);
    try {
      setError("");
      if (userData) {
        const user = authService.getCurrentUser();
        dispatch(signin(user));
        navigate("/");
      }
      console.log("User data", userData);
    } catch (error) {
      setError(error.message);
      console.log("Error in Signup", error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = { email, password, name };
    setUser(data);
    signup(data);

    const response = await fetch(
      "https://verse-3282b-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, password, email })
      }
    );
  };

  return (
    <div className="absolute mt-5 flex flex-col items-center justify-center text-center  md:right-40 bg-white max-h-fit px-10 py-10 rounded">
      <p
        className="absolute top-2 right-2"
        onClick={() => setDisplaySignUp(!displaySignUp)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </p>
      <div className="relative m-auto flex flex-col aitems-center justify-center gap-5">
        <h1 className="text-lg text-black font-semibold font-sans text-center tracking-wide">
          Sign Up with email.
        </h1>
        <p className="text-center text-sm tracking-wide leading-4 font-sans mb-5">
          Enter the valid email address to create VERSE account.
        </p>
        <form
          className="w-5/8 flex flex-col gap-5"
          onSubmit={handleSignup}
          method="POST"
        >
          <div>
            <label htmlFor="" className="text-lg tracking-wide font-mono">
              Enter name
            </label>
            <Input
              className="outline-0 border-b-2 border-black bg-inherit p-1"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div>
            <label htmlFor="" className="text-lg tracking-wide font-mono">
              Email
            </label>
            <Input
              required
              className="outline-0 border-b-2 border-black bg-inherit p-1"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="" className="text-lg tracking-wide font-mono">
              Password
            </label>
            <Input
              required
              className="outline-0 border-b-2 border-black bg-inherit p-1"
              onChange={(e) => setPassord(e.target.value)}
              value={password}
            />
          </div>
          <button
            className="w-full border-2 bg-black text-white font-sans text-lg p-1 rounded-lg cursor-pointer tracking-widest"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
      <p>{error && error}</p>
    </div>
  );
}

export default SignUp;
