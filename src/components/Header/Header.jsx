import React, { useState } from "react";
import { Container, Authentication, AuthenticationPage } from "../../exports";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayAuthentication } from "../../store/handleStates";
function Header() {
  const headerItems = [
    {
      name: "Our story",
      id: 1,
      authentication: false
    },
    {
      name: "Membership",
      id: 2,
      authentication: false
    },
    {
      name: "Write",
      id: 3,
      authentication: false
    },
    {
      name: "Sign in",
      id: 4,
      authentication: false
    }
  ];
  const displayAuthentication = useSelector(
    (state) => state.handleState.displayAuthentication
  );

  const dispatch = useDispatch();
  const handleNavigation = (name) => {
    if (name === "Sign in")
      dispatch(setDisplayAuthentication(!displayAuthentication));
  };
  return (
    <Container className="border-2 border-current fixed z-50 ">
      <header className="h-20 flex items-center justify-between w-3/4 m-auto max-sm:w-full max-sm:pl-5 max-sm:pr-5 max-sm:w-full">
        <div className="">
          <h className="font-mono text-4xl  tracking-tighter font-semibold italic indent-0.5">
            Verse
          </h>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-3 max-sm:hidden">
            {headerItems.map((headerList) => (
              <li
                className="tracking-wide font-sens text-base cursor-pointer"
                key={headerList.id}
                onClick={() => handleNavigation(headerList.name)}
              >
                {headerList.name}
              </li>
            ))}
          </ul>
          <button
            onClick={() =>
              dispatch(setDisplayAuthentication(!displayAuthentication))
            }
            className=" border-2 border-current py-1 px-2 rounded-3xl cursor-pointer bg-black text-white font-mono text-base"
          >
            Get Started
          </button>
        </div>
      </header>
    </Container>
  );
}

export default Header;
