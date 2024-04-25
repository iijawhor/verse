import React from "react";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate("/")}>
        <p className="text-3xl tracking-wide font-mono font-semibold cursor-pointer max-sm:hidden block italic">
          Verse
        </p>
        <p className="text-3xl italic tracking-wide font-mono font-semibold cursor-pointer max-sm:block hidden">
          V
        </p>
      </div>
    </>
  );
}

export default Logo;
