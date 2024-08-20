import React from 'react'
import SailorsLogo from "../../assets/Footer-Sailors-Logo.png";
import { PiCopyrightLight } from "react-icons/pi";

const Footer = () => {
  return (
    <>
       <div className=" d-flex justify-content-center bg-white w-auto fixed-bottom">{/*fixed-bottom*/}
        <p className=''>
        <img src={SailorsLogo} className='bg-white mx-4' style={{width:"110px", height:"50px"}} alt="Sailors-Icon"/>
            <span><PiCopyrightLight /> 2024 All Rights Reserved to Hire karma | Version 0.1</span>
        </p>
      </div>
    </>
  )
}

export default Footer;
