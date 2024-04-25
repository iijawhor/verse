import React, { useEffect, useState } from "react";
import authService from "./firebase/firebaseAuthentication";
import { Banner, Navbar, Home } from "./exports";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, signin } from "./store/authSlice";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
