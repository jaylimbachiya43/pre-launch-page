"use client";
import { useEffect, useState } from "react";
import "./prelaunchpage.css";
import { TbPlayerTrackNext } from "react-icons/tb";
import SubscribeButton from "../SubscribeButton";
import SubscribeForm from "../Flipcard";
const PreLaunchPage = () => {
  const [showContent, setShowContent] = useState(false);
 
  useEffect(() => {

    const videoElement = document.getElementById("launchVideo");
    videoElement.addEventListener("ended", () => {
      const model = document.getElementById("button");
      return model.showModal();
    });
  }, []);

  const flipPage = () => {
    setShowContent(true);
  };

  return (
    <>
      <dialog id="button">
        <form method="dialog">
          <div
            className={`z-50 fixed top-0 left-0 w-screen h-screen flex justify-center items-center  `}
          >
            <div className="max-w-5xl rounded-2xl">
          
           <div onClick={flipPage}>

                            <SubscribeButton />
           </div>
                
            
            </div>
            <button className="absolute top-6 right-6 text-white">
              {/* <CancelIcon /> */}
            </button>
          </div>
        </form>
      </dialog>
      <div className="flex flex-col items-center justify-center  h-screen">
        {/* <div className={`text-transparent bg-clip-text bg-gradient-radial from-white to-[rgba(255,255,255,0.35)] flipX`}>
        <h1 className="text-6xl font-bold py-5">FLEURVEDA</h1>
       
      </div> */}
        {!showContent && (
          <>
            <div className={` border border-black max-w-4xl rounded-3xl shadow-black shadow-lg overflow-hidden  mx-2 md:mx-6  lg:mx-10 md:my-10 ${showContent ? "animate" : ""}`}>
              <video
                id="launchVideo"
                className="w-full h-full object-cover"
                controls
              >
                <source src="/videos/Fleurveda_Final.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* <div className="   border border-black rounded-3xl shadow-black shadow-lg overflow-hidden my-2 mx-3 md:mx-10 md:my-5 lg:my-5   ">
            <video
              id="launchVideo"
              className="object-cover"
              autoPlay
              controls
            >
              <source src="/videos/Fleurveda_Final.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
          </>
        )}
        {showContent && (
          <>
          <div className="text-center max-w-2xl max-h-xl bg-gray-100 rounded-3xl h-full flex flex-col justify-center content-center object-cover font-medium my-4 mx-2 md:mx-4 px-3 md:px-6 lg:px-10 md:my-10  py-4 md:py-0 animate">
  {/* <div className="pb-5 md:pb-8">
    <p className="text-2xl md:text-3xl lg:text-4xl font-bold pb-3 ">Fleurveda introduces</p>
    <p className="text-sm md:text-xl">
      a precise fusion of Science and Ayurveda, transcending the ordinary to elevate your self-care experience!
    </p>
  </div>
  <div className="pb-5 md:pb-10">
    <p className="text-lg md:text-xl  leading-6 md:leading-7 line-clamp-4">
      Coming up with our exclusive range of beauty elixirs, bath care Products, and hi-tech beauty accessories that cater to the redefined tastes of the discerning connoisseur.
    </p>
  </div>
  <div className="pb-5">
    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
      AT FLEURVEDA, LUXURY MEETS PURITY, AND CARE BECOMES AN ART!
    </h1>
  </div>
  <div>
    <p className="text-lg font-semibold md:text-base ">
      Subscribe to our newsletter for upcoming updates and exclusive insights!
    </p>
  </div> */}

<div className="">
          <h1 className="text-2xl mb-4">Fleurveda introduces</h1>
          <p className="text-sm mb-4">
            A precise fusion of Science and Ayurveda, transcending the ordinary to elevate your self-care experience!
          </p>
          <p className="text-sm mb-4">
            Coming up with our exclusive range of beauty elixirs, bath care Products, and hi-tech beauty accessories that
            cater to the redefined tastes of the discerning connoisseur.
          </p>
          <h3 className="font-normal mb-4 text-yellow-800">
            AT FLEURVEDA, LUXURY MEETS PURITY<br /> AND CARE BECOMES AN ART!
          </h3>
          <p className="text-xs text-gray-600 mb-4">
            Subscribe to our newsletter for upcoming updates and exclusive insights!
          </p>
        </div>

        <div className=" flex flex-col md:flex-row gap-2 justify-center content-center items-center  md:mt-9">
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="Your Email"
            className="py-3 px-4  border text-sm font-medium border-gray-300 rounded-full outline-none "
          />
           <button className =" py-3 px-8 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-800 text-white text-sm font-medium outline-none cursor-pointer">Subscribe</button>
        </div>
</div>
   
</>
        )}
      </div>
    </>
  );
};

export default PreLaunchPage;
