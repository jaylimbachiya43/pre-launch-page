"use client";
import { useEffect, useState } from "react";
import "./prelaunchpage.css";
import { TbPlayerTrackNext } from "react-icons/tb";
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
              <button
                className=" text-[#Ffd700] bg-white bg-opacity-10  font-bold items-center animate-pulse duration-300  flex flex-col gap-1  px-4 py-2 mt-4 rounded-md"
                onClick={flipPage}
              >
            Click Hear to Subscribe 
                            <TbPlayerTrackNext size="2em" color="gold"/>
                
              </button>
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
            <div className={` border border-black max-w-4xl rounded-3xl shadow-black shadow-lg overflow-hidden  mx-2 md:mx-6  lg:mx-10  ${showContent ? "animate" : ""}`}>
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
          <div className="text-center max-w-4xl   bg-yellow-500 rounded-3xl h-full flex flex-col justify-center content-center object-cover font-medium my-4 mx-2 md:mx-4 px-3 md:px-6 lg:px-10  animate">
  <div className="pb-5 md:pb-8">
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
  </div>
</div>
      </>
        )}
      </div>
    </>
  );
};

export default PreLaunchPage;
