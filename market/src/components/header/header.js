import React from 'react'
import Form from 'react-bootstrap/Form'
import {BsSearch} from "react-icons/bs"
import {BsPersonCircle} from "react-icons/bs"
import {BiMessageDetail} from "react-icons/bi"
import {FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom"

import "./header.css";
function Header() {
    function handleNavigate(e){
        e.preventDefault();
        
    }
  return (
    <div className='header'>  
    <div className='header_main'>
        <div className='header_logo'>
            <Link to="/"><h1>Crato</h1></Link>
            <p>Zero Commission Marketplace</p>
        </div>
        <div className='header_search'>
            <Form className='header_form'>
                <Form.Select className='form_select'>
                    <option>All</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </Form.Select>
                <Form.Control className='form_input' type="text" placeholder='Search here....'/>
            </Form>
            <BsSearch/>
        </div>
        <div className='header_icons'>
            <div onClick={handleNavigate} className='icon_div'>
                <BsPersonCircle className='header_icon'/>
                <p>My Crato</p>
            </div>
            <div className='icon_div'>
                <BiMessageDetail className='header_icon'/>
                <p>Messages</p>
            </div>
            <div className='icon_div'>
                <FaShoppingCart className='header_icon'/>
                <p>Cart</p>
            </div>
        </div>
    </div>
    <div className='header_2'>
        <p>Ready to Ship</p>
        <p>Sell on Crato</p>
        <p>RFQ</p>
        <p>Customer Care</p>
    </div>
    </div>
  )
}

export default Header