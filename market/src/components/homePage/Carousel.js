import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Logo1 from "../../assets/home.png";
import "./carousel.css";
function CarouselDiv() {
  return (
    <div className='carousel_main'>
        <Carousel variant="dark">
        <Carousel.Item>
          <div className='carousel_div'>
            <div className='carousel_left'>
              <h1>Zero Commission Marketplace for B2B buying and selling</h1>
              <h4>We are Transforming  the way businesses buy and sell in India</h4>
              <p>Get assured lowest prices for your products</p>
              <p>Get 100% visibility on process</p>
              <p>100% payment protection with Crato</p>
              <button id="gradientt" className='explore_btn'>Explore Now</button>
            </div>
            <div className='carousel_right'>
                <img src={Logo1}/>
            </div>
          </div>
          
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default CarouselDiv