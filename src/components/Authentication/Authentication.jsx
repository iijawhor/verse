import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayAuthentication } from "../../store/handleStates";
import { useNavigate } from "react-router-dom";
function Authentication({ title, googleTitle, facebookTitle, emailTitle }) {
  const displayAuthentication = useSelector(
    (state) => state.handleState.displayAutshentication
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="relative w-full rounded-lg p-2 opacity-1 z-10 bg-slate-50 max-sm:ml-3 max-sm:w-11/12 max-lg:ml-40 h-5/6 shadow-slate-500 pt-20 ">
      <div
        className="w-fit static float-right cursor-pointer absolute top-0 right-0"
        onClick={() =>
          dispatch(setDisplayAuthentication(!displayAuthentication))
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center m-auto relative h-full">
        <div className="flex items-center flex-col gap-10  relative m-auto ">
          <h1 className="text-3xl font-sans font-semibold tracking-widest ">
            Join Verse.
          </h1>
          <div className="flex flex-col gap-2">
            <button className="text-lg font-sans tracking-wide py-1 px-3 border-2 border-slate-500 rounded-full cursor-pointer">
              Sign up with Google
            </button>
            <button className="text-lg font-sans tracking-wide py-1 px-3 border-2 border-slate-500 rounded-full cursor-pointer">
              Sign up with Facebook
            </button>
            <button
              onClick={() => navigate("/signin")}
              className="text-lg font-sans tracking-wide py-1 px-3 border-2 border-slate-500 rounded-full cursor-pointer"
            >
              Sign up with Email
            </button>
            <p className="mt-5 text-medium font-sans tracking-wide">
              Already have an account?
              <button className="text-lg cursor-pointer text-green-600 font-semibold">
                Sign in
              </button>
            </p>
          </div>
          <p className="w-4/5 text-center text-sm mt-20">
            Click “Sign in” to agree to Verse's Terms of Service and acknowledge
            that Vers's Privacy Policy applies to you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
