import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img src="R(1).jpg" alt="background" className="banner__image" />
      <div className="banner__content">
        <h1 className="banner__title">Your Title Here</h1>
        <p className="banner__description">Your description here</p>
        <button className="banner__button">Your Button Text Here</button>
      </div>
    </div>
  );
}

export default Banner;
