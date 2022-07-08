// import React from 'react'
import "../Style/profile.css";
import { Link, Navigate,useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { mark_atd } from "../actions/attendance";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../store";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

const Profile = ({ mark_atd }) => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    internid: "",
    tmnemailid: "",
    internship_year: "",
    contact_number: "",
    team: "",
    department: "",
    gender: "",
    description: "",
    attendance: "",
    leaves: "",
    internship_year: "",
    photo: "",
  });

  try {
    useEffect(() => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
          Accept: "application/json",
        },
      };
      let url=`${process.env.REACT_APP_API_URL}/api/profile-detail/`;
      const fetchData = async () => {
        const { data } = await axios.get(
          url,
          config
        );
        setProfile(data);
      };
      fetchData();
    }, []);
  } catch (ex) {
    console.log(ex);
  }

  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  const checkout = (e) => {
    e.preventDefault();
    mark_atd("CHECK_OUT");
  };
  const checkin = (e) => {
    e.preventDefault();
    mark_atd("CHECK_IN");
  };
  if (!localStorage.getItem("access")) {
    return <Navigate to="/login" />;
  }
  return (
    <div style={{ marginBottom: "30px" }}>
      <ToastContainer />
      <div className="ScriptHeader">
        <div className="rt-container">
          <div className="col-rt-12">
            <div className="rt-heading">
              <h1
                style={{
                  color: "rgb(37 99 235)",
                  fontSize: "6rem",
                  marginLeft: "400px",
                }}
              >
                INTERN PROFILE
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="rt-container">
        <div class="col-rt-12">
          <div class="Scriptcontent">
            <div class="student-profile py-4">
              <div class="container" style={{ width: "85%" }}>
                <div class="row">
                  <div className="col-lg-4">
                    <div
                      class="card shadow-sm"
                      style={{
                        margin: "30px",
                        marginRight: "50px",
                        boxSizing: "600px",
                      }}
                    >
                      <div className="card-header bg-transparent text-center">
                        <img
                          className="profile_img"
                          src={profile.photo}
                          alt="student dp"
                        />
                        <h3>{profile.username}</h3>
                      </div>

                      <div className="card-body">
                        <p className="mb-0">
                          <strong className="pr-1">Intern ID:</strong>
                          {profile.internid}
                        </p>
                        <p className="mb-0">
                          <strong className="pr-1">Team:</strong>
                          {profile.team}
                        </p>
                        <p className="mb-0">
                          <strong className="pr-1">Department:</strong>
                          {profile.department}
                        </p>
                      </div>
                    </div>
                    <Calendar
                      value={dateState}
                      onChange={(e) => changeDate(e)}
                    />
                    <p>
                      Current selected date is{" "}
                      <b>{moment(dateState).format("MMMM Do YYYY")}</b>
                    </p>
                  </div>
                  <div class="col-lg-8" style={{ marginTop: "30px" }}>
                    <div className="card shadow-sm">
                      <div className="card-header bg-transparent border-0">
                        <h3 className="mb-0">
                          <i class="far fa-clone pr-1"></i>General Information
                        </h3>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-bordered">
                        <tr>
                          <th width="30%">Attendance</th>
                          <td width="2%">:</td>
                          <td>{profile.attendance}</td>
                        </tr>
                        <tr>
                          <th width="50%">Interenship Year </th>
                          <td width="2%">:</td>
                          <td>{profile.internship_year}</td>
                        </tr>
                        <tr>
                          <th width="30%">Gender</th>
                          <td width="2%">:</td>
                          <td>{profile.gender}</td>
                        </tr>
                        <tr>
                          <th width="30%">Techmihirinaik EmailID</th>
                          <td width="2%">:</td>
                          <td>{profile.tmnemailid}</td>
                        </tr>
                        <tr>
                          <th width="30%">Gmail</th>
                          <td width="2%">:</td>
                          <td>{profile.email}</td>
                        </tr>
                        <tr>
                          <th width="30%">Contact Number</th>
                          <td width="2%">:</td>
                          <td>{profile.contact_number}</td>
                        </tr>
                        <tr>
                          <th width="30%">Leave Taken</th>
                          <td width="2%">:</td>
                          <td>{profile.leaves}</td>
                        </tr>
                      </table>
                      <button
                        class="inline-block bg-blue-600 px-4 py-2 rounded-full btn-primary text-white font-bold "
                        style={{ marginRight: "20px" }}
                        onClick={(e) => checkin(e)}
                      >
                        Check In
                      </button>
                      <button
                        class="inline-block bg-blue-600 px-4 py-2 rounded-full btn-primary text-white font-bold "
                        style={{ marginRight: "20px" }}
                        onClick={(e) => checkout(e)}
                      >
                        Check Out
                      </button>
                      <Link
                        to="/requestform"
                        class="inline-block bg-blue-600 px-4 py-2 rounded-full btn-primary text-white font-bold "
                      >
                        Leave
                      </Link>
                    </div>

                    <div
                      className="card shadow-sm"
                      style={{ marginBottom: "30px" }}
                    >
                      <div className="card-header bg-transparent border-0">
                        <h3 className="mb-0">
                          <i className="far fa-clone pr-1"></i>Other Information
                        </h3>
                      </div>
                      <div
                        className="card-body pt-0"
                        style={{ marginBottom: "180px", marginTop: "50px" }}
                      >
                        <p>{profile.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { mark_atd })(Profile);
