"use client";
import React, { useRef } from "react";
import Styles from "./pageStyle.module.css";
import Footer from "@/components/Footer";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import SubscribeForm from "@/components/Flipcard";

const page = () => {
  const divRef = useRef();
  const secondDivRef = useRef();

  const onNextButtonClick = () => {
    divRef.current.classList.remove(Styles.backwardDivAni);
    secondDivRef.current.classList.remove(Styles.backwardSecondDivAni);
    divRef.current.classList.add(Styles.forwardDivAni);
    secondDivRef.current.classList.add(Styles.forwardSecondDivAni);
    secondDivRef.current.style.top = 0;
  };

  const onBackButtonClick = () => {
    divRef.current.classList.remove(Styles.forwardDivAni);
    secondDivRef.current.classList.remove(Styles.forwardSecondDivAni);
    divRef.current.classList.add(Styles.backwardDivAni);
    secondDivRef.current.classList.add(Styles.backwardSecondDivAni);
    secondDivRef.current.style.top = "100%";
  };

  return (
    <div className="w-full h-full bg-blue-200 flex flex-col gap-5 justify-center items-center">
      <div className="relative w-full h-full overflow-hidden min-h-dvh">
        <div ref={divRef} className={Styles.fdiv}>
          {/* <video
            autoPlay="autoplay"
            loop="loop"
            muted
            className="object-contain"
            src="/videos/Fleurveda_Final.mp4"
          ></video> */}
          {/* <button
            onClick={onNextButtonClick}
            className="bg-blue-600 rounded-lg px-3 py-2 text-center w-1/3 absolute bottom-0 left-1/2 -translate-x-1/2 z-40"
          >
            next
          </button> */}
          {/* <div className="absolute bottom-0 right-0 w-full h-fit z-30">
            <footer className="bg-black text-white p-4">
              <div className="container w-full text-right">
                <p className="text-sm sm:text-base">
                  All rights reserved &copy; 2024
                </p>
              </div>
            </footer>
          </div> */}

          <video
            autoPlay
            loop
            muted
            className=" w-full h-full absolute top-0 left-0 object-contain"
          >
            <source src="/videos/Fleurveda_Final.mp4" type="video/mp4" />
          </video>

          <footer className=" rounded-t-2xl bg-black text-white p-4 absolute bottom-0 w-full text-center  font-serif ">
            <div className="container mx-auto text-center flex items-center justify-between font-sans relative">
              <h1
                className="font-semibold cursor-pointer text-xs md:text-base max-sm:hidden"
                onClick={onNextButtonClick}
              >
                NOTIFY ME
              </h1>

              <button
                onClick={onNextButtonClick}
                // className="bg-blue-600 rounded-lg px-3 py-2 text-center w-1/3 absolute bottom-0 left-1/2 -translate-x-1/2 z-40"
              >
                <MdKeyboardDoubleArrowUp
                  className=" text-center animate-pulse  cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:left-5"
                  color="white"
                  size="30px"
                />
              </button>

              <p className="text-sm sm:text-base cursor-pointer ">
                All rights reserved &copy; 2024
              </p>
            </div>
          </footer>
        </div>
        <div ref={secondDivRef} className={Styles.secondDiv}>
          <button
            onClick={onBackButtonClick}
            className="bg-black/20 font-semibold rounded-lg px-3 py-2 text-center w-1/3 mt-5 ml-5"
          >
            CLOSE
          </button>
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
};

export default page;
