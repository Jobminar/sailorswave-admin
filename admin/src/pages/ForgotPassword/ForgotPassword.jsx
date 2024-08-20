import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import SailorShip from "../../assets/forgot-password-image.jpeg";
import SailorsLogo from "../../assets/Footer-Sailors-Logo.png";
const ForgotPassword = () => {
  return (
    <>
        
      <div className="row d-flex justify-content-center">
        <div className="col">
        <img src={SailorShip} className="SailorShip-image" alt="ship-Icon" />
        </div>
        <div className="col mx-5 mt-5">
          <div className="row container d-flex justify-content-center">
            <br />
            <img src={SailorsLogo} className="w-50 h-50 my-5 " alt="Sailors-Logo" />
            <p className="sub-heading-1">Forgot password</p>
            <br />
            <p className="sub-heading-2">
              Enter your mail for the verification process, we will send 4
              digits code to your mail
            </p>
            <form>
              <label>Email</label>
              <input type="email" className="email-input-1 my-2" placeholder="Enter your Mail ID"/>
              <div className="d-flex justify-content-center">
                <button type="submit" className="submit-button-1 btn btn-dark me-4 mt-2 mb-3 ">
                  CONTINUE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
