import React from "react";
import "./Hero.css";

//first section of the webpage
function Hero() {
  return (
    <div className="map-image">
      <div className="heroHeading">
        <h1>Travel Blog</h1>
      </div>
      <div className="heroSubHeading">
        <h2>
          A single page view travel blog developed using React JS by Catherine
          McHale for CSI3150 Homework6
        </h2>
      </div>
    </div>
  );
}

export default Hero;
