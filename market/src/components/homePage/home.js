import React from "react";
import Carousel from "./Carousel";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./section4";
function home() {
  return (
    <div className="home_main">
      <Carousel />
      <Section2 />
      <Section3 />
      <Section4/>
    </div>
  );
}

export default home;
