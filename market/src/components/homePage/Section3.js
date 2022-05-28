import React from "react";

import "./Section3.css";

const Section3 = () => {
  return (
    <div className="section-c-parent">
      <h1>Our Value Proposition</h1>
      <div className="section-c-row">
        <div className="section-c-col">
          <div className="section-c-card">
            <img src={"www.img.com"} alt="title" />
            <p>Assured lowest prices</p>
          </div>
        </div>
        <div className="section-c-col">
          <div className="section-c-card">
            <img src={"www.img.com"} alt="title" />
            <p>Transparent Process</p>
          </div>
        </div>
        <div className="section-c-col">
          <div className="section-c-card">
            <img src={"www.img.com"} alt="title" />
            <p>100% Payment Protection</p>
          </div>
        </div>
      </div>
      <div className="section-c-row">
        <div className="section-c-col">
          <div className="section-c-card">
            <img src={"www.img.com"} alt="title" />
            <p>Compare prices at single platform</p>
          </div>
        </div>
        <div className="section-c-col">
          <div className="section-c-card">
            <img src={"www.img.com"} alt="title" />
            <p>200+ Verified Merchants & Sellers</p>
          </div>
        </div>
        <div className="section-c-col">
          <div className="section-c-card">
            <img src={"www.img.com"} alt="title" />
            <p>Multiple flexible payment options</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
