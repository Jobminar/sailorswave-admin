import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="row container d-flex justify-content-center w-25">
          <p>Log In to Admin Panel</p>
          <br />
          <p>Enter your mail and Password below</p>
          <br />
          <form>
            <label>Email</label>
            <input type="email" className="form-control" />
            <label>Password</label>
            <input type="password" className="form-control" />
            <Link to="/forget-password" className="d-flex justify-content-end mt-3">Forget password?</Link>
            <div className="d-flex justify-content-center mx-5">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            </div>
          </form>
            
            <p>Don't have account <Link to="/register">Sign up</Link></p>
        </div>
      </div>
    </>
  );
};

export default Login;
