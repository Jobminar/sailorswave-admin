import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="row container d-flex justify-content-center w-25">
          <p className="create-account">Create an Account</p>
          <br />
          <p className="sub-heading">create a account to continue</p>
          <br />
          <form>
            <label>Email</label>
            <input type="email" className="form-control" />
            <label>OTP</label>
            <input type="text" className="form-control" />
            <span>
              <input type="checkbox" />
              <p>I accept terms and conditions</p>
            </span>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-dark m-2">
                Submit
              </button>
            </div>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
