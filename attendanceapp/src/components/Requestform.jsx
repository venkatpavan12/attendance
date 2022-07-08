import React from "react";
import logo from "../images/logo-black.png";
import "../Style/leave.css";

import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { apply_leave } from "../actions/leave";
import store from "../store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Requestform = ({ apply_leave }) => {
  const [formData, setFormData] = useState({
    startdate: "",
    enddate: "",
    reason: "",
  });
  const { startdate, enddate, reason } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    apply_leave(startdate, enddate, reason);
  };
  if (!localStorage.getItem("access")) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <ToastContainer />
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <ion-icon name="location"></ion-icon>
              <div className="topic">Address</div>
              <div className="text-one">Bandra, Mumbai</div>
            </div>
            <div className="phone details">
              <ion-icon name="call"></ion-icon>
              <div className="topic">Phone</div>
              <div className="text-one">+91 9528670242 (24/7 Support)</div>
            </div>
            <div className="email details">
              <ion-icon name="mail"></ion-icon>
              <div className="topic">Email</div>
              <div className="text-one">
                mihir@techmihirnaik.in <br /> oorja@techmihirnaik.in
                <br />
                akash@techmihirnaik.in
                <br />
                aniket@techmihirnaik.in
                <br />
                hr@techmihirnaik.in
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Leave Request Form</div>

            <form onSubmit={(e) => onSubmit(e)}>
              
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Leave Start Date(YYYY-MM-DD)"
                  name="startdate"
                  value={startdate}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Leave End Date(YYYY-MM-DD)"
                  name="enddate"
                  value={enddate}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="input-box message-box">
                <input
                  type="text"
                  placeholder="Reason For Taking Leave"
                  name="reason"
                  value={reason}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="button">
                <input type="submit" value="Request Leave" />
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default connect(null, { apply_leave })(Requestform);
