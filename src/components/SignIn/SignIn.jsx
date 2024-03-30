import React, { useState } from "react";
import { Input } from "../../exports";
import authService from "../../firebase/firebaseAuthentication";
import { useDispatch } from "react-redux";
// import { login } from "../../firebase/firebaseAuthentication";
import { signin } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async (data) => {
    try {
      setError("");
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        dispatch(signin(userData));
        navigate("/home");
      }
      console.log("Session", session);
    } catch (error) {
      setError("Invalid credentials");
    }
  };
  const loginHandler = (e) => {
    e.preventDefault();
    const data = { email, password };
    login(data);
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center h-full">
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
            />
          </div>
          <button className="w-full border-2 bg-black text-white font-sans text-lg p-1 rounded-lg cursor-pointer tracking-widest">
            Sign in
          </button>
        </form>
        <p className="font-sans tracking-wide text-sm ">
          Don't have an account?
          <button
            className="text-green-600 font-semibold cursor-pointer font-mono ml-1"
            type="submit"
          >
            Sign up
          </button>
        </p>
      </div>
      <p>{error && error}</p>
    </div>
  );
}

export default SignIn;
