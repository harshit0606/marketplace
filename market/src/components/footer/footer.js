import React from "react";
import "./footer.css";
import{FaFacebookSquare,FaTwitterSquare,FaInstagram,FaGooglePlusSquare} from "react-icons/fa";

function footer() {
  return (
    <div className="footer_main">
      <div className="footer1">
        <h1>Crato</h1>
        <h3>Zero Commission Marketplace</h3>
        <p>
          Crato is a B2B eCommerce marketplace which connects buyers and sellers
          through its platform without charging any commission on transactions.
        </p>

        <div className="footer_icons">
        <FaFacebookSquare/>
        <FaTwitterSquare/>
        <FaInstagram/>
        <FaGooglePlusSquare/>
        </div>
      </div>
      <div className="footer2">
        <h2>Our Links</h2>
        <div className="footer2sub">
          <div className="footer2subb">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Shipping</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="footer2subbb">
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Help & Support</p>
          </div>
        </div>
      </div>
      <div className="footer3">
        <h2>Contact Us</h2>
        <p>Comestible24 Technologies Private Limited</p>
        <p>GSTIN 29AAJCC3488J1Z2</p>
        <br></br>
        <p>
          301/302, 3rd Floor, Saket Callipolis, Sarjapur Main Road ,
          Doddakanneli, Bengaluru, Karnataka -560035
        </p>
        <p>contact@crato.com</p>
        <p>+91 7092 720 291</p>
      </div>
    </div>
  );
}

export default footer;
