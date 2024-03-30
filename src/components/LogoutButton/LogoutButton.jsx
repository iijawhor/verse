import React from "react";
import authService from "../../firebase/firebaseAuthentication";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logOut().then(() => {
      dispatch(logout());
      navigate("/signin");
    });
  };

  return (
    <button
      className="px-1 font-mono text-base font-thin cursor-pointer text-gray-400 rounded-lg hover:text-black duration-75 tracking-tight"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
