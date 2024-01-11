// SubscribeForm.jsx
import React from "react";
import "./flipcard.css";

const SubscribeForm = () => {
  return (
    <div className="h-full w-full p-5 flex justify-center items-center" id="flip-card">
      <form className=" w-full h-fit p-5 rounded-lg bg-white">
        <div className="container">
          <h1 className="text-2xl mb-4">Fleurveda introduces</h1>
          <p className="text-sm mb-4">
            a precise fusion of Science and Ayurveda, transcending the ordinary to elevate your self-care experience!
          </p>
          <p className="text-sm mb-4">
            Coming up with our exclusive range of beauty elixirs, bath care Products, and hi-tech beauty accessories that
            cater to the redefined tastes of the discerning connoisseur.
          </p>
          <h3 className="font-normal mb-4 text-yellow-800">
            AT FLEURVEDA, LUXURY MEETS PURITY,<br /> AND CARE BECOMES AN ART!
          </h3>
          <p className="text-xs text-gray-600 mb-4">
            Subscribe to our newsletter for upcoming updates and exclusive insights!
          </p>
        </div>
        <div className=" mb-4">
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 w-40 border border-gray-300 rounded-full outline-none text-xs"
          />
         
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
