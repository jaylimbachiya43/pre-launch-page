'use client'
import { useEffect, useState } from 'react';
import './prelaunchpage.css'; 

const PreLaunchPage = () => {
  const [showContent, setShowContent] = useState(false);
  // const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    // Simulate video end event
    const videoElement = document.getElementById('launchVideo');
    videoElement.addEventListener('ended', () => {
      setShowContent(true);
      const model = document.getElementById("button");
      return model.showModal();
    });
  }, []);

  const flipPage = () => {
    // setIsFlipped(!isFlipped);
  };

  return (
    <>
     <dialog id="button">
          <form method="dialog">
          
          <div className={`z-50 fixed top-0 left-0 w-screen h-screen flex justify-center items-center  bgBlur`}>
      <div className="max-w-5xl rounded-2xl">
      

      <button className='bg-blue-500 text-white px-4 py-2 mt-4 rounded-md' onClick={ flipPage()}>
      click me 

      </button>
      </div>
      <button className="absolute top-6 right-6 text-white">
        {/* <CancelIcon /> */}
      </button>
    </div>

          </form>
        </dialog>
    <div className="flex flex-col items-center justify-center  h-screen">
    <div className={`text-transparent bg-clip-text bg-gradient-radial from-white to-[rgba(255,255,255,0.35)] flipX`}>
        <h1 className="text-6xl font-bold py-5">FLEURVEDA</h1>
       
      </div>
      {!showContent && (
        <>
          {/* <video
            id="launchVideo"
            className="w-full h-full object-cover"
            controls
          >
            <source src="/videos/Fleurveda_Final.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}

<div className=" min-w-max   border border-black rounded-3xl shadow-black shadow-lg overflow-hidden my-2 mx-3 md:mx-10 md:my-5 lg:my-5  zoom-out-animation ">
            <video
              id="launchVideo"
              className="w-full h-full object-cover"
              autoPlay
              controls
            >
              <source src="/videos/Fleurveda_Final.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
            onClick={flipPage}
          >
            Subscribe
          </button> */}
        </>
      )}
      {showContent && (
        <>
        <div className="text-center bg-white   rounded-3xl h-full flex flex-col justify-center content-center  object-cover overflow-hidden font-medium my-4 px-3 md:px-10 md:my-10 lg:py-2 lg:px-10 animate ">
           
           <div className='py-5'>
            
            <p className='text-2xl font-bold top-0'>Fleurveda introduce</p>
            <p>a precise fusion of Science and Ayurveda,</p>
            <p>transcending the ordinary to elevate your self-care experience!</p>
            </div> 
<div className='pb-5'>

          <p className=''>Coming up with our exclusive range of beauty elixirs, bath care Products and hi-tech beauty 
</p>
<p>accessories that caters to the redefined tastes of the discerning connoisseur.</p>
</div>
<div className=''>

          <h1 className="text-xl md:text-3xl font-bold mb-4">AT FLEURVEDA, LUXURY MEETS PURITY, AND CARE BECOMES AN ART!</h1>
</div>

<div>
  
          <p>subscribe to our newsletter for upcoming updates and exclusive insights!</p>
</div>
        </div>
        
</>   )}
     
    </div>
  


  </>
  );
};

export default PreLaunchPage;

// components/PreLaunchPage.jsx
// import { useEffect, useState } from 'react';

// const PreLaunchPage = () => {
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     // Simulate video end event
//     const videoElement = document.getElementById('launchVideo');
//     videoElement.addEventListener('ended', () => {
//       setShowContent(true);
//     });
//   }, []);

//   const flipPage = () => {
//     // Add logic to flip the page
//     console.log('Page flipped!');
//     setShowContent(!showContent);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center my-4 mx-3 md:mx-10 md:my-10 lg:my-14 lg:mx-10 h-screen">
//       {!showContent && (
//         <>
//           <div className="relative w-full h-96 overflow-hidden">
//             <video
//               id="launchVideo"
//               className="w-full h-full object-cover transition-all duration-500"
//               autoPlay
//               controls
//             >
//               <source src="/videos/Fleurveda_Final.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <button
//               className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md absolute bottom-0 transform transition-all duration-500 hover:translate-y-0.5"
//               onClick={flipPage}
//             >
//               Learn More
//             </button>
//           </div>
//         </>
//       )}
//       {showContent && (
//         <div className="text-center bg-black text-white">
//           <h1 className="text-3xl font-bold mb-4">Our New App is Launching!</h1>
//           <p>Please subscribe for the latest updates.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PreLaunchPage;
