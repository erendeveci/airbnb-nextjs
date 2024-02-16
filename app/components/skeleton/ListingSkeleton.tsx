import React from "react";
import Container from "../Container";

const ListingSkeleton = () => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="rounded-xl-md p-4  w-full mx-auto ">
          <div className="animate-pulse flex flex-col gap-2">
            <div className="w-[20%]">
              <div className="h-6 bg-slate-400 rounded-xl"></div>
            </div>
            <div className="w-[40%]">
              <div className="h-6 bg-slate-400 rounded-xl"></div>
            </div>

            <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
              <div className="h-full bg-slate-400 rounded-xl"></div>
            </div>

            <div className="w-[30%]">
              <div className="h-6 bg-slate-400 rounded-xl"></div>
            </div>

            <div className="w-[50%] h-20">
              <div className="h-full bg-slate-400 rounded-xl"></div>
            </div>

            <div className="w-[50%] h-40">
              <div className="h-full bg-slate-400 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingSkeleton;
