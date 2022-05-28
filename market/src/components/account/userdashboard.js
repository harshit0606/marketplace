import React from 'react'
import {Outlet,Routes,Route,Link} from "react-router-dom";
import Profile from "./profile"
import "./userdashboard.css";
function userdashboard() {
  return (
    <div className='userdashboard_main'>
        <h1>Your Account</h1>
        <hr></hr>
        <div className='dashboard'>
            <div className='dashboard_side'>
                <h3>ACCOUNT</h3>
                <Link to="/user/profile"><p>Profile</p></Link>
                <Link to="/user/businessdetails"><p>Business Details</p></Link>
                <Link to="/user/addresses"><p>Addresses</p></Link>
                <p>Favourites</p>
                <p>Manage RFQs</p>
                <hr></hr>
                <h3>ORDERS</h3>
                <p>My Orders</p>
                <hr/>
                <h3>HELP</h3>
                <p>Customer Care</p>
                <p>FAQs</p>
            </div>
            <div className='dashboard_right_side'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default userdashboard