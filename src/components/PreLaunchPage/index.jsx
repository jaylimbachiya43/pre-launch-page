'use client'
import { useEffect, useState } from 'react';
import Footer from '../Footer';

const PreLaunchPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate video end event
    const videoElement = document.getElementById('launchVideo');
    videoElement.addEventListener('ended', () => {
      setShowContent(true);
    });
  }, []);

  const flipPage = () => {
    // Add logic to flip the page
    console.log('Page flipped!');
  };

  return (
    <div className="flex flex-col items-center justify-center my-4 mx-3 md:mx-10 md:my-10 lg:my-14 lg:mx-10 h-screen">
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

<video 
className=' border rounded-3xl shadow-black shadow-lg '
          src="/videos/Fleurveda_Final.mp4"
          id="launchVideo"
          autoPlay
          controls  
        //   style={{ outline: "none", border: "none",  }}
        ></video>

          {/* <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
            onClick={flipPage}
          >
            Subscribe
          </button> */}
        </>
      )}
      {showContent && (
        <div className="text-center bg-white  w-full rounded-3xl h-full flex flex-col justify-center content-center object-contain overflow-hidden font-medium">
            <p>Fleurveda introduce</p>
            <p>a precise fusion of Science and Ayurveda,</p>
            <p>transcending the ordinary to elevate your self-care experience!</p>

          <p className=' py-3'>Coming up with our exclusive range of beauty elixirs, bath care Products and hi-tech beauty 
</p>
<p>accessories that caters to the redefined tastes of the discerning connoisseur.</p>
          <h1 className="text-xl md:text-3xl font-bold mb-4">AT FLEURVEDA, LUXURY MEETS PURITY, AND CARE BECOMES AN ART!</h1>
          <p>subscribe to our newsletter for upcoming updates and exclusive insights!</p>
        </div>
      )}
     
    </div>
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
