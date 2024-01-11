"use client";
import React, { useRef } from "react";
import Styles from "./pageStyle.module.css"
const page = () => {
  const divRef = useRef();
  const secondDivRef = useRef();
  const onNextButtonClick = () => {
    divRef.current.classList.remove(Styles.backwardDivAni)
    secondDivRef.current.classList.remove(Styles.backwardSecondDivAni)
    divRef.current.classList.add(Styles.forwardDivAni)
    secondDivRef.current.classList.add(Styles.forwardSecondDivAni)
    secondDivRef.current.style.top = 0
  };

  const onBackButtonClick = () => {
    divRef.current.classList.remove(Styles.forwardDivAni)
    secondDivRef.current.classList.remove(Styles.forwardSecondDivAni)
    divRef.current.classList.add(Styles.backwardDivAni)
    secondDivRef.current.classList.add(Styles.backwardSecondDivAni)
    secondDivRef.current.style.top = "100%"

  };

  return (
    <div className="w-full h-[100dvh] bg-blue-200 flex flex-col gap-5 justify-center items-center">
      <div className="relative w-1/2 aspect-video overflow-hidden">
        <div
          ref={divRef}
          className={Styles.fdiv}
        >
          Division to flip
        </div>
        <div
          ref={secondDivRef}
          className={Styles.secondDiv}
        >
          Second Div
        </div>
      </div>

      <button
        onClick={onNextButtonClick}
        className="bg-blue-600 rounded-lg px-3 py-2 text-center w-1/3"
      >
        next
      </button>
      <button
        onClick={onBackButtonClick}
        className="bg-blue-600 rounded-lg px-3 py-2 text-center w-1/3"
      >
        back
      </button>
    </div>
  );
};

export default page;
