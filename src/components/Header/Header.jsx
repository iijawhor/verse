import React from "react";
import { Container } from "../../exports";
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
  return (
    <Container className="border-2 border-current fixed">
      <header className="h-20 flex items-center justify-between w-3/4 m-auto">
        <div className="">
          <h className="font-mono text-4xl  tracking-tighter font-semibold italic indent-0.5">
            Verse
          </h>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-3">
            {headerItems.map((headerList) => (
              <li
                className="tracking-wide font-sens text-base cursor-pointer"
                key={headerList.id}
              >
                {headerList.name}
              </li>
            ))}
          </ul>
          <button className=" border-2 border-current py-1 px-2 rounded-3xl cursor-pointer bg-black text-white font-mono text-base">
            Get Started
          </button>
        </div>
      </header>
    </Container>
  );
}

export default Header;
