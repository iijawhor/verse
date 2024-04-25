import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication }) {
  const [loading, setLaoding] = false;
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && !authStatus) {
      navigate("/banner");
    } else if (!authentication && authStatus) {
      navigate("/");
    }
  }, [loading, navigate, authStatus]);

  return loading ? <h1>Loading....</h1> : <>{children}</>;
}

export default AuthLayout;
