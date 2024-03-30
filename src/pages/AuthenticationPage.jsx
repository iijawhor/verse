import React from "react";
import { Authentication, SignIn, SignUp } from "../exports";
import { Outlet } from "react-router-dom";
function AuthenticationPage() {
  return (
    <div className="absolute w-3/6  ml-80 rounded-lg p-2 opacity-1 z-10 bg-slate-50 max-sm:ml-3 max-sm:w-11/12 max-lg:ml-40 h-5/6 shadow-slate-500 mt-20">
      <SignUp />
    </div>
  );
}

export default AuthenticationPage;
