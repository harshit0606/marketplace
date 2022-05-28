import React from "react";
import {FaLongArrowAltRight} from "react-icons/fa"
import {FaLongArrowAltLeft} from "react-icons/fa"
import Arrow  from "../../assets/arr.png";
import "./Section2.css"

const Section2 = () => {
  return (
    <div className="section-b-parent">
      <h1>How Crato makes procurement easy</h1>
      <p>100% transparency in the entire supply chain process</p>
      <div className='upperDiv'>
        <div className='firstCircle'>Buyer</div>
        <div className='Arrows below'>
            <p>Submit RFQ Form</p>
            <img src={Arrow}/>
            <p>Recieves best rates along with
            lead-time and multiple flexible payment
             options from Crato and suppliers directly</p>
        </div>
        <div className="secondData">
        <p>Recieves information and passes it to relevant suppliers</p>
        <div className='secondCircle'>Crato Marketplace</div>
        <p>Recieves Quotations from multiple suppliers and 
        activates auction timer for faster response from supplier</p>
        </div>
        <div className='Arrows'><p>Recieves information and submit price</p>
        <img src={Arrow}/>
        <p>Responds to RFQ along with T&C</p></div>
        <div className='firstCircle'>Seller</div>
    </div>
    </div>
  );
};

export default Section2;
