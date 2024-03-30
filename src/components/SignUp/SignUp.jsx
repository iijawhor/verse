import React, { useState } from "react";
import { Input } from "../../exports";
import authService from "../../firebase/firebaseAuthentication";
import { useDispatch } from "react-redux";
import { signin } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
function SignUp() {
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
        navigate("/home");
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
    <div className="relative flex flex-col items-center justify-center text-center h-full">
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
        <p className="font-sans tracking-wide text-sm ">
          Already have an account?
          <button className="text-green-600 font-semibold cursor-pointer font-mono ml-1">
            Sign in
          </button>
        </p>
      </div>
      <p>{error && error}</p>
    </div>
  );
}

export default SignUp;
