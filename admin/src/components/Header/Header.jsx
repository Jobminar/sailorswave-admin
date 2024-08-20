import React from "react";
import { CiBellOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaUser, FaCog } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import SailorsLogo from "../../assets/Footer-Sailors-Logo.png";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <>
      <div>
        <div className="row">
          {/* 
          <div className="col col-6 col-md-4 ">
          </div>
          <div className="col col-sm-6 col-md-8 d-flex justify-content-end bg-primary py-2"> */}
          <div className="col col-6 col-md-2 d-flex justify-content-start border-5 bg-white py-2">
            Content area...
          </div>
          <div className="col d-flex justify-content-end border-5 bg-warning py-2">
            <input
              type="text"
              className="ms-5 form-control w-auto"
              placeholder="Search for Jobs and etc."
            />
            <div className="mx-3" style={{ height: "40px" }}>
              <CiBellOn style={{ width: "30px", height: "25px" }} />
            </div>
            <div>
              <div className="mx-3" style={{ height: "40px" }}>
                <p
                  className=""
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="dropdown pb-4">
                    <Link
                      className="d-flex align-items-center text-white text-decoration-none"
                      id="dropdownUser1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://github.com/mdo.png"
                        alt="hugenerd"
                        width="30"
                        height="30"
                        className="rounded-circle"
                      />
                      <span className="d-none d-sm-inline mx-1"></span>
                    </Link>
                    <ul className="dropdown-menu text-small shadow">
                      <li>
                        <Link className="dropdown-item">Manage Account</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item">Change Password</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item">Activity Log</Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item">Log out</Link>
                      </li>
                    </ul>
                  </div>
                  {/* <img src={<CgProfile />} alt="profile-Icon"/> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
