import React, { useEffect, useState } from "react";
import authService from "../../firebase/firebaseAuthentication";
import { useSelector } from "react-redux";
import { Loading } from "../../exports";
function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        setUser(userData);
      }
    });
  }, [user]);
  if (!user) {
    return <Loading className="absolute top-40" />;
  }

  return (
    <div>
      <h1>userLogged in</h1>
    </div>
  );
}

export default Home;
