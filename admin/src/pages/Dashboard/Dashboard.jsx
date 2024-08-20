import React from "react";
import "./Dashboard.css";
import Header from "../../components/Header/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="Jumbotron my-4">
        <p>Welcome to Sailorwave</p>
        <p>Ivanka</p>
      </div>
      <div className="row ">
        <div className="col card ms-5 me-3">
          <div className="row card-body">
            <p className="card-text">Job Posts</p>
            <div className="col">
              <p className="card-title">2,456</p>
              <p className="card-title">+2.5%</p>
            </div>
            <div className="col">Graph</div>
          </div>
        </div>
        <div className="col card me-3">
          <div className="row card-body">
            <p className="card-text">Total Application</p>
            <div className="col">
              <p className="card-title">2,456</p>
              <p className="card-title">+2.5%</p>
            </div>
            <div className="col">Graph</div>
          </div>
        </div>
        <div className="col card me-3">
          <div className="row card-body">
            <p className="card-text">No of Rejected</p>
            <div className="col">
              <p className="card-title">2,456</p>
              <p className="card-title">+2.5%</p>
            </div>
            <div className="col">Graph</div>
          </div>
        </div>
        <div className="col card me-5">
          <div className="row card-body">
            <p className="card-text">No of Hirings</p>
            <div className="col">
              <p className="card-title">2,456</p>
              <p className="card-title">+2.5%</p>
            </div>
            <div className="col">Graph</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col card m-5">
          <div class="card-body">
            <div className="row">
              <p class="col card-title">Application Response</p>
              <p class="col card-text">Download Report</p>
            </div>
            <div
              className="ms-5 card text-center d-flex justify-content-center"
              style={{
                width: "15rem",
                height: "15rem",
                backgroundColor: "green"
              }}
            >
              Graph
            </div>
            <div className="row my-3">
              <div className="col">
                <p class="row card-text">Shortlisted</p>
                <p class="row card-text">942</p>
              </div>
              <div className="col">
                <p class="row card-text">Shortlisted</p>
                <p class="row card-text">942</p>
              </div>
              <div className="col">
                <p class="row card-text">Shortlisted</p>
                <p class="row card-text">942</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col card my-5 me-5 bg-white">
          <div className="row my-4">
            <p className="col text-start">Recent Job Posts</p>
            <div className="col">
              <button>Monthly</button>
              <button>Weekly</button>
              <button>Today</button>
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Applicant name</th>
                <th scope="col">Category</th>
                <th scope="col">Openings</th>
                <th scope="col">Applications</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody class="table-group">
              <tr>
                <td scope="row">Srikanth 1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td scope="row">Srikanth 2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@twitter</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td scope="row">Srikanth 3</td>
                {/* <td colspan="2">Larry the Bird</td> */}
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
