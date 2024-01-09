// SubscribeButton.jsx
import React from "react";
import { GrLinkNext } from "react-icons/gr";
import "./subscribebutton.css";

const SubscribeButton = () => {
  return (
    <button className="custom-btn btn-7" onClick={() => console.log("Button clicked")}>
      <span>Subscribe 
 <i className="fas fa-arrow-right"></i>
      </span>
    </button>
  );
};

export default SubscribeButton;
