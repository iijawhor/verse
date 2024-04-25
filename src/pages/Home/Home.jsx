import React from "react";
import { useSelector } from "react-redux";
import { Container, Feed, Widgets } from "../../exports";
function Home() {
  const result = useSelector((state) => state.searchResult.searchResult);
  console.log("results", result);
  return (
    <Container>
      <div className="relative h-screen m-auto lg:w-4/5 flex lg:gap-10 p-2 pt-14 max-sm:w-full max-sm:px-1 md:w-full md:gap-2 border-red-400">
        <div className=" w-4/5 max-h-full max-sm:w-full  border-r-2 border-slate-100 flex flex-col gap-4">
          <Feed />
        </div>
        <div className="relative w-2/6 max-sm:hidden pt-8">
          <Widgets />
        </div>
      </div>
    </Container>
  );
}
export default Home;
