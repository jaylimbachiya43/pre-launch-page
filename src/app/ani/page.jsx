"use client";
import React, { useRef } from "react";

const page = () => {
  const divRef = useRef();
  const secondDivRef = useRef();
  const forwardFlipDiv = () => {
    secondDivRef.current.classList.add("delay-700");
    divRef.current.classList.remove("delay-700");
    divRef.current.style.transform = "rotateY(90deg)";
    secondDivRef.current.classList.add("scale-110");
    divRef.current.classList.add("scale-90");
    secondDivRef.current.style.transform = "rotateY(0deg)";
  };

  const backwardFlipDiv = () => {
    divRef.current.classList.add("delay-700");
    divRef.current.style.transform = "rotateY(0deg)";
    secondDivRef.current.classList.remove("delay-700");
    secondDivRef.current.style.transform = "rotateY(90deg)";
  };

  return (
    <div className="w-full h-[100dvh] bg-blue-200 flex flex-col gap-5 justify-center items-center">
      <div className="relative w-1/2 aspect-video">
        <div
          ref={divRef}
          className="bg-blue-500 w-full h-full absolute top-0 left-0 rounded-lg flex justify-center items-center transition-all ease-in-out duration-700"
        >
          Division to flip
        </div>
        <div
          ref={secondDivRef}
          className="bg-blue-500 w-full h-full absolute top-0 left-0 rounded-lg flex justify-center items-center transition-all ease-in-out duration-700"
          style={{ transform: "rotateY(90deg)" }}
        >
          Second Div
        </div>
      </div>

      <button
        onClick={forwardFlipDiv}
        className="bg-blue-600 rounded-lg px-3 py-2 text-center w-1/3"
      >
        f flip
      </button>
      <button
        onClick={backwardFlipDiv}
        className="bg-blue-600 rounded-lg px-3 py-2 text-center w-1/3"
      >
        b flip
      </button>
    </div>
  );
};

export default page;
