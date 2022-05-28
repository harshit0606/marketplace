import React from 'react'
import {FaLongArrowAltRight} from "react-icons/fa"
import {BsCheck2Square} from "react-icons/bs";
import {BsPersonCircle} from "react-icons/bs";
import {FiEdit} from "react-icons/fi";
import {IoListCircleOutline} from "react-icons/io5";
import "./section4.css";
import {IoMdCheckmarkCircleOutline} from "react-icons/io"
function section4() {
  return (
    <div className='section-4-div'>
        <h1>How it works?</h1>
        <div className='text_div'>
            <p>Logon to Crato.in</p>
            <div className='arroww'><FaLongArrowAltRight  className='arrow_icon'/></div>
            <p>Search your product</p>
            <div className='arroww'><FaLongArrowAltRight className='arrow_icon'/></div>
            <p>Choose from multiple options and suppliers</p>
        </div>
        <div className='button_div'>
            <button id="gradientt" className='explore_btn'>Place your Order</button>
        </div>
        <h2>OR</h2>
        <br></br>
        <div className='steps_div'>
            <div className='step_row'>
                <div className='step'>
                <BsCheck2Square className='check_icon'/>
                &nbsp;Step1: Create Profile
                </div>
                <div className='step_icon'>
                <BsPersonCircle className='step_iconn'/>
                </div>
            </div>
            <div className='step_row'>
                <div className='step'>
                <BsCheck2Square className='check_icon'/>
                &nbsp;Step2: Post your requirement
                </div>
                <div className='step_icon'>
                <FiEdit className='step_iconn'/>
                </div>
            </div>
            <div className='step_row'>
                <div className='step'>
                <BsCheck2Square className='check_icon'/>
                &nbsp;Step3: Choose from multiple  offers through verified suppliers
                </div>
                <div className='step_icon'>
                <IoListCircleOutline className='step_iconn'/>
                </div>
            </div>
            <div className='step_row'>
                <div className='step'>
                <BsCheck2Square className='check_icon'/>
                &nbsp;Step4: Select and place an order at your convinience
                </div>
                <div className='step_icon'>
                <IoMdCheckmarkCircleOutline className='step_iconn'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default section4