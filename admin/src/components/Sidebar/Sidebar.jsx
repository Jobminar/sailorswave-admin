import React from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import SailorsLogo from "../../assets/Footer-Sailors-Logo.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MyApplicationsList from "../../pages/MyApplicationsList";
import AdmitCardList from "../../pages/AdmitCard/AdmitCardList";
import InterviewSchedule from "../../pages/InterviewSchedule/InterviewSchedule";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar _____________________________________________ */}

      <div className="sidebar-2 container-fluid navbar-collapse">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-warning">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <span className="fs-5 d-none d-sm-inline text-dark">
                <IoMenu size={30} /> &nbsp;&nbsp;&nbsp;
                <img
                  src={SailorsLogo}
                  style={{ width: "110px", height: "55px", marginTop: "-5px" }}
                  alt="Sailors-logo"
                />
              </span>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <Link className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark">
                      Dashboard
                    </span>
                  </Link>
                </li>
                {/*<li>
                  <Link
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
                  </Link>
                 <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <Link  className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Item</span> 1{" "}
                      </Link>
                    </li>
                    <li>
                      <Link  className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Item</span> 2{" "}
                      </Link>
                    </li>
                  </ul> 
                </li>*/}
                <li>
                  <Link className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">
                      My Applications
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Admit card</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">
                      Interview feedback
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">
                      Selection letter
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">
                      Confirmation letter
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Enquiries</span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Sub Admin</span>
                  </Link>
                </li>
              </ul>
              <hr />
              
            </div>
          </div>
          <div className="col">
            <div className="row py-3 bg-info">
              <Dashboard />
              {/* <MyApplicationsList/> */}
              {/* <AdmitCardList/>     */}
              {/* <InterviewSchedule/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
