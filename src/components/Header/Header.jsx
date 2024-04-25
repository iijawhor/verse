import React from "react";
import { Container, Authentication } from "../../exports";
function Header({
  displaySignIn,
  displaySignUp,
  setDisplaySignIn,
  setDisplaySignUp
}) {
  const headerItems = [
    {
      name: "Our story",
      id: 1,
      authentication: true
    },
    {
      name: "Membership",
      id: 2,
      authentication: true
    },
    {
      name: "Write",
      id: 3,
      authentication: true
    },
    {
      name: "Sign in",
      id: 4,
      authentication: false
    },
    {
      name: "Sign up",
      id: 5,
      authentication: false
    }
  ];

  const handleNavigation = (name) => {
    if (name === "Sign in") {
      setDisplaySignUp(false);
      setDisplaySignIn(!displaySignIn);

      console.log(name);
    } else if (name === "Sign up") {
      setDisplaySignIn(false);
      setDisplaySignUp(!displaySignUp);
      console.log(name);
    }
  };
  return (
    <Container className="border-b-2 border-current fixed z-50 ">
      <header className="h-20 flex items-center justify-between w-full p-2 m-auto lg:w-5/6">
        <div className="">
          <h1 className="font-mono text-4xl  tracking-tighter font-semibold italic indent-0.5">
            Verse
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-3">
            {headerItems.map((headerList) => (
              <li
                className={`tracking-wide font-sens text-base cursor-pointer ${
                  headerList.authentication === true ? "hidden md:block" : ""
                }`}
                key={headerList.id}
                onClick={() => handleNavigation(headerList.name)}
              >
                {headerList.name}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setDisplaySignUp(!displaySignUp)}
            className=" border-2 border-current py-1 px-2 rounded-3xl cursor-pointer bg-black text-white font-mono text-base hidden md:block"
          >
            Get Started
          </button>
        </div>
      </header>
    </Container>
  );
}

export default Header;
