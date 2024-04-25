import React, { useState } from "react";
import { Input } from "../../exports";
import authService from "../../firebase/firebaseAuthentication";
import { useDispatch } from "react-redux";
// import { login } from "../../firebase/firebaseAuthentication";
import { setDisplayAuthentication } from "../../store/handleStates";
import { signin } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function SignIn({ setDisplaySignIn, displaySignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [displaySignUp, setDisplaySignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displayAuthentication = useSelector(
    (state) => state.handleState.displayAuthentication
  );

  const login = async (data) => {
    try {
      setError("");
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(signin(userData));
          navigate("/");
        }
      }
      console.log("Session", session);
    } catch (error) {
      setError("Invalid credentials");
    }
  };
  const loginHandler = (e) => {
    const data = { email, password };
    e.preventDefault();
    login(data);
    // dispatch(setDisplayAuthentication(false));
  };

  return (
    <div className="absolute mt-5 flex flex-col items-center justify-center text-center md:right-40 bg-white max-h-fit px-10 py-20 rounded">
      <p
        className="absolute top-2 right-2"
        onClick={() => setDisplaySignIn(false)}
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
          Welcone Back!
        </h1>
        <p className="text-center text-sm tracking-wide leading-4 font-sans mb-5">
          Enter the valid email address and password to start reading.
        </p>
        <form className="w-5/8 flex flex-col gap-5" onSubmit={loginHandler}>
          <div>
            <label htmlFor="" className="text-base tracking-wide font-mono">
              Your Email
            </label>
            <Input
              className="outline-0 border-b-2 border-black bg-inherit p-1"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div>
            <label htmlFor="" className="text-base tracking-wide font-mono">
              Password
            </label>
            <Input
              className="outline-0 border-b-2 border-black bg-inherit p-1"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full border-2 bg-black text-white font-sans text-lg p-1 rounded-lg cursor-pointer tracking-widest"
          >
            Sign in
          </button>
        </form>
      </div>
      <p>{error && error}</p>
    </div>
  );
}

export default SignIn;
